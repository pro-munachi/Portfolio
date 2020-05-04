import styled from 'styled-components'

export const Div = styled.nav `
background: url(/Asset/Img/whit.jpg);
background-size: 100%;
color: #20b2aa;
display: flex;
justify-content: space-between;
height: 20vh;
`
export const Div1 = styled.div `
margin-left: 6em;
margin-top: 0.3em;

`
export const Ul = styled.ul `
margin-bottom: 0em;
display: flex;
list-style-type: none;
align-items: center;
.nav~span {
    width: 75px;
    position: absolute;
    border-bottom: 0.1em solid #20b2aa;
    z-index: 0;
}
`
export const H2 = styled.h1 `
color: #20b2aa;
font-size: 30px;
`
export const P1 = styled.li `
margin-bottom: 2em;
.Nav_link {
  padding: 25px;
  text-decoration: none;
  display: flex;
}
`
export const Img = styled.img `
width: 20%;
`
export const P = styled.strong `
font-size: 16px;
margin-left: .6em;
`