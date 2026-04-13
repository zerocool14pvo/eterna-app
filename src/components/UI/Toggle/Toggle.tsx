import type { FC } from 'react'
import { cn } from '@bem-react/classname'

import type { WithClassName } from '@/types/withClassName'

import './Toggle.scss'

const cnToggle = cn('Toggle')

export interface IToggleProps extends WithClassName {
  isActive?: boolean
  onClick?: () => void
}

export const Toggle: FC<IToggleProps> = ({ className, isActive, onClick }) => {
  return (
    <button
      type="button"
      className={cnToggle({ active: isActive }, [className])}
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <div className={cnToggle('line')} />
      <div className={cnToggle('line')} />
      <div className={cnToggle('line')} />
    </button>
  )
}
