import React from 'react';
import PropTypes from "prop-types";


const styleObject={fontSize:25,paddingTop :"5px",color:"aliceblue",fontfamily:"'Courier New', Courier, monospace"}


const Profile = ({fullName,bio,profession,children}) =>{  
const handleName = (e) =>{
  e.preventDefault();
    alert(`Hi ! My name is ${fullName}`)
  }
     return (
       <div>
         <h1  style={styleObject}> {fullName}</h1>
         <h1 style={styleObject}>{bio}</h1>
         <h1 style={styleObject}>{profession}</h1>
         <img src="myimage.jpg" style={{ width: "300px",padding: "5px", borderRadius: "20px"
 }}/>{children} <br/>
         <button onClick={handleName} style={{background:"#0000ff", padding: "10px 25px",borderRadius: "10px"}}> Click me </button>
       </div>
      
     )
    }
    export default Profile;

    Profile.defaultProps = {

      fullName:" Name ",
      bio:"Bio  ",
      profession:" Profession",
   
    
  }

  Profile.prototype={
      fullName:PropTypes.string,
      bio:PropTypes.string,
      profession:PropTypes.string,
   
  };