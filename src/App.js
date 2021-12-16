import logo from './logo.svg';
import './App.css';
import HookCounter from './Components/HookCounter';
import HookCounterTwo from './Components/HookCounterTwo';
import HookCounterThree from './Components/HookCounterThree';
import HookCounterFour from './Components/HookCounterFour';
import HookCounterUseEffectOne from './Components/HookCounterUseEffectOne';
import HookMouse from './Components/HookMouse';

function App() {
  return (
    <div className="App">
      {/* <HookCounter></HookCounter> */}
      {/* <HookCounterTwo></HookCounterTwo> */}
      {/* <HookCounterThree></HookCounterThree> */}
      {/* <HookCounterFour></HookCounterFour> */}
      {/* <HookCounterUseEffectOne></HookCounterUseEffectOne> */}
      <HookMouse></HookMouse>
    </div>
  );
}

export default App;
