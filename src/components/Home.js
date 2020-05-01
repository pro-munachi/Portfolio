import React from 'react'
import styled from 'styled-components'

const Div = styled.body `
background: url(Asset/Img/download.jpg);
height: 100vh;
background-size: 100%;
color: white;
text-align: center;
`
const P = styled.strong `

`
const H = styled.h1 `

`
const Wap = styled.div `
padding-top: 12em;
`

class Home extends React.Component {
    render() {
        return (
            <Div>
                <Wap>
                   <P>HELLO, I AM MADU STANLEY MUNACHISO, A</P>
                   <H>FRONT-END DEVELOPER</H>
                </Wap>
            </Div>
        )
    }
}

export default Home