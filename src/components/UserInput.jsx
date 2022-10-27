import React, { useState } from 'react';
import { changeUser } from '../store/slices/user.slices';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from './Loader';
import Oak from '../../gh-pages/Oak.png'
// Actions:
// 1. Crear la accion en el slice
// 2. Exportar la accion
// 3. Importarla en el componente donde la utilizaremos
// 4. Importar y ejecutar useDispatch
// 5. despachamos la acción

const UserInput = ({isLoading}) => {
    const [userName, setUserName] = useState("");


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        dispatch(changeUser(userName));
        navigate("/pokemons");
    };



    return (

        <div className="input-user">
           {isLoading ? <Loader/> : (
                <> 
                    <form className='form-user' onSubmit={submit}>
                        <h1 className='title-user' id="h1" >Hello Trainer</h1>
                        <img className='imgUser img-characters' src={Oak} alt="" />
                        <br />
                        <input className='input-userName'
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder="Introducing your name"
                        />
                        <button className='btn-user'><i className="fa-solid fa-paper-plane"></i></button>
                    </form>
                    <div>
                     
                    </div>

               </>


            )} 
                <footer className='footer' ></footer>
        </div>
    );
};

export default UserInput;