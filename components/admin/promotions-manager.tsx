'use client'

import { useState, useEffect, useCallback } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { toast } from 'sonner'
import { Gift, Save, Loader2, Trash2, Palette, Calendar, Info } from 'lucide-react'

interface Promotion {
  id?: string
  location_id: string
  title: string
  subtitle: string
  schedule: string
  color: string
  active: boolean
  display_order: number
}

interface PromotionsManagerProps {
  locationId: string
  locationName: string
}

const MAX_PROMOTIONS = 3

export function PromotionsManager({ locationId, locationName }: PromotionsManagerProps) {
  const supabase = createClientComponentClient()
  const [promotions, setPromotions] = useState<Promotion[]>([])
  const [originalPromotions, setOriginalPromotions] = useState<Promotion[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  const fetchPromotions = useCallback(async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('promotions')
        .select('*')
        .eq('location_id', locationId)
        .order('display_order')

      if (error) throw error

      const existingPromos = (data || []).map(p => ({ ...p, subtitle: p.subtitle || '', schedule: p.schedule || '', color: p.color || '#6d28d9' }))

      const promoSlots: Promotion[] = []
      for (let i = 0; i < MAX_PROMOTIONS; i++) {
        const existing = existingPromos.find(p => p.display_order === i)
        if (existing) {
          promoSlots.push(existing)
        } else {
          promoSlots.push({
            location_id: locationId,
            title: '',
            subtitle: '',
            schedule: '',
            color: '#6d28d9',
            active: false,
            display_order: i,
          })
        }
      }
      setPromotions(promoSlots)
      setOriginalPromotions(JSON.parse(JSON.stringify(promoSlots))) // Deep copy
    } catch (error) {
      console.error('Error fetching promotions:', error)
      toast.error('No se pudieron cargar las promociones.')
    } finally {
      setLoading(false)
    }
  }, [locationId, supabase])

  useEffect(() => {
    if (locationId) {
      fetchPromotions()
    }
  }, [locationId, fetchPromotions])

  const handleFieldChange = (index: number, field: keyof Promotion, value: any) => {
    const newPromos = [...promotions]
    newPromos[index] = { ...newPromos[index], [field]: value }
    setPromotions(newPromos)
  }

  const handleClearPromo = (index: number) => {
    const newPromos = [...promotions]
    newPromos[index] = {
      ...newPromos[index],
      id: newPromos[index].id, // Keep id for deletion tracking
      title: '',
      subtitle: '',
      schedule: '',
      color: '#6d28d9',
      active: false,
    }
    setPromotions(newPromos)
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      const operations = []

      for (let i = 0; i < MAX_PROMOTIONS; i++) {
        const promo = promotions[i]
        const originalPromo = originalPromotions[i]

        const hasContent = !!promo.title
        const wasPresent = !!originalPromo.id

        if (hasContent) {
          const dataToUpsert = {
            location_id: locationId,
            title: promo.title,
            subtitle: promo.subtitle,
            schedule: promo.schedule,
            color: promo.color,
            active: promo.active,
            display_order: i,
          }

          if (promo.id) {
            // Update existing promotion
            operations.push(supabase.from('promotions').update(dataToUpsert).eq('id', promo.id))
          } else {
            // Insert new promotion
            operations.push(supabase.from('promotions').insert(dataToUpsert))
          }
        } else if (wasPresent) {
          // Delete promotion that was cleared
          operations.push(supabase.from('promotions').delete().eq('id', originalPromo.id!))
        }
      }

      const results = await Promise.all(operations)
      const hasError = results.some(res => res.error)

      if (hasError) {
        results.forEach(res => {
          if (res.error) console.error('Error saving promotion:', res.error)
        })
        throw new Error('Ocurrió un error al guardar una o más promociones.')
      }

      toast.success('Promociones guardadas exitosamente.')
      fetchPromotions() // Refresh data
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gift className="h-5 w-5 text-primary" />
            Gestionar Promociones - {locationName}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="lg:col-span-2 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 border-b">
        <CardTitle className="flex items-center gap-2">
          <Gift className="h-5 w-5 text-primary" />
          Gestionar Promociones - {locationName}
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-1">
          Define hasta 3 promociones especiales para este local.
        </p>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {promotions.map((promo, index) => (
            <div key={index} className="border rounded-lg p-4 space-y-4 bg-gradient-to-br from-card to-muted/5 relative">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-foreground">Promoción {index + 1}</h4>
                <Switch
                  checked={promo.active}
                  onCheckedChange={(checked) => handleFieldChange(index, 'active', checked)}
                />
              </div>

              <div className='space-y-3'>
                <div>
                  <Label htmlFor={`title-${index}`}>Título</Label>
                  <Input
                    id={`title-${index}`}
                    value={promo.title}
                    onChange={(e) => handleFieldChange(index, 'title', e.target.value)}
                    placeholder="Ej: 2x1 en Cervezas"
                  />
                </div>
                <div>
                  <Label htmlFor={`subtitle-${index}`}>Subtítulo</Label>
                  <Input
                    id={`subtitle-${index}`}
                    value={promo.subtitle}
                    onChange={(e) => handleFieldChange(index, 'subtitle', e.target.value)}
                    placeholder="¡La mejor promo!"
                  />
                </div>
                <div>
                  <Label htmlFor={`schedule-${index}`} className="flex items-center gap-1"><Calendar className='w-3 h-3'/> Horario</Label>
                  <Input
                    id={`schedule-${index}`}
                    value={promo.schedule}
                    onChange={(e) => handleFieldChange(index, 'schedule', e.target.value)}
                    placeholder="Lunes a Viernes, 16-19hr"
                  />
                </div>
                <div className='relative'>
                  <Label htmlFor={`color-${index}`} className="flex items-center gap-1"><Palette className='w-3 h-3'/> Color de Fondo</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id={`color-${index}`}
                      value={promo.color}
                      onChange={(e) => handleFieldChange(index, 'color', e.target.value)}
                      className='w-full'
                    />
                    <input 
                      type="color" 
                      value={promo.color}
                      onChange={(e) => handleFieldChange(index, 'color', e.target.value)}
                      className='w-10 h-10 p-1 bg-card border rounded-md cursor-pointer'
                    />
                  </div>
                </div>
              </div>

              {promo.title && (
                <Button variant="destructive" size="sm" onClick={() => handleClearPromo(index)} className='w-full'>
                  <Trash2 className="h-4 w-4 mr-2" />
                  Limpiar Promoción
                </Button>
              )}
            </div>
          ))}
        </div>

        <div className="pt-6 border-t">
          <Button onClick={handleSave} disabled={saving} className="w-full bg-gradient-to-r from-primary to-primary/80">
            {saving ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Guardando Promociones...</>
            ) : (
              <><Save className="mr-2 h-4 w-4" /> Guardar Promociones</>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
