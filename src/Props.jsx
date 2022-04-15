import "bootstrap/dist/css/bootstrap.css"
import React,{useState} from "react"

import {HiOutlineMenuAlt1} from "react-icons/hi"
import {AiOutlineClose} from "react-icons/ai"
import {BsCloudArrowUpFill} from "react-icons/bs"
import {BsArrowDownRightCircleFill} from "react-icons/bs"
import"./.css"


import {SiHomeadvisor} from "react-icons/si"
import {FcAbout} from "react-icons/fc"

import {GiSkills } from "react-icons/gi"
import {RiContactsFill} from "react-icons/ri"


const Props=()=>{



const [change,setChange]=useState(0)

const [open, setopen] = useState(false);

const handle=()=>{
  setopen(!open)
}

const clickChange=(index)=>{
  setChange(index)
}



return(
    <>



    <div className={!open?"body":"backDrop"} onClick={open && handle} >




    <nav class="navbar  bg-success">
  <div class="container-fluid">
    <a class="navbar-brand fs-1">my portFoilo</a>
  
<header  onClick={handle}
 className= {open?"d-flex navbar fs-1 text-warning move":"d-flex navbar fs-1 text-warning"}>

    <li onClick={()=>clickChange(1)}    > Home <i className="home"> <SiHomeadvisor/>       </i>  </li>
    <li  onClick={()=>clickChange(2)}  > About <i className="about"><FcAbout/>     </i>  </li>

    <li onClick={()=>clickChange(3)}  > Skill <i className="skill"> < GiSkills  />   </i>  </li>
    <li  onClick={()=>clickChange(4)}    >Contact <i className="contact">  <RiContactsFill/>  </i>  </li>
</header>

<i className="downArrow" onClick={()=>{
  window.scrollY(0,-10)
}}><BsArrowDownRightCircleFill/></i>


<div className="menu" onClick={handle}>

{open?<AiOutlineClose/> :<HiOutlineMenuAlt1/>}

</div>
  </div>
</nav>
    
    
<div class="bodyContent">

                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    <div className={change===1?"active-content":"content"}>                                                                                                        
<h1> Home </h1>                                         
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus eius magnam illum labore officiis? Repellendus officiis ratione eos odit laudantium! Nulla porro culpa consequuntur repudiandae debitis veritatis ut dolorum fugiat.</p>
</div>                                   
                                                                     
                                                                     
<div   className={change===2?"active-content":"content"}>                                                                                                       
    <h1>About</h1> 
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel consectetur cumque corrupti aliquid exercitationem minima nam maxime, vitae nemo est sapiente illo ab nostrum molestias animi eum dicta numquam quas.</p>                                                                                                                                                                                                                                
    </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    
    
    <div   className={change===3?"active-content":"content"}>

<div className="skill">

<li>
<img src="https://www.sololearn.com/Certificate/1014-23251833/jpg/" alt="HTMl"  />
  
  <div className="htmlGp">
  <h3>HTML</h3>
<span className="bar"><span className="html"></span></span>
  </div>
</li>


<li >


 <div className="cssGp">

 <h3>css</h3>
<span className="bar"><span className="css"></span></span>
 </div>
 
</li>



<li>
  
  
<div className="jsGp">
<h3>js</h3>
<span className="bar"><span className="js"></span></span>
</div>

</li>




<li>
<img src="https://www.sololearn.com/Certificate/1162-23251833/jpg/" alt="responsive web design" />
  
<div className="responsiveGp">
<h3>Responsive web Design</h3>
 
 <span className="bar"><span className="responsive web Design"></span></span>
</div>


</li>


<li >

 
<div className="jqueryGp">
<h3>Jquery</h3>
<span className="bar"><span className="jquery"></span></span>
</div>

</li>




<li className="bsGp"><h3>bootstrap</h3>
<span className="bar"><span className="bs"></span></span>
</li>





<li >
 
  <img src="https://www.sololearn.com/Certificate/1097-23251833/jpg/" alt="react" />

 <div className="reactGp"></div>
 <h3>react</h3>
<span className="bar"><span className="react"></span></span>
</li>





</div>

        </div>
        
<div   className={change===4?"active-content":"content"}>
    <h1> Contact</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus eius magnam illum labore officiis? Repellendus officiis ratione eos odit laudantium! Nulla porro culpa consequuntur repudiandae debitis veritatis ut dolorum fugiat.</p>
    </div>
    

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

 </div>











          
<i className="upArrow" onClick={()=>{window.scrollTo(0,0)}}><BsCloudArrowUpFill /></i>
    






    </div>
    </>
)

}


export default Props