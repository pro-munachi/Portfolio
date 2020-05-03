import React from 'react'
import { NavLink } from 'react-router-dom'
import {Div, H2, Div1, P, Ul, Img, P1} from './Styled'



class Navigation extends React.Component {
    render() {
        return (
            <Div>
                <Div1>
                    <H2>MUNACHISO</H2>
                    <P>Front-End Developer</P>
                </Div1>
                <Ul>
               <P1> <NavLink to='/' className='Nav_link' activeClassName='nav'><Img src='/Asset/Icon/Home.png' alt='' /></NavLink></P1>
               <P1> <NavLink to='/about' className='Nav_link' activeClassName='nav'><Img src='/Asset/Icon/about.png' alt='' /></NavLink></P1> 
               <P1> <NavLink to='/contact' className='Nav_link' activeClassName='nav'><Img src='/Asset/Icon/contact.png' alt='' /></NavLink></P1>
               <P1><NavLink to='/experience' className='Nav_link' activeClassName='nav'><Img src='/Asset/Icon/experience.png' alt='' /></NavLink></P1> 
                </Ul>
            </Div>
        )
    }
}

export default Navigation