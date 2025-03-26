import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { FocusScreen } from './04-useRef/FocusScreen'
//import { MultipleCustomsHooks } from './03-examples/MultipleCustomsHooks'
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
//import { CounterApp } from './01-useState/CounterApp'
//import { HooksApp } from './HooksApp'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // </StrictMode>
    <FocusScreen/>
)
