import {Route, Routes, Link} from 'react-router-dom'
import './App.css';
import Home from './component/Home';
import DemoLifecycleClass from './component/ClassComponent';
import InputValidation from './component/InputValidation';
import CountDown from './component/CountDown';
import HookUseState from './component/HookUseState';
import HookUseEffect from './component/HookUseEffect';
import HookUseContext from './component/HookUseContext';

function App() {
  return (
    <div className="App">
      <h1>ReactJs for beginer</h1>

        <hr/>
        <ul className='navList'>
            <li><Link className='link' to="/">Home</Link></li>
            <li><Link className='link' to="/classcomponent">Class Component Lifecycle</Link></li>
            <li><Link className='link' to="/inputvalidation">Input Validation</Link></li>
            <li><Link className='link' to="/usestate">Hook useState</Link></li>
            <li><Link className='link' to="/countdownt">Count down</Link></li>
            <li><Link className='link' to="/useeffect">Hook useEffect</Link></li>
            <li><Link className='link' to="/usecontext">Hook useContext()</Link></li>
        </ul>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/inputvalidation' element={<InputValidation/>} />
        <Route path='/classcomponent' element={<DemoLifecycleClass/>} />
        <Route path='/usestate' element={<HookUseState/>} />
        <Route path='/countdownt' element={<CountDown/>} />
        <Route path='/useeffect' element={<HookUseEffect/>} />
        <Route path='/usecontext' element={<HookUseContext/>} />
      </Routes>
    </div>
  );
}

export default App;
