import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST() {
  try {
    // Revalidate all pages
    revalidatePath('/', 'layout')
    
    return NextResponse.json({ revalidated: true })
  } catch (error) {
    console.error('Revalidation error:', error)
    return NextResponse.json({ revalidated: false }, { status: 500 })
  }
}