import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { cn } from '@bem-react/classname'
import type { WithClassName } from '@/types/withClassName'
import { Avatar } from '#components/UI/Avatar'
import { Rating } from '#components/UI/Rating'
import { Icon } from '#components/UI/Icon'

import './ReviewCard.scss'

const cnReviewCard = cn('ReviewCard')

export type ReviewCardLayout = 'default' | 'alternate' | 'minimal'

export interface IReviewCardProps extends WithClassName {
  name: string
  avatar?: string | null
  rating: number
  date?: string
  text: string
  isVerified?: boolean
  layout?: ReviewCardLayout
}

export const ReviewCard: FC<IReviewCardProps> = ({
  name,
  avatar,
  rating,
  date,
  text,
  isVerified = true,
  layout = 'default',
  className
}) => {
  const { t } = useTranslation()

  const verifiedTag = (
    <div className={cnReviewCard('verified', { unverified: !isVerified })}>
      <Icon src="/icons/verify.svg" size={15} />
      <span className={cnReviewCard('verifiedLabel')}>
        {isVerified ? t('review.verified') : t('review.unverified')}
      </span>
    </div>
  )

  if (layout === 'minimal') {
    return (
      <div className={cnReviewCard({ layout }, [className])}>
        <div className={cnReviewCard('header')}>
          <Avatar src={avatar} name={name} className={cnReviewCard('avatar')} />
          <div className={cnReviewCard('info')}>
            <span className={cnReviewCard('name')}>{name}</span>
            <Rating value={rating} size={14} className={cnReviewCard('rating')} />
          </div>
        </div>
        <div className={cnReviewCard('text')}>{text}</div>
      </div>
    )
  }

  if (layout === 'alternate') {
    return (
      <div className={cnReviewCard({ layout }, [className])}>
        <Rating value={rating} className={cnReviewCard('rating')} />
        <div className={cnReviewCard('text')}>{text}</div>
        <div className={cnReviewCard('footer')}>
          <Avatar src={avatar} name={name} className={cnReviewCard('avatar')} />
          <div className={cnReviewCard('info')}>
            <div className={cnReviewCard('row')}>
              <span className={cnReviewCard('name')}>{name}</span>
              {verifiedTag}
            </div>
            <div className={cnReviewCard('date')}>{date}</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={cnReviewCard({ layout }, [className])}>
      <div className={cnReviewCard('header')}>
        <Avatar src={avatar} name={name} className={cnReviewCard('avatar')} />
        <div className={cnReviewCard('info')}>
          <div className={cnReviewCard('row')}>
            <span className={cnReviewCard('name')}>{name}</span>
            {verifiedTag}
          </div>
          <div className={cnReviewCard('row')}>
            <Rating value={rating} />
            <span className={cnReviewCard('date')}>{date}</span>
          </div>
        </div>
      </div>
      <div className={cnReviewCard('text')}>{text}</div>
    </div>
  )
}
