import { useEffect, useState } from 'react';
import './Form.css';
let Form = () => {

    let [fullname,setfullname] = useState('');
    let [email,setEmail] = useState('');
    let [password,setPassword] = useState('');
    let [contact,setContact] = useState('');


    useEffect(()=>{
        let fn = localStorage.getItem("fullname")
        let eml = localStorage.getItem("email")
        let pwd = localStorage.getItem("password")
        let cont = localStorage.getItem("contact")

        setfullname(fn)
        setEmail(eml)
        setPassword(pwd)
        setContact(cont)
      
    },[])



    useEffect(()=>{

        localStorage.setItem("fullname",fullname)
        localStorage.setItem("email",email)
        localStorage.setItem("password",password)
        localStorage.setItem("contact",contact)

    },[fullname,email,password,contact])

    return (
        <>

<div className="registration-form">
        <h3>Registration Form</h3>
        <form>
            <div className="mb-3">
                <label htmlFor="fullname" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="fullname" placeholder="Enter your full name" value = {fullname} onChange={(e)=>setfullname(e.target.value)}required/>
            </div>
            
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Create a password" value={password} onChange={(e) =>setPassword(e.target.value)}required/>
            </div>

            <div className="mb-3">
                <label htmlFor="contact" className="form-label">Contact Number</label>
                <input type="tel" className="form-control" id="contact" placeholder="Enter your contact number" value={contact} onChange={(e) =>setContact(e.target.value)} required/>
            </div>

            <div className="d-grid">
                <button type="submit" className="btn btn-primary">Register</button>
            </div>
        </form>
    </div>

        </>
    )
}
export default Form;