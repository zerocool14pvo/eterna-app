import { cn } from '@bem-react/classname'

import type { WithClassName } from '@/types/withClassName'

import { Header, Hero, UserStories, HowItWorks, Footer } from '#components'


import './Home.scss'

const cnHome = cn('Home')

export type HomeProps = WithClassName

export const Home = ({ className }: HomeProps) => (
  <div className={cnHome(null, className)}>
    <Header />
    <main className={cnHome('content')}>
      <Hero />
      <UserStories />
      <HowItWorks />
      <Footer />
    </main>
  </div>
)
