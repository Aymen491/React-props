import React from 'react'
export default function component (props){
    function handelClick(e){
        alert (`The user name is ${props.fullName}`) ;
    }
    return (
        <div>
            <nav id="nav" className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">React props Checkpoint</a>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
<br/>
<br/>
{/* inline stule */}
<div style={{backgroundColor: "#161d6f" , width :"30%",textAlign:"center" , display:"block" , marginLeft:"auto" ,marginRight:"auto" , border: "5px solid black" ,borderRadius:"50px" }}> 
{/* inline stule */}
            <span> Full name : {props.fullName} </span> 
            <br/>
            <span> {props.bio} </span> 
            <br/>
            <span> profession : {props.profession} </span>
</div>      
<br/>
  <br/>
  <br/>
        <div className="name-1">
        <img className="img-top" src="imgP.jpg" />
        
        </div>
        <br/>
  <br/>
  <br/>
        <div>
        <button id="btn" onClick={handelClick} type="button" className="btn btn-danger">Alert</button>
        </div>
        <br/>
  <br/>
  <br/>
        </div>
    )
}