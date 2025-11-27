/**
 * Development-only logger utility
 * Logs are disabled in production to keep console clean
 */

const isDev = process.env.NODE_ENV === 'development'

export const logger = {
  /** Log general info - only in development */
  log: (...args: unknown[]) => {
    if (isDev) console.log(...args)
  },
  
  /** Log warnings - only in development */
  warn: (...args: unknown[]) => {
    if (isDev) console.warn(...args)
  },
  
  /** Log errors - always logged (important for debugging) */
  error: (...args: unknown[]) => {
    console.error(...args)
  },
  
  /** Log debug info - only in development */
  debug: (...args: unknown[]) => {
    if (isDev) console.debug(...args)
  },
  
  /** Log with a label prefix - only in development */
  labeled: (label: string, ...args: unknown[]) => {
    if (isDev) console.log(`[${label}]`, ...args)
  },
}

export default logger
