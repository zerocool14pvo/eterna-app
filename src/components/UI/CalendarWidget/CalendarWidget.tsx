import { cn } from '@bem-react/classname'
import dayjs from 'dayjs'
import { useMemo, type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Icon } from '#components/UI/Icon'
import type { WithClassName } from '@/types/withClassName'

import './CalendarWidget.scss'

const cnCalendarWidget = cn('CalendarWidget')

export interface ICalendarWidgetProps extends WithClassName {
  checkedDates?: string[]
}

export const CalendarWidget: FC<ICalendarWidgetProps> = ({
  className,
  checkedDates = [],
}) => {
  const { t } = useTranslation()
  const weekdays = t('calendar.weekdays', { returnObjects: true }) as string[]

  const days = useMemo(() => {
    const today = dayjs().startOf('day')
    // Get Monday of the current week (if today is Sunday, we go back 6 days)
    const dayOfWeek = today.day()
    const diffToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1
    const startOfWeek = today.subtract(diffToMonday, 'day')

    return Array.from({ length: 7 }).map((_, i) => {
      const d = startOfWeek.add(i, 'day')
      const isFuture = d.isAfter(today)
      const isCurrent = d.isSame(today)
      // MOCK logic: past/current days are checked if they are in checkedDates OR just dummy checked for Demo
      // If we provided checkedDates, we use it, else we simulate past 3 days as checked
      const dateStr = d.format('YYYY-MM-DD')
      const isChecked =
        checkedDates.includes(dateStr) ||
        (!isFuture && !isCurrent && checkedDates.length === 0)

      return {
        date: d,
        isFuture,
        isCurrent,
        isChecked,
        dateLabel: d.date().toString(),
        weekdayLabel: weekdays[d.day()],
      }
    })
  }, [checkedDates, weekdays])

  return (
    <div className={cnCalendarWidget(null, [className])}>
      <div className={cnCalendarWidget('title')}>{t('calendar.title')}</div>
      <div className={cnCalendarWidget('days')}>
        {days.map((day) => {
          return (
            <div
              key={day.date.toString()}
              className={cnCalendarWidget('day', { future: day.isFuture })}
            >
              <div
                className={cnCalendarWidget('circle', {
                  current: day.isCurrent,
                })}
              >
                {day.isChecked ? (
                  <Icon
                    src="/icons/check.svg"
                    className={cnCalendarWidget('check')}
                  />
                ) : (
                  <span
                    className={cnCalendarWidget('date', {
                      future: day.isFuture,
                    })}
                  >
                    {day.dateLabel}
                  </span>
                )}
              </div>
              <div
                className={cnCalendarWidget('weekday', {
                  future: day.isFuture,
                })}
              >
                {day.weekdayLabel}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
