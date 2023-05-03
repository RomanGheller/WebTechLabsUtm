import React, { useState } from "react"

export const RegistrationPage = (props) => {

    const [name, setName] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [registered, setRegistered] = useState(false);
    
    const register = () => {
  
        fetch('https://localhost:7162/Registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          Name: name,
          Email: login,
          Password: password,
          //Key: null
        })
      })
      .then(res => { 
          if( res.status == 201 )
            setRegistered(true);
        }  
    )
    }

    const cancel = () => {
        props.setReg(false); 
    } 

    return (
      <table align="center" className = "InputTable">
      <tbody>
      <tr>
            <td align="center" colSpan="2"> 
                        <input placeholder="Enter your name" type="text" className="InputStyle" value={name} onChange={(e)=>setName(e.target.value)}/>
          </td>
        </tr>
        <tr>
            <td align="center" colSpan="2"> 

    
                <input input placeholder="Enter your login" type="text" className="InputStyle" value={login} onChange={(e)=>setLogin(e.target.value)}/>

          </td>
        </tr>
        <tr>
            <td align="center"  colSpan="2"> 
    
                <input input placeholder="Enter your password" type="text" className = "InputStyle" value ={password} onChange={(e)=>setPassword(e.target.value)}/>
    
          </td>
        </tr>
       
        <tr>
            {(registered) ?
                <div>Succesfully registered ! </div>
            :
            <td align="center">
               <button onClick={register}  className = "SmallButton" > OK </button>
             </td>  
            }
            <td align="center">
            <button onClick={cancel}  className = "SmallButton" > Cancel </button>
           </td>
        </tr>
      </tbody>
    </table>
    )
  }

