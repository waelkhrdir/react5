import React from 'react'
import PropTypes from "prop-types";

export default function Profile({FullName,Bio,Profession,children,handleName}) {
    return (
        <div style={{borderStyle:"solid",borderColor:"blue",borderRadius:"17px",width:"60%",height:"600px",margin:"auto",backgroundColor:"#F1F2E2 ",marginTop:"80px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h1 style={{color:"#5D9FA4"}} >Name:  {FullName}</h1>
            <h4 style={{color:"#4E787B "}}>{Bio}. </h4>
            <h2 style={{color:"#295559  "}}>Profession:  {Profession}</h2>
            {children}  
            <button style={{marginTop:"30px",backgroundColor:"#C1F4F0",fontSize:"large",fontWeight:"bold"}} onClick={handleName}>verify the user name</button>
        </div>
    );
}

Profile.defaultProps = {
   FullName: "nobody",
   Bio:"I am an anonymous",
   Profession:"None",
   handleName: function handleName() {
    alert("The profile user name is : nobody " )
  }

   };

   Profile.propTypes = {
    FullName: PropTypes.string,
    Bio:PropTypes.string,
    handleName: PropTypes.func,
    Profession: PropTypes.string,
   };