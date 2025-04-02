import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { Padre } from './07-tarea-memo/07-tarea-memo/Padre'

//import './08-useReducer/intro-reducer'

import './index.css'
import { MainApp } from './09-useContext/MainApp'
//import { TodoApp } from './08-useReducer/TodoApp'
//import { CallbackHook } from './06-memos/CallbackHook'
//import { MemoHook } from './06-memos/MemoHook'
//import { Memorize } from './06-memos/Memorize'
//import { Layout } from './05-useLayoutEffect/Layout'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import { MultipleCustomsHooks } from './03-examples/MultipleCustomsHooks'
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
//import { CounterApp } from './01-useState/CounterApp'
//import { HooksApp } from './HooksApp'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // </StrictMode>
  <BrowserRouter>
    <MainApp/>
  </BrowserRouter>
)
