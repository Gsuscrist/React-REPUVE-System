import '../assets/styles/Form.css'
import Mensaje from "./Mensaje.jsx";
import user from '../assets/imgs/user.png'
import back from '../assets/imgs/back.png'
import {useState} from "react";

function FormSignUpUser() {

    const [firstName, setFirstName]=useState('');
    const [lastName, setLastName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [workerCode, setWorkerCode]=useState('');
    const [officeId, setOfficeId]=useState('');

    const submitHandler=(e)=>{
        e.preventDefault();

        const option ={
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // the body it's the most changable
            body: JSON.stringify({
                firstName:firstName,
                lastName: lastName,
                email:email,
                password: password,
                workerCode:workerCode,
                officeId: officeId
            })
        }

        fetch('http://192.168.0.10/user')
            .then(response=>response.json())
            .then(data=> data.status ? alert('fuck u'):alert('no fuck'))
            .catch(err=>console.log('err'))
    }
    const handlerChangeFirstName = (e) => setFirstName(e.target.value)
    const handlerChangeLastName = (e) => setLastName(e.target.value)
    const handlerChangeEmail = (e) => setEmail(e.target.value)
    const handlerChangePassword = (e) => setPassword(e.target.value)
    const handlerChangeWorkerCode = (e) => setWorkerCode(e.target.value)
    const handlerChangeOfficeId = (e) => setOfficeId(e.target.value)



    return (

        <div className="container-registroUsuario">
            <div className="registroUsuario">
                <img src={user} alt="iconLupa" className="iconUser"/>
                <h1 className="titulo">Registro de Usuarios</h1>
            </div>
            <Mensaje/>
            <div className="form-registroUsuario">

                <form className="form-registroUsuario" onSubmit={submitHandler} >
                    <div className="inputs">
                        <span className="input-texto"> Nombre(s) </span>
                        <input type="text" className="input-form" onChange={handlerChangeFirstName}/>
                    </div>
                    <div className="inputs">
                        <span className="input-texto"> Apellido(s) </span>
                        <input type="text" className="input-form" onChange={handlerChangeLastName}/>
                    </div>
                    <div className="inputs">
                        <span className="input-texto"> Correo Electrónico </span>
                        <input type="text" className="input-form" onChange={handlerChangeEmail}/>
                    </div>
                    <div className="inputs">
                        <span className="input-texto"> Contraseña </span>
                        <input type="text" className="input-form" onChange={handlerChangePassword}/>
                    </div>
                    <div className="inputs">
                        <span className="input-texto"> Codigo de Empleado</span>
                        <input type="text" className="input-form" onChange={handlerChangeWorkerCode}/>
                    </div>
                    <div className="inputs">
                        <span className="input-texto"> Fiscalia Asignada </span>
                        <input type="text" className="input-form" onChange={handlerChangeOfficeId}/>
                    </div>
                    <button className="button-registrar">REGISTRAR</button>
                </form>
            </div>
            <div className="button-volver">
                <img src={back} alt="iconVolver" className="iconVolver"/>
                <h2 className="Volver">Volver</h2>
            </div>

        </div>
    );
}

export default FormSignUpUser