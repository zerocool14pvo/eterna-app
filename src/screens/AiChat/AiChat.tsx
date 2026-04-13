import { type FC } from 'react'
import { cn } from '@bem-react/classname'
import type { WithClassName } from '@/types/withClassName'
import { Title, Text } from '#components'

import './AiChat.scss'

const cnAiChat = cn('AiChat')

export const AiChat: FC<WithClassName> = ({ className }) => {
  return (
    <div className={cnAiChat(null, [className])}>
      <Title variant="h1">AI Chat</Title>
      <Text>Your AI companion</Text>
    </div>
  )
}
