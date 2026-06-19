'use client'
import { useState, useEffect } from 'react'

export function useDevice() {
  const [state, setState] = useState({ isMobile: false, isLowEnd: false })

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    const nav = navigator as Navigator & { deviceMemory?: number }
    const isLowEnd =
      navigator.hardwareConcurrency <= 4 ||
      (nav.deviceMemory !== undefined && nav.deviceMemory <= 4)
    setState({ isMobile, isLowEnd })
  }, [])

  return state
}
