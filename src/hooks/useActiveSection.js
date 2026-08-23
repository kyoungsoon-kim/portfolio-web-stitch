import { useEffect, useState } from 'react'

/*
  Tracks which section owns the viewport. IntersectionObserver instead of a scroll listener,
  so nav highlighting costs nothing per frame.
*/
export const useActiveSection = (ids) => {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const visible = new Map()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visible.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        })

        let best = null
        let bestRatio = 0
        visible.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            best = id
            bestRatio = ratio
          }
        })
        if (best) setActive(best)
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids])

  return active
}
