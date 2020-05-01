import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

const Foot = styled.footer `
display: flex;
justify-content: space-evenly;
background: url(/Asset/Img/download.jpg);
background-size: 50%;
color: white;
height: auto;
`
const Logo = styled.img `
width: 30px;
height: 30px;

`
const Div = styled.div `
display: flex;
justify-content: space-evenly;
margin-top: 4em;
`
const P1 = styled.p `
width: 30%;
margin-right: 9em;
`
const Div1 = styled.div `
margin-right: 21em;
margin-top: 1em;
`
const Div2 = styled.div `
margin-top: 3em;
`

class Footer extends React.Component {
    render() {
        return (
            <Foot>
            <Div>
                <img src='/Asset/Img/image.jpg' alt='' width={'25%'} height={'60%'}/><br />
                <P1>Self taught Front-end developer from Owerri in Nigeria. I have experience in HTML, CSS,
                     Javascript, React, Redux</P1>
            </Div>

            <Div1>
                <p><Logo src='/Asset/Logo/twitter.png' alt=''/> Follow <a href='https://twitter.com/Munachiiso?s=09'>@Munachiiso</a>, for 
                web design and development links, opinions and articles</p>
                <p><Logo src='/Asset/Logo/link.png' alt=''/> View my Github account <a href='https://linkedin.com/in/munachiso'>Madu Stanley</a></p>
                <p><Logo src='/Asset/Logo/github.png' alt=''/> View my LinkedIn profile <a href='https://github.com/pro-munachi'>@pro-munachi</a></p>
            </Div1>

            <Div2>
                 <NavLink to='/' className='Nav-link'>Home</NavLink><br /><br /><br />
                <NavLink to='/about' className='Nav-link'>About</NavLink><br /><br /><br />
                <NavLink to='/contact' className='Nav-link'>Contact</NavLink><br /><br /><br />
                <NavLink to='/experience' className='Nav-link'>Experience</NavLink><br />
            </Div2>
            </Foot>
        )
    }
}

export default Footer