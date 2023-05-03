import React, { useState } from "react"

export const Authorize = (props) => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [invCred, setInvCred] = useState(false);

    
    const registration = () => {
        props.setReg(true);
    }
  
    const authorize = () => {
  
        fetch('https://localhost:7162/Authentication', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                Login: login,
                Password: password,
            })
        })
        .then(res => {
            if (res.status == 401) { 
                setInvCred(true);
                throw("Invalid credentials")
            }
          else
           return res;
         })
      .then(res => res.json())
      .then(json=> {
        props.setToken(json.key); 
        props.setName(json.name);
        return json
      })
      .then(json => { console.log(json.name); return json.key})
      .then(console.log)
      .catch(console.log);
    }
  
    return (
      <table align="center" className = "InputTable">
      <tbody>
        <tr>
          <td align = "center"> 
    
                <input  placeholder="Enter your login" className = "InputStyle" type="text" value = {login} onChange={(e)=>setLogin(e.target.value)}/>
    
          </td>
        </tr>
        <tr>
          <td align = "center" > 
    
              <input placeholder="Enter your password" className = "InputStyle" type="password" value ={password} onChange={(e)=>setPassword(e.target.value)}/>
    
          </td>
        </tr>
         <tr>
               <td colSpan="2" align="center" > {invCred && "Invalid credentials" }  </td>
        </tr>
       
        <tr>
            <td colSpan="2" align="center" ><button onClick={authorize} className = "ButtonStyle"  > Authorize </button></td>
        </tr>
        <tr>
            <td colSpan="2" align="center"  >< button onClick={registration} className = "ButtonStyle" > Create account </button></td>
        </tr>
      </tbody>
    </table>
    )
  }