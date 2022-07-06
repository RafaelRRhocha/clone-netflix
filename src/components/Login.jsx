import PropTypes from "prop-types"
import React, { useState } from "react";
import '../css/Main.css';
import logo from '../assets/netflix-icon.svg';
import { saveUser } from "../services/userApi";

function Login({ history }) {
  const [login, setLogin] = useState({
    name: '',
    endEmail: '',
  });
  const { name, endEmail } = login;

  const onInputChange = ({target: { name, value }}) => setLogin((prevState) => ({...prevState, [name]: value}));

  const handlePage = () => {
    saveUser({ name, endEmail });
    history.push('/home');
  };

  return (
    <div className="login-page">
      <div className="flex items-center justify-between">
        <a href="https://www.netflix.com/br/" target="_blank" rel="noreferrer">
          <img src={logo} alt="Netflix Logo" className="ml-[110px]" />
        </a>
        <a href="https://rafaelrrhocha-portfolio.vercel.app" target="_blank" className="text-zinc-200 underline decoration-1 mr-[170px]" rel="noreferrer">About Me</a>
      </div>
      <h1 className="text-zinc-100 text-center text-[50px]">Filmes, séries e muito mais.</h1>
      <h1 className="text-zinc-100 text-center text-[50px]">Sem limites.</h1>
      <p className="text-zinc-100 text-center text-[50px]">Assista onde quiser. Cancele quando quiser.</p>
      <div className="flex flex-col items-center mt-[20px]">
        <form className="flex flex-col gap-3">
          <input type="text" name='name' value={ name } onChange={onInputChange} placeholder="Digite o Seu Usuário" className="bg-zinc-200 w-[450px] h-[50px] p-4 text-zinc-700" />
          <input type="text" name='endEmail' value={ endEmail } onChange={onInputChange} placeholder="Se ainda não tiver um Usuário Coloque o seu Email aqui" className="bg-zinc-200 h-[50px] p-4 text-zinc-700" />
          <button type="submit" onClick={ handlePage } disabled={ name.length < 3 } className="flex justify-center items-center m-auto border border-1 border-neutral-900 w-[75px] h-[40px] text-zinc-200 bg-red-600 hover:bg-red-600 hover:text-zinc-800 hover:cursor-pointer disabled:opacity-50 disabled:hover:bg-red-600 disabled:hover:text-zinc-200">Entrar</button>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  })
}

export default Login;