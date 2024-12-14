/* eslint-disable @typescript-eslint/no-unsafe-type-assertion -- This is ok */
import {
  useEffect,
  useRef,
  type ElementRef,
  type MutableRefObject
} from 'react'

export const useDetailsElementInteraction =
  (): MutableRefObject<ElementRef<'details'> | null> => {
    const ref = useRef<ElementRef<'details'> | null>(null)

    useEffect(() => {
      if (!ref.current) {
        return
      }

      const { current: detailsElement } = ref

      const handleKeydown = (e: KeyboardEvent): void => {
        if (e.key === 'Escape' && detailsElement.open) {
          detailsElement.open = false
        }
      }

      const handleClick = (e: MouseEvent): void => {
        if (!detailsElement.contains(e.target as HTMLElement)) {
          detailsElement.open = false
        }
      }

      document.addEventListener('keydown', handleKeydown)
      document.addEventListener('click', handleClick)

      return () => {
        document.removeEventListener('keydown', handleKeydown)
        document.removeEventListener('click', handleClick)
      }
    }, [])

    return ref
  }
