import React from "react";
import PropTypes from 'prop-types';
import logo from '../assets/netflix-icon-main.png';
import profile from '../assets/profileImage.png';
import '../css/Main.css';
import { MagnifyingGlass } from "phosphor-react";
import { readUser } from "../services/userApi";
import { useState } from "react";
import { Redirect } from "react-router-dom";

function Header({ bgHeader }) {
  const [redirect, setRedirect] = useState(false);

  const tecMain = () => alert('Em Manutenção!');

  const user = readUser();
  const allClass = "fixed z-50 top-0 left-0 right-0 h-[70px] flex justify-between";
  const allClassWithBg = "fixed z-50 top-0 left-0 right-0 h-[70px] flex justify-between changeBg";
  return (
    <header className={!bgHeader ? allClass : allClassWithBg}>
      {redirect && <Redirect to="/profile"/>}
      <img src={logo} alt="imagem de perfil" className="ml-[30px]"/>
      {bgHeader && (
        <div className="flex gap-2 items-center">
          <input type="text" placeholder="Buscar" className="h-6 w-[300px] text-zinc-800 p-1" />
          <MagnifyingGlass size={20} onClick={ tecMain } className="hover:cursor-pointer text-zinc-100"/>
        </div>
      )}
      <div onClick={() => setRedirect(true)} className="flex gap-4 items-center mr-[40px]">
        <img src={!user.profile ? profile : user.profile} alt="imagem de perfil" className="w-[45px] h-[45px] rounded-sm hover:cursor-pointer" />
        {bgHeader && <p className="underline decoration-1 hover:cursor-pointer text-zinc-100">{user.name}</p>}
      </div>
  </header>
  )
}

Header.propTypes = {
  bgHeader: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  name: PropTypes.string.isRequired,
  viewProfile: PropTypes.func.isRequired
}

export default Header;
