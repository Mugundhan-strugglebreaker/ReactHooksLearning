import logo from './logo.svg';
import './App.css';
import HookCounter from './Components/HookCounter';
import HookCounterTwo from './Components/HookCounterTwo';
import HookCounterThree from './Components/HookCounterThree';
import HookCounterFour from './Components/HookCounterFour';
import HookCounterUseEffectOne from './Components/HookCounterUseEffectOne';
import HookMouse from './Components/HookMouse';
import HookContainer from './Components/HookContainer';
import IntervalHookCounter from './Components/IntervalHookCounter';
import FetchingData from './Components/FetchingData';
import ComponentC from './Components/ComponentC';
import React, { useReducer } from 'react';
import Example from './Components/Example';
import CounterOne from './Components/CounterOne';
import CounterTwo from './Components/CounterTwo';
import CounterThree from './Components/CounterThree';
import AComponent from './Components/AComponent';
import BComponent from './Components/BComponent';
import CComponent from './Components/CComponent';
import FetchingDataOne from './Components/FetchingDataOne';
import FetchingTwo from './Components/FetchingTwo';
import ParentComponent from './ParentComponent';
import UseMemoCounter from './Components/UseMemoCounter';
import FocusInput from './Components/FocusInput';
import HookTimer from './Components/HookTimer';
import DocTitleOne from './Components/DocTitleOne';
import DocTitleTwo from './DocTitleTwo';
import CountTwo from './Components/CountTwo';
import CountOne from './Components/CountOne';
import UserForm from './Components/UserForm';

export const UserContext = React.createContext()
export const PhoneContext = React.createContext()

export const CounterContext = React.createContext()

const initialState = 0;
const reducer =(state,action)=>{
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state;
    }
}

function App() {
  const [count,dispath] = useReducer(reducer,initialState)
  return (
    <div className="App">
      <UserForm></UserForm>
      {/* <CountOne></CountOne> */}
      {/* <CountTwo></CountTwo> */}
      {/* <DocTitleOne></DocTitleOne> */}
      {/* <DocTitleTwo></DocTitleTwo> */}
      {/* <HookTimer></HookTimer> */}
      {/* <FocusInput></FocusInput> */}
      {/* <UseMemoCounter></UseMemoCounter> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <FetchingTwo></FetchingTwo> */}
      {/* <FetchingDataOne></FetchingDataOne> */}
      {/* <CounterContext.Provider value={{countState : count , dispathState : dispath}}>
        <AComponent></AComponent>
        <BComponent></BComponent>
        <CComponent></CComponent>
      </CounterContext.Provider> */}
      {/* <CounterThree></CounterThree> */}
      {/* <CounterTwo></CounterTwo> */}
      {/* <CounterOne></CounterOne> */}
      {/* <Example></Example> */}
      {/* <HookCounter></HookCounter> */}
      {/* <HookCounterTwo></HookCounterTwo> */}
      {/* <HookCounterThree></HookCounterThree> */}
      {/* <HookCounterFour></HookCounterFour> */}
      {/* <HookCounterUseEffectOne></HookCounterUseEffectOne> */}
      {/* <HookMouse></HookMouse> */}
      {/* <HookContainer></HookContainer> */}
      {/* <IntervalHookCounter></IntervalHookCounter> */}
      {/* <FetchingData></FetchingData> */}
      {/* <UserContext.Provider value={'MugundhanS'} >
                <PhoneContext.Provider value={'9994556635'}>
                    <ComponentC></ComponentC>
                 </PhoneContext.Provider>
      </UserContext.Provider> */}
    </div>

  );
}

export default App;
