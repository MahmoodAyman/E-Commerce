import { createRoot } from 'react-dom/client'
import './app.css'
import MainLayout from './layouts/mainLayout/MainLayout'
createRoot(document.getElementById('root')!).render(
  <MainLayout/>
)
