import { useNavigate } from 'react-router-dom'
import { cn } from '@bem-react/classname'
import type { WithClassName } from '@/types/withClassName'
import { Icon } from '#components/UI/Icon'

import './BackButton.scss'
import type { FC } from 'react'

const cnBackButton = cn('BackButton')

export interface IBackButtonProps extends WithClassName {
  to?: string | number
  onClick?: () => void
}

export const BackButton: FC<IBackButtonProps> = ({
  className,
  to,
  onClick
}) => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    if (onClick) {
      onClick()
      return
    }

    if (typeof to === 'string') {
      navigate(to)
    } else {
      navigate(-1)
    }
  }

  return (
    <button
      type="button"
      className={cnBackButton(null, [className])}
      onClick={handleNavigate}
      aria-label="Back"
    >
      <Icon src="/icons/chevron-left.svg" />
    </button>
  )
}
