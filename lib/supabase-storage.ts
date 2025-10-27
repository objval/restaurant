import { supabase } from './supabase-locations'

const BUCKET_NAME = 'product-images'
const LOCATION_BUCKET = 'restaurant-images'

// Initialize storage bucket (call this once or check in Supabase dashboard)
export async function initializeStorageBucket() {
  const { data: buckets, error: listError } = await supabase.storage.listBuckets()
  
  if (listError) {
    console.error('Error listing buckets:', listError)
    return false
  }
  
  const bucketExists = buckets?.some(bucket => bucket.name === BUCKET_NAME)
  const locationBucketExists = buckets?.some(bucket => bucket.name === LOCATION_BUCKET)
  
  if (!bucketExists) {
    const { error: createError } = await supabase.storage.createBucket(BUCKET_NAME, {
      public: true,
      fileSizeLimit: 5242880, // 5MB
      allowedMimeTypes: ['image/png', 'image/jpeg', 'image/jpg', 'image/webp']
    })
    
    if (createError) {
      console.error('Error creating bucket:', createError)
      return false
    }
    
    console.log('Storage bucket created successfully')
  }

  if (!locationBucketExists) {
    const { error: createError } = await supabase.storage.createBucket(LOCATION_BUCKET, {
      public: true,
      fileSizeLimit: 5242880, // 5MB
      allowedMimeTypes: ['image/png', 'image/jpeg', 'image/jpg', 'image/webp']
    })
    
    if (createError) {
      console.error('Error creating location bucket:', createError)
      return false
    }
    
    console.log('Location storage bucket created successfully')
  }
  
  return true
}

// Upload image to Supabase Storage
export async function uploadProductImage(
  file: File,
  locationId: string,
  productSlug: string
): Promise<{ path: string | null; url: string | null; error: string | null }> {
  try {
    // Validate file
    if (!file) {
      return { path: null, url: null, error: 'No file provided' }
    }
    
    if (file.size > 5 * 1024 * 1024) {
      return { path: null, url: null, error: 'File size must be less than 5MB' }
    }
    
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp']
    if (!allowedTypes.includes(file.type)) {
      return { path: null, url: null, error: 'File must be PNG, JPG, or WebP' }
    }
    
    // Generate unique file name
    const fileExt = file.name.split('.').pop()
    const timestamp = Date.now()
    const fileName = `${locationId}/${productSlug}-${timestamp}.${fileExt}`
    
    // Upload to Supabase Storage
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      })
    
    if (error) {
      console.error('Upload error:', error)
      return { path: null, url: null, error: error.message }
    }
    
    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(fileName)
    
    return {
      path: data.path,
      url: publicUrl,
      error: null
    }
  } catch (error) {
    console.error('Upload error:', error)
    return { 
      path: null, 
      url: null, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    }
  }
}

// Delete image from Supabase Storage
export async function deleteProductImage(path: string): Promise<boolean> {
  try {
    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .remove([path])
    
    if (error) {
      console.error('Delete error:', error)
      return false
    }
    
    return true
  } catch (error) {
    console.error('Delete error:', error)
    return false
  }
}

// Get public URL for a storage path
export function getStorageUrl(path: string | null): string | null {
  if (!path) return null
  
  const { data: { publicUrl } } = supabase.storage
    .from(BUCKET_NAME)
    .getPublicUrl(path)
  
  return publicUrl
}

// Upload location image (hero, interior, signature, gallery)
export async function uploadLocationImage(
  file: File,
  locationId: string,
  type: 'hero' | 'interior' | 'signature' | 'ambiance' | 'gallery' = 'gallery',
  supabaseClient?: any // Optional authenticated client
): Promise<{ path: string; publicUrl: string }> {
  try {
    // Use provided client or fall back to singleton
    const client = supabaseClient || supabase
    
    // Validate file
    if (!file) {
      throw new Error('No file provided')
    }
    
    if (file.size > 5 * 1024 * 1024) {
      throw new Error('File size must be less than 5MB')
    }
    
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp']
    if (!allowedTypes.includes(file.type)) {
      throw new Error('File must be PNG, JPG, or WebP')
    }
    
    // Generate unique file name
    const fileExt = file.name.split('.').pop()
    const timestamp = Date.now()
    const fileName = `${locationId}/${type}/${timestamp}.${fileExt}`
    
    // Upload to Supabase Storage
    const { data, error } = await client.storage
      .from(LOCATION_BUCKET)
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      })
    
    if (error) {
      console.error('Upload error:', error)
      throw new Error(error.message)
    }
    
    // Get public URL
    const { data: { publicUrl } } = client.storage
      .from(LOCATION_BUCKET)
      .getPublicUrl(fileName)
    
    return {
      path: data.path,
      publicUrl
    }
  } catch (error) {
    console.error('Upload error:', error)
    throw error
  }
}

// Delete location image from Supabase Storage
export async function deleteLocationImage(urlOrPath: string): Promise<boolean> {
  try {
    // Extract path from URL if needed
    let path = urlOrPath
    if (urlOrPath.includes('supabase')) {
      const urlParts = urlOrPath.split(`${LOCATION_BUCKET}/`)
      path = urlParts[1] || urlOrPath
    }
    
    const { error } = await supabase.storage
      .from(LOCATION_BUCKET)
      .remove([path])
    
    if (error) {
      console.error('Delete error:', error)
      return false
    }
    
    return true
  } catch (error) {
    console.error('Delete error:', error)
    return false
  }
}

// Get public URL for location image
export function getPublicUrl(path: string, bucket: string = LOCATION_BUCKET): string {
  const { data: { publicUrl } } = supabase.storage
    .from(bucket)
    .getPublicUrl(path)
  
  return publicUrl
}