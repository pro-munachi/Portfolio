import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Div = styled.nav `
background: url(/Asset/Img/download.jpg);
background-size: 100%;
color: white;
display: flex;
justify-content: space-between;
`
const Div1 = styled.div `
margin-left: 2em
`
const Ul = styled.ul `
margin: 3em;
`

class Navigation extends React.Component {
    render() {
        return (
            <Div>
                <Div1>
                    <h2>MUNACHISO</h2>
                    <p>Front-End Developer</p>
                </Div1>
                <Ul>
                <NavLink to='/' className='Nav_link'>Home</NavLink>
                <NavLink to='/about' className='Nav_link'>About</NavLink>
                <NavLink to='/contact' className='Nav_link'>Contact</NavLink>
                <NavLink to='/experience' className='Nav_link'>Experience</NavLink>
                </Ul>
            </Div>
        )
    }
}

export default Navigation