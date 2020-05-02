import React from 'react'
import styled from 'styled-components'

const Div = styled.body `
background: url(Asset/Img/download.jpg);
height: auto;
background-size: 100%;
color: white;
text-align: center;
height: 100vh;
`
const P = styled.strong `

`
const H = styled.h1 `

`
const Wap = styled.div `
padding-top: 9em;
`
const Div1 = styled.div `

`
const Div2 = styled.div `
margin-left: 0;
display: flex;
justify-content: space-between;

`
const Img = styled.img `
width: 60%;
border-radius: 7em;
`
const Imgs = styled.img `
width: 45%;
border-radius: 7em;
`


class Home extends React.Component {
    render() {
        return (
            <Div>
                <Wap>
                    <Div1>
                      <P>HI, I AM MADU STANLEY MUNACHISO, A</P>
                      <H>FRONT-END DEVELOPER</H>
                   </Div1><br /><br /><br />
                   <Div2>
                       
                      
                       <p><Img src='/Asset/Img/80.jpg' alt=''/><br /><br />PROBLEM SOLVING </p>                 
                       <p> <Imgs src='/Asset/Img/85.jpg' alt=''/><br /><br />COMMUNICATION SKILLS</p>                       
                       <p><Img src='/Asset/Img/80.jpg' alt=''/><br /><br />CRITICAL THINKING</p>                     
                       <p> <Img src='/Asset/Img/75.jpg' alt=''/><br /><br />CREATIVITY</p>
                       
                       
                   </Div2>
                </Wap>
            </Div>
        )
    }
}

export default Home