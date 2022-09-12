import React from 'react';
import {NavLink} from 'react-router-dom'
import styled from 'styled-components';
import {FaHome, FaShoppingCart, FaSearch } from 'react-icons/fa';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';


const Menu = () =>{
    return(
        <StyledMenu>
            <ul id="menu-wrapper">
                <li className='faIcon'><NavLink className="navLink" to="/"><FaHome /></NavLink></li>
                <li className="searchBarContainer"><input type="text" id="searchBar"/><FaSearch id="searchButton"/></li>
                <li><NavLink className="navLink" to ="/orders">Orders</NavLink></li>
                <li><LoginButton className="navLink"/><LogoutButton/></li>
                <li className='faIcon'><NavLink className="navLink" to="/cart"><FaShoppingCart/></NavLink></li>
                
            </ul>
        </StyledMenu>
    )

}

export default Menu;

const StyledMenu = styled.section`
    height:100%;
    
   /* #menu-wrapper{
        width:100%;
        margin-block-end: 0;
        margin-block-start: 0;
        display:flex;
        list-style-type: none;
        flex-direction:row;
        padding:0;
        align-items:center;
        height:100%;
        
        @media screen and (max-width:500px){
            flex-direction: column;
        }

    }

    #menu-wrapper > li{
        font-size: 1.2rem;
        font-weight: 600;
        color:black;
        width:10%;
        height:100%;
        float:left;
        

        @media screen and (max-width: 800px){
            font-size: 1rem;
            padding-left:20px;
        }
    }
    #menu-wrapper > .searchBarContainer{
        margin:1vh;
        width:80%;
        display:flex;
        align-items:center;
        height:50px;
        border-radius:5px;
        overflow:hidden;
        :focus-within{
            margin:1vh;
            width:80%;
            display:flex;
            align-items:center;
            outline:4px solid #b38a10;
            transition: 0.2s;
        }
    }
    #searchBar{
        align-items:center;
        font-size:1.2rem;
        width:100%;
        border:none;
        height:100%;
        :focus{
            outline:none;
        }
    }
    #searchButton{
        background-color:white;
        font-size:1.2rem;
        height:100%;
        padding:0.5rem;
        :hover{
            cursor: pointer;
        }
        border-left:1px solid #c9c9c9;
    }

    #menu-wrapper > .faIcon{
        font-size:2rem;
    }
    
    .navLink{
        color:white;
        width:100%auto;
        height:100%;
        display:flex;
        align-items:center;
        text-decoration:none;
        justify-content:center;
    
        @media screen and (max-width: 800px){
            font-size: 4rem;
        }
    }

    .navLink:hover{
        cursor:pointer;
        background-color:#181e30;
        transition:0.5s;
    }*/
    `