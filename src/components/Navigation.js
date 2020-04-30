import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Div = styled.div `
display: flex;
justify-content: space-between;
`

class Navigation extends React.Component {
    render() {
        return (
            <Div>
                <div>
                    <h2>MUNACHISO</h2>
                    <p>Front-End Developer</p>
                </div>
                <div>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/experience'>Experience</NavLink>
                </div>
            </Div>
        )
    }
}

export default Navigation