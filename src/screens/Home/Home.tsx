import { cn } from '@bem-react/classname'

import type { WithClassName } from '@/types/withClassName'

import './Home.scss'

const cnHome = cn('Home')

export type HomeProps = WithClassName

export const Home = ({ className }: HomeProps) => (
  <div className={cnHome('Root', className)}>Главная</div>
)
