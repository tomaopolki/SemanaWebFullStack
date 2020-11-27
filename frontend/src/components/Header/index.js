import React from 'react';
import { Logo, HeaderContainer, H1 } from './styles'; 
import Icone from '../../assets/ziggyPNG.png';

function Header (props){
    const style = {
        color: 'inherit', 
        textDecoration: 'inherit',
    }
    return (
        <>
            <HeaderContainer>
                <a href="/"><Logo src={Icone} alt='Ziguen - Encurtador de URL' /></a>
                <H1><a style={style} href="/">Ziguen</a></H1>
                <p>{props.children}</p>
                
            </HeaderContainer>
        </>
    );
}

export default Header;