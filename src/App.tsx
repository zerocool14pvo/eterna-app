import { AuthLayout, ProfileLayout } from '#components'
import { cn } from '@bem-react/classname'
import { Navigate, Route, Routes } from 'react-router-dom'

import { AiChat } from '#screens/AiChat'
import { Billing } from '#screens/Billing'
import { CreateNewPassword } from '#screens/CreateNewPassword'
import { DailyEnergy } from '#screens/DailyEnergy'
import { ForgotPassword } from '#screens/ForgotPassword'
import { Home } from '#screens/Home'
import { MoneyBack } from '#screens/MoneyBack'
import { Privacy } from '#screens/Privacy'
import { Profile } from '#screens/Profile'
import { SignIn } from '#screens/SignIn'
import { Terms } from '#screens/Terms'

import './App.scss'

import { Settings } from './screens/Settings'

const cnApp = cn('App')

export const App = () => (
  <div className={cnApp()}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/billing" element={<Billing />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/money-back" element={<MoneyBack />} />
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Navigate to="sign-in" replace />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="create-new-password" element={<CreateNewPassword />} />
      </Route>
      <Route path="/app" element={<ProfileLayout />}>
        <Route index element={<Navigate to="energy" replace />} />
        <Route path="energy" element={<DailyEnergy />} />
        <Route path="chat" element={<AiChat />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  </div>
)
