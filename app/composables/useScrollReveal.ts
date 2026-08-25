import { useIntersectionObserver } from '@vueuse/core'

export function useScrollReveal() {
  const target = ref(null)
  const isVisible = ref(false)

  const { stop } = useIntersectionObserver(
    target,
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry?.isIntersecting) {
        isVisible.value = true
        stop() // anime une seule fois
      }
    },
    { threshold: 0.2 }
  )

  return { target, isVisible }
}