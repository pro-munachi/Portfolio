import React from 'react'
import {Foot, Div1, Hiv, P1, Div, Riv, Icon } from './Styled'
import {NavLink} from 'react-router-dom'





class Footer extends React.Component {
    render() {
        return (
            <Foot>
            <Div1>  
              <Hiv>
                <P1> <NavLink to='/' className='Nav-link'>Home</NavLink></P1><br />
               <P1> <NavLink to='/about' className='Nav-link'>About</NavLink></P1><br /> 
               <P1> <NavLink to='/contact' className='Nav-link'>Contact</NavLink></P1><br />
               <P1><NavLink to='/experience' className='Nav-link'>Experience</NavLink></P1>    
                </Hiv><br />
                <Div>            
                <p>Contact Me: +2348165998708</p>
                 </Div>
               
              
            </Div1>     
            <Riv>
               <a href='https://twitter.com/Munachiiso?s=09'> <Icon src='/Asset/Icon/twitte.png' alt=''/></a>
                <a href='https://linkedin.com/in/munachiso'> <Icon src='/Asset/Icon/lin.png' alt=''/> </a> 
                <a href='https://www.instagram.com/munachiiso/'> <Icon src='/Asset/Icon/instagra.png' alt=''/></a>
                <a href='https://m.facebook.com/madu.stanley.71'> <Icon src='/Asset/Icon/fac.png' alt=''/></a>
                <a href='https://github.com/pro-munachi'> <Icon src='/Asset/Icon/githu.png' alt=''/></a>
            </Riv>
                
               
        
            </Foot>
        )
    }
}

export default Footer