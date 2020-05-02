import React from 'react'
import styled from 'styled-components'


const Foot = styled.footer `
background: #696969;
color: white;
height: auto;

`
const Icon = styled.img `

`
const Div = styled.div `
background: white;
color: black;
font-size: 30px;
text-align: center;
margin-bottom: 3em;
height: 20vh;
`



class Footer extends React.Component {
    render() {
        return (
            <Foot>
                <Div>
               <h1>LET US CREATE MAGIC</h1>
               </Div>
               <div>
               <h1>CONTACT ME</h1>     
            <div>
               <a href='https://twitter.com/Munachiiso?s=09'> <Icon src='/Asset/Icon/twitter.png' alt=''/></a>
                <a href='https://linkedin.com/in/munachiso'> <Icon src='/Asset/Icon/link.png' alt=''/> </a> 
                <a href='https://www.instagram.com/munachiiso/'> <Icon src='/Asset/Icon/instagram.png' alt=''/></a>
                <a href='https://m.facebook.com/madu.stanley.71'> <Icon src='/Asset/Icon/face.png' alt=''/></a>
            </div>
            </div>
            <div>
                <h1>VISIT MY GITHUB</h1>
                <a href='https://github.com/pro-munachi'> <Icon src='/Asset/Icon/github.png' alt=''/></a>
            </div>
            </Foot>
        )
    }
}

export default Footer