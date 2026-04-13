import type { FC, ReactNode } from 'react'
import { cn } from '@bem-react/classname'
import type { WithClassName } from '@/types/withClassName'

import './Tag.scss'

const cnTag = cn('Tag')

export type TagVariant = 'default' | 'white'

export interface ITagProps extends WithClassName {
  children: ReactNode
  variant?: TagVariant
}

export const Tag: FC<ITagProps> = ({
  className,
  children,
  variant = 'default'
}) => {
  return (
    <div className={cnTag({ variant }, [className])}>
      {children}
    </div>
  )
}
