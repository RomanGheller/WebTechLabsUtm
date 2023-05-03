import React, { useState } from "react"

export const HomePage = (props) => {

    const [name, setName] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [key, setKey] = useState("");

    const deleteAccount = () => {

        fetch('https://localhost:7162/UserDelete', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', token: props.token}
        })
            .then(res => {
                if (res.status == 204)
                    props.setToken(null);
            }
            )
        }

    return(
        <div>
        <div align="center" className = "Greetings"> Hello, {props.name} ! </div>
        <div align="left" className = "Empty">  </div>
        <table align="left">            
        <tbody> 
        <td rowSpan="2" className = "Menu">  
        <tr>
          <td colSpan="2" align="center"  >< button onClick={ () => props.setToken(null) }   className = "MenuButton" > log out </button></td>
        </tr>
        <tr>
          <td colSpan="2" align="center"  >< button onClick={ deleteAccount }  className = "MenuButton" > Delete account </button></td>
        </tr>
        <tr>
          <td colSpan="2" align = "center"  >< button   className = "MenuButton" > Peronal Info </button></td>
        </tr>
        <tr>
          <td colSpan="2" align = "center"  >< button    className = "MenuButton" > Other Button</button></td>
        </tr>
        </td>  
        </tbody>
      </table>

      </div>
    )
    
  }