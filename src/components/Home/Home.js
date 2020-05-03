import React from 'react'
import {Wrapper, Div, Wap, Div1,P, H,Dim, Dim1,Img, Imgs, Black, Dim2,Black2, Black3,White,White2,White3} from './Styled'


class Home extends React.Component {
    render() {
        return (
            <Wrapper>
            <Div>
                <Wap>
                    <Div1>
                      <P>HI, I AM MADU STANLEY MUNACHISO, A</P>
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
                   <Black> 
                       <p>CREATIVITY</p>                   
                   </Black>
                   <White>
                   <p><Img src='/Asset/Img/75.jpg' alt=''/><br /></p>       
                   <ul>
                       <li>MAKING CONNECTIONS</li>
                       <li>ASKING QUESTIONS</li>
                       <li>MAKING OBSERVATIONS</li>
                       <li>NETWORKING</li>
                       <li>EXPERIMENTING</li>
                   </ul> 
                   </White>
                   </div>

                   <div>
                   <Black2>
                       <p>PROBLEM SOLVING</p>
                   </Black2>
                   <White2>
                   <p className='b'> <Imgs src='/Asset/Img/85.jpg' alt=''/><br/></p>
                        <ul>
                            <li>RESEARCHING SKILLS</li>
                            <li>TEAM WORKING</li>
                            <li>EMOTIONAL INTELLIGENCE</li>
                            <li>RISK MANAGEMENT</li>
                            <li>DECISION MAKING</li>
                        </ul>
                   </White2>
                   </div>

                   <div>
                   <Black3>  
                       <p>CRITICAL THINKING</p>
                   </Black3>
                   <White3>
                   <p><Img src='/Asset/Img/80.jpg' alt=''/><br /></p>         
                        <ul>
                            <li>RECOGNIZING PATTERNS</li>
                            <li>SKEPTICISM</li>
                            <li>JUDGEMENT</li>
                            <li>INTERPRETATION</li>
                            <li>DATA ANALYSIS</li>
                        </ul>
                    </White3> 
                    </div> 
                  
                </Dim2>
               </Dim1>
            </Wrapper>
        )
    }
}

export default Home