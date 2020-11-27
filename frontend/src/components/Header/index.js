import React from 'react';
import { Logo, HeaderContainer } from './styles'; 
import Icone from '../../assets/ziggyPNG.png';

function Header (props){
    return (
        <>
            <HeaderContainer>
                <Logo src={Icone} alt='Ziguen - Encurtador de URL' />
                <h1>Ziguen</h1>
                <p>{props.children}</p>
                
            </HeaderContainer>
        </>
    );
}

export default Header;