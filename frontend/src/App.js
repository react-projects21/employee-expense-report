import React from 'react'
import { useSelector } from 'react-redux'
import Auth from './components/Auth'
import Header from './components/Header'

const App = () => {
  const isLoggedIn = useSelector((state)=>state.isLoggedIn)
  console.log(isLoggedIn);
  return <React.Fragment>
    <header>
    <Header/>
    <Auth/>
    </header>
    {/* <main>
      <Routes>
      <Route path='/auth' element={<Auth/>}/> 
      </Routes>
    </main> */}
  </React.Fragment>
    
}

export default App