import React,{useState} from 'react'
import "./Home.css"
import Type from "typewriter-effect"


function Home() {

const [click,setClick]=useState(0)

const top=(index)=>{
  setClick(index)
}
  return (
    <>
      
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


    </>
  )
}

export default Home
