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
      <CounterContext.Provider value={{countState : count , dispathState : dispath}}>
        <AComponent></AComponent>
        <BComponent></BComponent>
        <CComponent></CComponent>
      </CounterContext.Provider>
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
