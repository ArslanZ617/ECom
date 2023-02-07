import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../Images/logo.png'
import { lists, unread } from './Data'

export default function Navbar() {

    
    let [active, setActive] = useState('navList');
    let [icon, setIcon] = useState('icon');
    let [msg, setMsg] = useState('msgs');

    const activeCls = () => {
        active === 'navList' ? setActive('navList activeNav') : setActive('navList');
        icon === 'icon' ? setIcon('icon iconTurn') : setIcon('icon');

    }


    return (
        <>
            <div class="Navbar">
                <div class="container">

                    <div className="logo">
                        <a href="#">
                            <img src={logo} alt="" />
                        </a>
                    </div>

                    <div className="links d-flex">
                        <ul className={active}>
                            {
                                lists.map(e =>
                                    <li>
                                        <NavLink className={e.class} to={e.url} onClick={() => { window.scrollTo(0, 0) }} activeClassName='active'>
                                            {e.title}
                                        </NavLink>
                                    </li>
                                )
                            }
                        </ul>

{/*                       <a href="/cart" className={'cart ' + (empty === 0 ? 'mdi mdi-shopping-outline' : 'mdi mdi-shopping')} >
                            <div className={empty > 0 ? 'msgs show' : 'msgs'}>
                                <div>{empty}</div>
                            </div>
                        </a>
*/}

                        <i className={'mdi mdi-backburger ms-2 ' + icon} onClick={activeCls} />
                        {/* <input type="text" value={empty} />
                        <button className='btn btn-success btn-sm rounded-0 px-1' onClick={()=>setEmpty(empty+1)}>+</button>
                        <button className='btn btn-danger btn-sm rounded-0 px-1 mx-1' onClick={()=>setEmpty(empty-1)}>-</button> */}
                    </div>

                </div>
            </div>

        </>
    )
}
