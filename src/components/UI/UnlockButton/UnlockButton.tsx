import { cn } from '@bem-react/classname'
import parse from 'html-react-parser'
import { type ButtonHTMLAttributes, type FC } from 'react'
import { useTranslation } from 'react-i18next'

import type { WithClassName } from '@/types/withClassName'

import './UnlockButton.scss'

const cnUnlockButton = cn('UnlockButton')

export interface IUnlockButtonProps
  extends WithClassName, ButtonHTMLAttributes<HTMLButtonElement> {}

export const UnlockButton: FC<IUnlockButtonProps> = ({
  className,
  ...props
}) => {
  const { t } = useTranslation()

  return (
    <button
      className={cnUnlockButton(null, [className])}
      type="button"
      {...props}
    >
      <span className={cnUnlockButton('wrapper')}>
        <span className={cnUnlockButton('text')}>
          {parse(t('dailyEnergy.unlockReading'))}
        </span>
        <svg
          className={cnUnlockButton('svg')}
          xmlns="http://www.w3.org/2000/svg"
          width="84"
          height="87"
          viewBox="0 0 84 87"
          fill="none"
        >
          <path
            opacity="0.1"
            d="M5.47532 25L6.61039 31.8281L10.5584 29.4036L8.14026 33.4115L15 34.5L8.14026 35.5885L10.5584 39.5964L6.61039 37.1719L5.47532 44L4.38961 37.1719L0.441559 39.5964L2.81039 35.5885L-4 34.5L2.81039 33.4115L0.441559 29.4036L4.38961 31.8281L5.47532 25Z"
            fill="white"
          />
          <path
            opacity="0.16"
            d="M64.9662 63L66.5195 72.3437L71.9221 69.026L68.613 74.5104L78 76L68.613 77.4896L71.9221 82.974L66.5195 79.6562L64.9662 89L63.4805 79.6562L58.0779 82.974L61.3195 77.4896L52 76L61.3195 74.5104L58.0779 69.026L63.4805 72.3437L64.9662 63Z"
            fill="white"
          />
          <path
            opacity="0.16"
            d="M76.4805 0L77.3766 5.39062L80.4935 3.47656L78.5844 6.64063L84 7.5L78.5844 8.35937L80.4935 11.5234L77.3766 9.60937L76.4805 15L75.6234 9.60937L72.5065 11.5234L74.3766 8.35937L69 7.5L74.3766 6.64063L72.5065 3.47656L75.6234 5.39062L76.4805 0Z"
            fill="white"
          />
        </svg>
      </span>
    </button>
  )
}
