import React, { useEffect, useState } from 'react';
import { readUser, saveUser } from '../services/userApi';
import profile from '../assets/profileImage.png';
import PropTypes from 'prop-types';
import { ArrowLeft, ArrowRight } from 'phosphor-react';

function ProfileEdit({history}) {
  const [user, setUser] = useState({});
  const [profileImage, setProfileImage] = useState('');

  useEffect(() => {
    const getUserState = () => {
      const updateUser = readUser();
      setUser(updateUser);
    };
    getUserState();
  }, []);

  const onInputChange = ({ target: { value } }) => setProfileImage(value);

  const setBack = () => history.push('/profile');

  const saveProfile = () => {
    saveUser({ name: user.name, endEmail: user.endEmail, profile: profileImage });
    history.push('/home');
  }

  const userProfileImageStorage = <img src={!user.profile ? profile : user.profile} alt="imagem de perfil" className="w-[100px] h-[100px]" />
  const userProfileImageNoStorage = <img src={profileImage.length <= 3 ? profile : profileImage} alt="imagem de perfil" className="w-[100px] h-[100px]" />
  return(
    <>
      <div className="text-zinc-100 flex justify-center mt-[15%]">
        <div className="flex">
          {!user.profile ? userProfileImageNoStorage : userProfileImageStorage}
          <div className="flex flex-col gap-2 ml-4">
            <p>{`Nome de Usuário: ${user.name}`}</p>
            <p>{`Endereço de Email: ${user.endEmail}`}</p>
            <input type="text" onChange={ onInputChange } placeholder="cole o link da sua imagem de perfil" className="p-1 text-zinc-800" />
          </div>
        </div>
      </div>
      <div className="text-zinc-100 text-center flex items-center justify-center gap-3 m-5">
        <ArrowLeft size={15} className="animate-pulse" />
        <button type="submit" onClick={ setBack }>Voltar</button>
        <button type="submit" onClick={ saveProfile }>Salvar Perfil</button>
        <ArrowRight size={15} className="animate-pulse" />
      </div>
    </>
  );
}

ProfileEdit.propTypes =  {
  history: PropTypes.shape(() => ({
    push: PropTypes.func.isRequired,
  }))
}

export default ProfileEdit;