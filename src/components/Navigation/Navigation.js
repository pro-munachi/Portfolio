import React from 'react'
import { NavLink } from 'react-router-dom'
import {Div} from './Styled'



class Navigation extends React.Component {
    render() {
        return (
            <Div>
                <div className='div1'>
                    <h1>MUNACHISO</h1>
                    <strong>Front-End Developer</strong>
                </div>
                <ul class='menu'>
               <li> <NavLink to='/' className='Nav_link' activeClassName='nav'><img src='/Asset/Icon/Home.png' alt='' /></NavLink><span class="isactive"></span></li>
               <li> <NavLink to='/about' className='Nav_link' activeClassName='nav'><img src='/Asset/Icon/about.png' alt='' /></NavLink><span class="isactive"></span></li> 
               <li> <NavLink to='/contact' className='Nav_link' activeClassName='nav'><img src='/Asset/Icon/contact.png' alt='' /></NavLink><span class="isactive"></span></li>
               <li><NavLink to='/experience' className='Nav_link' activeClassName='nav'><img src='/Asset/Icon/experience.png' alt='' /></NavLink><span class="isactive"></span></li> 
                </ul>
            </Div>
        )
    }
}

export default Navigation