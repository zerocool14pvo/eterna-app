import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { cn } from '@bem-react/classname'
import type { WithClassName } from '@/types/withClassName'
import { Title, ReviewCard } from '#components/UI'

import './UserStories.scss'

const cnUserStories = cn('UserStories')

export type UserStoriesProps = WithClassName

export const UserStories: FC<UserStoriesProps> = ({ className }) => {
  const { t } = useTranslation()

  const reviews = [
    {
      name: t('home.reviews.emily.name'),
      text: t('home.reviews.emily.text'),
      rating: 5,
      avatar: null // Will add generated avatars later
    },
    {
      name: t('home.reviews.sophie.name'),
      text: t('home.reviews.sophie.text'),
      rating: 5,
      avatar: null
    },
    {
      name: t('home.reviews.daniel.name'),
      text: t('home.reviews.daniel.text'),
      rating: 5,
      avatar: null
    },
    {
      name: t('home.reviews.olivia.name'),
      text: t('home.reviews.olivia.text'),
      rating: 5,
      avatar: null
    }
  ]

  return (
    <section id="reviews" className={cnUserStories({}, [className])}>
      <Title variant="h2" className={cnUserStories('title')}>
        {t('home.reviews.title')}
      </Title>

      <div className={cnUserStories('list')}>
        {reviews.map((review, index) => (
          <ReviewCard 
            key={index}
            name={review.name}
            text={review.text}
            rating={review.rating}
            avatar={review.avatar}
            layout="minimal"
            className={cnUserStories('card')}
          />
        ))}
      </div>
    </section>
  )
}
