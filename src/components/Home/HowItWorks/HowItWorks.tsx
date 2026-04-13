import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { cn } from '@bem-react/classname'
import type { WithClassName } from '@/types/withClassName'
import { Title, Text } from '#components/UI'

import './HowItWorks.scss'

const cnHowItWorks = cn('HowItWorks')

export type HowItWorksProps = WithClassName

export const HowItWorks: FC<HowItWorksProps> = ({ className }) => {
  const { t } = useTranslation()

  const steps = [
    {
      title: t('home.howItWorks.step1.title'),
      description: t('home.howItWorks.step1.description'),
    },
    {
      title: t('home.howItWorks.step2.title'),
      description: t('home.howItWorks.step2.description'),
    },
    {
      title: t('home.howItWorks.step3.title'),
      description: t('home.howItWorks.step3.description'),
    },
    {
      title: t('home.howItWorks.step4.title'),
      description: t('home.howItWorks.step4.description'),
    },
  ]

  return (
    <section id="how-it-works" className={cnHowItWorks({}, [className])}>
      <Title variant="h2" className={cnHowItWorks('title')}>
        {t('home.howItWorks.title')}
      </Title>

      <div className={cnHowItWorks('content')}>
        <div className={cnHowItWorks('line')} />
        <div className={cnHowItWorks('steps')}>
          {steps.map((step, index) => (
            <div key={index} className={cnHowItWorks('item')}>
              <div className={cnHowItWorks('dot')}>
                {index + 1}
              </div>
              <div className={cnHowItWorks('step')}>
                <Title variant="h4" align="left" className={cnHowItWorks('key')}>
                  {step.title}
                </Title>
                <Text size="13" align="left" className={cnHowItWorks('value')}>
                  {step.description}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
