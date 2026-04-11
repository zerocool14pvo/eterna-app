import { cn } from '@bem-react/classname'
import { Route, Routes } from 'react-router-dom'

import { Home } from '#screens/Home'

import './App.scss'

const cnApp = cn('App')

const App = () => (
  <div className={cnApp()}>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </div>
)

export { App }
