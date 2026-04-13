import type { FC } from 'react'
import { cn } from '@bem-react/classname'
import type { WithClassName } from '@/types/withClassName'

import './Avatar.scss'

const cnAvatar = cn('Avatar')

export interface IAvatarProps extends WithClassName {
  src?: string | null
  name?: string
}

export const Avatar: FC<IAvatarProps> = ({
  src,
  name,
  className
}) => {
  const initial = name ? name.charAt(0).toUpperCase() : ''

  return (
    <div className={cnAvatar({}, [className])}>
      {src ? (
        <img src={src} alt={name || 'Avatar'} className={cnAvatar('image')} />
      ) : (
        <span className={cnAvatar('initial')}>{initial}</span>
      )}
    </div>
  )
}
