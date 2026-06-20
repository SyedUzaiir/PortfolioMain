interface CacheItem<T> {
  data: T
  expiry: number
}

const memoryCache = new Map<string, CacheItem<unknown>>()

export function getCachedData<T>(key: string): T | null {
  const cached = memoryCache.get(key)
  if (!cached) return null
  
  if (Date.now() > cached.expiry) {
    memoryCache.delete(key)
    return null
  }
  return cached.data as T
}

export function setCachedData<T>(key: string, data: T, ttlSeconds: number): void {
  memoryCache.set(key, {
    data,
    expiry: Date.now() + ttlSeconds * 1000
  })
}

export async function withCache<T>(
  key: string,
  ttlSeconds: number,
  fetchFn: () => Promise<T>
): Promise<T> {
  const cached = getCachedData<T>(key)
  if (cached !== null) {
    return cached
  }
  
  const freshData = await fetchFn()
  setCachedData(key, freshData, ttlSeconds)
  return freshData
}
