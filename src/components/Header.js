import styled from "styled-components";
import usergirl from "../constants/imgs/usergirl.jpg"
import UserContext from "../contexts/UserContext";
import { useContext } from "react";

export default function Header() { 
    
    const {userImg}= useContext(UserContext)

    return (
        <HeaderStyled data-test="header"> 
            <h1>Track it</h1>
            <img src={userImg} alt={"cadê"} />
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
position: fixed;
top:0px;
right:0px;
height:70px;
width:100%;
background-color:#126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
display:flex;
justify-content:space-between;
z-index:1;

h1{
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color:#FFFFFF;
    margin:10px 18px;
}
img{
    width:51px;
    height: 51px;
    object-fit:contain;
    border-radius:98.5px;
    margin-right:10px;
    margin-top:9px;
}

`