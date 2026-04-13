import { type FC } from 'react'
import { cn } from '@bem-react/classname'
import type { WithClassName } from '@/types/withClassName'
import { Title, Text } from '#components'

import './Profile.scss'

const cnProfile = cn('Profile')

export const Profile: FC<WithClassName> = ({ className }) => {
  return (
    <div className={cnProfile(null, [className])}>
      <Title variant="h1">Profile</Title>
      <Text>User settings and info</Text>
    </div>
  )
}
