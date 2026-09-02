// Directiva v-reveal: agrega la clase "is-visible" cuando el elemento entra
// en el viewport, para animar contenido al hacer scroll (no solo al cargar).
// Uso: v-reveal="{ delay: 0.15 }"  (delay en segundos, opcional)
const observers = new WeakMap()

export const vReveal = {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (binding.value?.variant) el.classList.add(`reveal-${binding.value.variant}`)
    if (binding.value?.delay) el.style.animationDelay = `${binding.value.delay}s`

    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )

    observer.observe(el)
    observers.set(el, observer)
  },
  unmounted(el) {
    observers.get(el)?.unobserve(el)
    observers.delete(el)
  },
}
