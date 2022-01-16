import React, { useState, Fragment } from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';
import { selectProduct } from '../features/product/productSlice';
import { useSelector } from 'react-redux';

{/*import { Link } from "react-router-dom"*/}

function Header() {
    const [menuOpenStatus, setMenuOpenStatus] = useState(false)
    const products = useSelector(selectProduct)

    return (
        <Container>
            <a href="/home">
                <img src="./images/logo.svg" alt="" />
            </a>
            {/*<div>
                <Link to="/home"><img src="./images/logo.svg" alt=""/></Link>
            </div>*/}
            <Menu>
                {/*<h3><Link to="/models">Model S</Link></h3>*/}
                { products && products.map((product, index) => (
                    <a href="#" className="grow">{product}</a>
                ))}
            </Menu>
            <RightMenu>
                <a href="/home">Shop</a>
                <a href="/home">Account</a>
                <div onClick={() => setMenuOpenStatus(true)}>Menu</div>
            </RightMenu>
            <MenuNav show={menuOpenStatus}>
                <CloseWrapper>
                    <MenuNavCloseBtn onClick={() => setMenuOpenStatus(false)}><span><CloseIcon fontSize="medium"></CloseIcon></span></MenuNavCloseBtn>
                </CloseWrapper>
                <li><a href="/home">Existing Inventory</a></li>
                <li><a href="/home">Used Inventory</a></li>
                <li><a href="/home">Trade-In</a></li>
                <li><a href="/home">Test Drive</a></li>
                <li><a href="/home">Cybertruck</a></li>
                <li><a href="/home">Roadster</a></li>
                <li><a href="/home">Semi</a></li>
                <li><a href="/home">Charging</a></li>
                <li><a href="/home">Powerwall</a></li>
                <li><a href="/home">Commercial Energy</a></li>
                <li><a href="/home">Utilites</a></li>
                <li><a href="/home">Find Us</a></li>
                <li><a href="/home">Support</a></li>
            </MenuNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 54px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Menu = styled.div`
    min-height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin-left: 60px;

    a {
        font-size: 14px;
        font-weight: bold;
        padding: 0 13px;
        flex-wrap: no-wrap;
        cursor: pointer;

        &.grow {
            transition: all .2s ease-in-out;
        }
        &:hover {
            border-radius: 18px;
            background-color: rgba(25, 45, 35, .3);
            cursor: pointer;
        }
    }

    @media(max-width: 944px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-size: 14px;
        font-weight: bold;
        margin-right: 10px;
        padding: 0 5px;

        &:hover {
            border-radius: 18px;
            background-color: rgba(25, 45, 35, .3);
            cursor: pointer;
        }
    }
    div {
        font-size: 14px;
        font-weight: bold;
        margin-right: 10px;
        padding: 0 5px; 
        &:hover {
            border-radius: 18px;
            background-color: rgba(25, 45, 35, .2);
            cursor: pointer;
        }
    }
`

const MenuNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    z-index: 10;
    width: 300px;
    list-style: none;
    padding: 15px;
    display: flex:
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: transform 0.2s;

    li {
        font-size: 0.9em;
        padding: 13px 20px;
    }

    li:hover {
        border-radius: 18px;
        background-color: rgba(235, 235, 235, .7);
        cursor: pointer;
    }

`

const MenuNavCloseBtn = styled.div`
    display: flex;
    align-items: right;
    justify-content: right;
    padding-right: 15px;
    padding-top: 10px;
    margin-bottom: 24px;
    cursor: pointer;

    span:hover {
        border-radius: 25px;
        background-color: rgba(235, 235, 235, .7);
    }
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`