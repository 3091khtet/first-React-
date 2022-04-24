import React from 'react'

import {Switch,Route} from "react-router-dom"

import SideBar from "./components/SideBar"
import Contact from './Contact'


function App() {    
  
  

  return (
    <>
<Switch>
  <Route path="/" exact component={SideBar}   ></Route>
  <Route path="/contact" component={Contact}   ></Route>
</Switch>




    </>
  )
}

export default App
