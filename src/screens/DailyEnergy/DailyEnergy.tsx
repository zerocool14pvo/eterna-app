import {
  CalendarWidget,
  DailyEnergyCard,
  Icon,
  Title,
  UnlockButton,
} from '#components'
import { cn } from '@bem-react/classname'
import { type FC } from 'react'

import energyBg from '#assets/energy-1.png'
import type { WithClassName } from '@/types/withClassName'

import './DailyEnergy.scss'

import { useNavigate } from 'react-router-dom'

const cnDailyEnergy = cn('DailyEnergy')

export const DailyEnergy: FC<WithClassName> = ({ className }) => {
  const navigate = useNavigate()

  const goToSettings = () => {
    navigate('/app/settings')
  }
  return (
    <div className={cnDailyEnergy(null, [className])}>
      <div className={cnDailyEnergy('header')}>
        <Title variant="h1" align="left">
          Daily Energy
        </Title>

        <div className={cnDailyEnergy('buttons')}>
          <button type="button" className={cnDailyEnergy('button')}>
            <Icon src="/icons/share.svg" />
          </button>
          <button
            type="button"
            className={cnDailyEnergy('button')}
            onClick={goToSettings}
          >
            <Icon src="/icons/settings.svg" />
          </button>
        </div>
      </div>

      <CalendarWidget className={cnDailyEnergy('calendar')} />

      <div className={cnDailyEnergy('list')}>
        <DailyEnergyCard
          imageSrc={energyBg}
          title="Today’s energy is <br>
<span>the High Priestess (II)</span>"
          description="Today, tune in to your feelings and subtle signals to understand what you can truly trust."
        />

        <UnlockButton className={cnDailyEnergy('unlock')} />
      </div>
    </div>
  )
}
