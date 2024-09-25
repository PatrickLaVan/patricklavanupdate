import { Route, Routes} from 'react-router-dom';
import { baseName } from '../router';
import { Home } from './pages'


const App = () => {
  return (
    <main className='bg-slate-300/20'>
        <Routes>
          <Route path={`/${baseName}`} element= {<Home/>}/>
        </Routes>
    </main>
  )
}

export default App