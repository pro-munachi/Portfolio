import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div `
background: url(/Asset/Img/download.jpg);
background-size: 100%;
height: 100vh;
color: white;
display: flex;
justify-content: space-evenly;
`
const H1 = styled.h1 `
text-align: center;
`

class About extends React.Component {
    render() {
        return (
            <Wrapper>
                <div>               
                    <img src='/Asset/Img/image.jpg' alt='' width={'20%'} />
                </div>
                <div>
                <H1>About</H1>
                <p></p>
                </div>
            </Wrapper>
        )
    }
}

export default About