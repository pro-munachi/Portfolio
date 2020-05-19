import React from 'react'
import {Foot,} from './Styled'
import {NavLink} from 'react-router-dom'





class Footer extends React.Component {
    render() {
        return (
            <Foot>
            <div className='dive'>
                
            </div>
            <div className='div1'>  
              <div className='hiv'>
                <div> <NavLink to='/' className='Nav-link'>Home</NavLink></div><br />
               <div> <NavLink to='/about' className='Nav-link'>About</NavLink></div><br /> 
               <div> <NavLink to='/contact' className='Nav-link'>Contact</NavLink></div><br />
               <div><NavLink to='/experience' className='Nav-link'>Experience</NavLink></div>    
                </div><br />
                <div className='div'>            
                <p>Contact Me: 08165998708</p>
                 </div>
               
              
            </div>     
            <div className='riv'>
               <a href='https://twitter.com/Munachiiso?s=09' target='_blank' rel='noopener noreferrer'> <img src='/Asset/Icon/twitte.png' alt=''/></a>
                <a href='https://linkedin.com/in/munachiso' target='_blank'  rel='noopener noreferrer'> <img src='/Asset/Icon/lin.png' alt=''/> </a> 
                <a href='https://www.instagram.com/munachiiso/' target='_blank'  rel='noopener noreferrer'> <img src='/Asset/Icon/instagra.png' alt=''/></a>
                <a href='https://m.facebook.com/madu.stanley.71' target='_blank'  rel='noopener noreferrer'> <img src='/Asset/Icon/fac.png' alt=''/></a>
                <a href='https://github.com/pro-munachi' target='_blank'  rel='noopener noreferrer'> <img src='/Asset/Icon/githu.png' alt=''/></a>
            </div>
                
               
        
            </Foot>
        )
    }
}

export default Footer