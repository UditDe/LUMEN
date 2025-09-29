import { useRoutes } from 'react-router-dom'
import './App.scss'
import { routerConfig } from './router'

function App() {
  const routes = useRoutes(routerConfig);
  return (
    <div className='app'>
      {routes}
    </div>
  )
}

export default App
