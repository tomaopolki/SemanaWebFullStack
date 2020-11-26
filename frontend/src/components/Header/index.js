import React from 'react';
import { Logo, HeaderContainer } from './styles'; 
import Icone from '../../assets/ziggyPNG.png';

function Header (props){
    return (
        <>
            <HeaderContainer>
                <Logo src={Icone} alt='Ziggy - Encurtador de URL' />
                <h1>Ziggy</h1>
                <p>{props.children}</p>
                
            </HeaderContainer>
        </>
    );
}

export default Header;