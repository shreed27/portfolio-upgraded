function isWebStorageLike(value: unknown): value is {
  getItem: (key: string) => string | null
  setItem: (key: string, value: string) => void
  removeItem: (key: string) => void
  clear: () => void
} {
  if (!value || typeof value !== 'object') return false
  const storage = value as Record<string, unknown>
  return (
    typeof storage.getItem === 'function' &&
    typeof storage.setItem === 'function' &&
    typeof storage.removeItem === 'function' &&
    typeof storage.clear === 'function'
  )
}

function disableBrokenWebStorageOnServer() {
  if (typeof window !== 'undefined') return

  for (const key of ['localStorage', 'sessionStorage'] as const) {
    const value = (globalThis as unknown as Record<string, unknown>)[key]
    if (value === undefined) continue
    if (isWebStorageLike(value)) continue

    try {
      Object.defineProperty(globalThis, key, {
        value: undefined,
        configurable: true,
        writable: true,
      })
    } catch {
      // If we can't redefine it, at least avoid throwing in our instrumentation.
    }
  }
}

export async function register() {
  disableBrokenWebStorageOnServer()
}

