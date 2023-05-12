import { useState } from "react";
import "./Form.css"


function validate(form,errors,setErrors){
    if(!form.email){
        setErrors({...errors,email:"Email is empty"})
    }else{
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.email)){
            setErrors({...errors,email:""})
        }else{
            setErrors({...errors,email:"Invalid email"})
        }
    }

    if(form.password){
        if((form.password.length<5) || (form.password.length>11)){
            setErrors({...errors,password:"Password has to be between 6 and 10 characters"})
        }else{
            setErrors({...errors,password:""})
        }
    }
}


export default function Form(props) {

    const [form,setForm] = useState({
        email:"",
        password:""
    })

    const [errors,seterrors] = useState({
        email:"",
        password:""
    })


    function handleChange(event){
        const propiedad = event.target.name
        const valor = event.target.value

        setForm({...form, [propiedad]:valor}) //ESTO TARDA, POR LO TANTO UNA SOLUCION ES MANDARLO DIRECTO AL VALIDATE

        validate({...form, [propiedad]:valor},errors,seterrors)
    }

    function handleSubmit(event){
        event.preventDefault()
        props.login(form)
    }

    return (

        <form className="formulario" onSubmit={handleSubmit}>
            <h2 className="tituloLogin">Login</h2>
            <img className="imagenForm" src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-moon-mod-download-35.png" alt="imagen rick y morty" />
            
            <div className="datosLogin">
                <div className="datosLoginInput">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={form.email} onChange={handleChange}/>
                    <span>{errors.email}</span>
                </div>
                <div className="datosLoginInput">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" value={form.password} onChange={handleChange}/>
                    <span>{errors.password}</span>
                </div>
            </div>
            <button className="submit" type="submit">Submit</button>
        </form>
        
        
    );
}