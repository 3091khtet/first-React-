import React,{useState} from 'react'
import "../SideBar.css"
import 'remixicon/fonts/remixicon.css'
import "bootstrap/dist/css/bootstrap.css"

import {Link} from "react-router-dom"

import "./Home.css"
import Type from "typewriter-effect"

import "./About.css"
import "./Contact.css"
import "./Skill.css"
import "./Services.css"







function SideBar() {

const [click,setClick]=useState(0)

const [side,setSide]=useState(false)


  const [change, setChange] = useState(false);

const dark=()=>{
  setChange(!change)
}

const top=(index)=>{
  setClick(index)
}

const newSideBar=()=>{
  setSide(!side)
}


return(

<>
  <div className={change?"night":"white"}>

<div className="burger" onClick={newSideBar}>
  <div className={side?"one oneActive":"one"}></div>
  <div className={side?"two twoActive":"two"}     ></div>
  <div className={side?"three threeActive":"three"}   ></div>
</div>

  <div className={side?"sideBar sideBarMove":"sideBar"} onClick={side&&newSideBar} >

<div className='sideBarTab'>
<li onClick={()=>top(1)} >Home</li>
<li onClick={()=>top(2)}>About</li>
<li onClick={()=>top(3)}>Skill</li>
<li onClick={()=>top(4)}>service</li>
<li >
<Link to="/contact">contact</Link>

</li>
</div>


<div className="darkContent d-flex" >
<i className={change?"ri-sun-foggy-line sun":"ri-sun-foggy-line"} onClick={change&&dark}></i>
<div className="darkMode" onClick={dark}>
<button className={change?" moveBtn":"btn"} onClick={dark}></button>
</div>
  <i className={change?"ri-moon-clear-fill moon":"ri-moon-clear-fill"} onClick={!change&&dark}></i>

</div>
</div>





<div className={click===1?" homeDown":"homeCon"}>

   <div className="homeContent">
   <h1>Hello I am</h1>

<h1>
<Type
options={{
    strings:["Dennis Daniel","frontEnd Developer","Mern Stack developer","React Developer"],

autoStart:true,
loop:true,
delay:100,
deleteSpeed:100,
}}
/>
</h1>

<h2 className="passion">passionate on IT,CS</h2>


<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta dignissimos quos labore iste, natus fugit aperiam aut obcaecati, accusantium, autem quo perferendis at dolor reprehenderit excepturi nesciunt nostrum sapiente esse!</p>


<h2 className="cv">DownLoad CV</h2>



   </div>


<div className="myImgCon">
    <img className="myImg"    src="https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"  />
</div>




</div>



<div className={click===2?" aboutDown":"aboutCon"}>
<h1>about me</h1>
</div>











<div className={click===3? "skillDown":"skillCon"}>
  <h1>skill</h1>
</div>












<div className={click===4?"serviceLeft":"serviceCon" }>
  <h1>services</h1>
</div>











<div className={click===5?"contactRight":"contactCon" }>
  <h1>contact</h1>
</div>



</div>
</>
)



}

export default SideBar
