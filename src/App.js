import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/navigation/navigation'
import SignIn from './routes/sign-in/sign-in'
import Appriciate from './routes/appriciate/appriciate'
import Shop from './routes/shop/shop'



const App = () => {
  
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}> 
        <Route index element={<Appriciate/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='sign-in' element={<SignIn/>}/>
      </Route>
    </Routes>
  )
}

export default App;
