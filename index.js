 import React, { useState } from "react"
 import * as ReactDOMClient from 'react-dom/client'
 import  ReactDOM from "react-dom"
 import {Authorize} from "./authorize.js"
 import {HomePage} from "./homePage.js"
 import {RegistrationPage} from "./registrationPage.js"

//import { Layout, Space } from 'antd';

const Index =()=>{
    const [token, setToken] = useState(null);
    const [name, setName] = useState(null);
    const [reg, setReg] = useState(false);
    const [authorized, setAuthorized] = useState(false);


    return (
      (!reg) ? 
            (!token) ?
                <Authorize setToken={setToken} setName={setName} setReg={setReg} />
                :
                <HomePage name={name} token={token} setToken={setToken} />
      : 
      <RegistrationPage setReg = {setReg}/>
    );
 }

const app = ReactDOMClient.createRoot(document.getElementById("root"));
app.render(<Index />);
 //ReactDOM.render(<Index/>, document.getElementById("root"));
