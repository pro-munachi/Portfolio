import React from 'react'
import {Wrapper, H1, Div} from './Styled'



class About extends React.Component {
    render() {
        return (
            <Wrapper>
                <div className='diw'>
                <Div> 
                  {/*  <div>             
                    <img src='/Asset/Img/image.jpg' alt='' width={'20%'} />
                  </div> */}
                    <div className='div'>
                        <H1>ABOUT</H1><br />
                    <H1>MADU STANLEY MUNACHISO</H1>
                    </div><br />
                    <div>
                        <p>Madu Stanley Munachiso is a self taught Front-End Developer who lives in Owerri, Imo State, Nigeria. 
                            He have a Bachelor's degree in Urban and Regional Planning from the Federal University Of Technology
                            Owerri. He thought that he would end up to be a town planner who  design estates in a studio or 
                            who review development plans in his office. Then he felt the spark that he needed to learn something 
                            else.
                        </p>
                        <p>Then he was introduced to web development by his elder brother who is a developer. He just fell in love
                            with programming and he knew that he had found his calling. it brings out the best in him and helps in his
                            day to day activities. while coding, he has some dependencies which are <a>music (any genre), internet, code editor</a> and
                            his hobbies are watching Football (soccer), surfing the internet, reading, singing. 
                        </p>
                    </div>
                </Div>
                </div>
                <div>
            
                </div>
            </Wrapper>
        )
    }
}

export default About