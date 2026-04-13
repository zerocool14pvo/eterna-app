import type { FC, ReactNode } from 'react'
import { cn } from '@bem-react/classname'
import type { WithClassName } from '@/types/withClassName'

import './Title.scss'

const cnTitle = cn('Title')

export type TitleVariant = 'display' | 'h1' | 'h2' | 'h3' | 'h4'
export type TitleColor = 'primary' | 'secondary' | 'muted'
export type TextAlign = 'left' | 'center' | 'right'

export interface ITitleProps extends WithClassName {
  children: ReactNode
  variant?: TitleVariant
  color?: TitleColor
  align?: TextAlign
}

export const Title: FC<ITitleProps> = ({
  className,
  children,
  variant = 'h1',
  color = 'primary',
  align = 'center'
}) => {
  return (
    <div className={cnTitle({ variant, color, align }, [className])}>
      {children}
    </div>
  )
}
