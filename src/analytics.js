// Carga Google Analytics 4 (gtag.js) solo si hay un Measurement ID configurado.
// Define VITE_GA_MEASUREMENT_ID en un archivo .env.local (no se sube a git).
export function initAnalytics() {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID

  if (!measurementId || !import.meta.env.PROD) return

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }
  gtag('js', new Date())
  gtag('config', measurementId)
}
