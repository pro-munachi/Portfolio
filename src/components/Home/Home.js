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
                 
                   </White>
                   </div>

                   <div>
                   <Black2>
                       <p>PROBLEM SOLVING</p>
                   </Black2>
                   <White2>
                   
                   </White2>
                   </div>

                   <div>
                   <Black3>  
                       <p>CRITICAL THINKING</p>
                   </Black3>
                   <White3>
                       
                    </White3> 
                    </div> 
                  
                </Dim2>
               </Dim1>
            </Wrapper>
        )
    }
}

export default Home