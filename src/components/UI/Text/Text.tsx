import { type FC, type ReactNode } from 'react'
import { cn } from '@bem-react/classname'

import type { WithClassName } from '@/types/withClassName'

import './Text.scss'

const cnText = cn('Text')

export type TextVariant = 'primary' | 'secondary'
export type TextAlign = 'left' | 'center' | 'right'
export type TextSize = '13' | '15'

export interface ITextProps extends WithClassName {
  children: ReactNode
  variant?: TextVariant
  align?: TextAlign
  size?: TextSize
}

export const Text: FC<ITextProps> = ({ 
  children, 
  variant = 'secondary', 
  align = 'center',
  size = '15',
  className 
}) => {
  return (
    <div className={cnText({ variant, align, size }, [className])}>
      {children}
    </div>
  )
}
