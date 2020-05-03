import React from 'react'
import {Wrapper, Div, Wap, Div1,P, H,Dim, Dim1,Img, Imgs, Black1, Dim2,Black2, Black3,White,White2,White3} from './Styled'
import {NavLink} from 'react-router-dom'

class Home extends React.Component {
    render() {
        return (
            <Wrapper>
            <Div>
                <Wap>
                    <Div1>
                      <P>HI, I AM <a>MADU STANLEY MUNACHISO</a>, A</P>
                      <H>FRONT-END DEVELOPER</H>
                   </Div1><br /><br /><br />
               { /* <Div2>                     
                            
                                          
                       <p><Img src='/Asset/Img/80.jpg' alt=''/><br /><br />CRITICAL THINKING</p>                     
                         <p> <Img src='/Asset/Img/75.jpg' alt=''/><br /><br />CREATIVITY</p>         
                     </Div2> */}
                </Wap>
            </Div>

               <Dim1>
                 <Dim2>
                     <div>
                         <White>Contact</White>
                   <Black1> 
                       <Imgs src='/Asset/Icon/h.png'/>
                       <p> Madu Stanley Munachiso prides himself in creating quality website for his clients,
                           If you want to contact Munachi for  website development, click on the button
                           below</p> <br />
                           <NavLink to='/contact' className='Nav-link'><button className='but'>Contact</button></NavLink>                 
                   </Black1>
                   
                   </div>

                   <div>
                       <White2>Personality</White2>
                   <Black2>
                       <Imgs src='/Asset/Icon/strength.png'/>
                       <p>Personality is what makes people who they are. My Personality
                           includes Critical Thinking, Creativity, Problem Solving. to know
                           about me and the services i provide, click on the button below.
                       </p><br />
                       <NavLink to='/about' className='Nav-link'><button className='but'>About</button></NavLink>
                   </Black2>
                   
                   </div>

                   <div>
                       <White3>Portfolio</White3>
                   <Black3>  
                       <Img src='/Asset/Icon/advert.png'/>
                       <p> Passion is a powerful force to accomplish anything you set your mind to and the 
                           Passion to own a website brought you here. click on the button below
                           to see the websites that i have created. 
                       </p><br />
                      <NavLink to='/experience' className='Nav-link'> <button className='but'>Experience</button></NavLink>
                   </Black3>
                   
                    </div> 
                  
                </Dim2>
               </Dim1>
            </Wrapper>
        )
    }
}

export default Home