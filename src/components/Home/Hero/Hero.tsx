import hero1 from '@/assets/hero-1.png'
import hero2 from '@/assets/hero-2.png'
import hero3 from '@/assets/hero-3.png'
import starLeft from '@/assets/star-left.png'
import starRight from '@/assets/star-right.png'
import { Title, Button, Text } from '#components/UI'

import './Hero.scss'
import type { WithClassName } from '@/types/withClassName'
import { cn } from '@bem-react/classname'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

const cnHero = cn('Hero')

export type HeroProps = WithClassName

export const Hero: FC<HeroProps> = ({ className }) => {
  const { t } = useTranslation()

  return (
    <section className={cnHero({}, [className])}>
      <div className={cnHero('decoration')}>
        <img src={starRight} alt="" className={cnHero('star', { pos: 'top-right' })} />
        <img src={starLeft} alt="" className={cnHero('star', { pos: 'center-left' })} />
      </div>

      <div className={cnHero('top')}>
        <Title variant="display" className={cnHero('title')}>
          {t('home.hero.title')}
        </Title>

        <Text className={cnHero('subtitle')}>
          {t('home.hero.subtitle')}
        </Text>

        <Button variant="primary" size="xl" className={cnHero('cta')}>
          {t('home.hero.cta')}
        </Button>
      </div>


      <div className={cnHero('cards')}>
        <div className={cnHero('card')}>
          <img src={hero1} alt="The High Priestess" />
        </div>
        <div className={cnHero('card')}>
          <img src={hero2} alt="The Lovers" />
        </div>
        <div className={cnHero('card')}>
          <img src={hero3} alt="The Star" />
        </div>
      </div>
    </section>
  )
}
