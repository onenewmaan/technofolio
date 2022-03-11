import React from "react";
import styled from 'styled-components';
import LogoComponent from "../subComponents/LogoComponent";


const Box =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 5px;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: fit-content;

  z-index: 3;
  line-height: 1.5;
  font-family: monospace;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  left: 50%;
  transform: translate(-50%, 0);
  top: 5rem;
  font-family: 'Ubuntu Mono', monospace;

`
const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index: 3;
line-height: 1.5;
cursor: pointer;

font-family: monospace;
display: flex;
flex-direction: column;
justify-content: space-between;
&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`
const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: 1.9rem;
color: '#000A2A';
${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}
&>*:first-child{
    margin-right: 1rem;
}
`
const Description = styled.h3`
color: '#000A2A';
font-size: 1.0rem;
padding: 0.5rem 0;
${Main}:hover &{
    
    color:${props => props.theme.body};

}
strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul, p{
    margin-left: 2rem;
}
`

const CirriculuVitae = () => {

  return (
    <>
    <LogoComponent />
        <Box
        initial={{height:0}}
        animate={{height:'55vh'}}
        transition={{type: 'spring', duration:2, delay:1 }}
        >
          
          <p style={{ fontSize: '30px', fontWeight:'700', color:'#000A2A', lineHeight:'25px', textAlign:'end'}}>Cirriculum Vitae</p>
          <div className="bottom-space-sm" />

            <p style={{ fontSize: '15px', lineHeight:'25px', textAlign:'end'}}>
                Electrical engineer & electronics hobbyist made programmer and linux enthusiast
            </p>

            <div>
                <div className='roadmap'>
                    <p style={{ fontSize: '15px', color:'#0027AD', lineHeight:'25px', textAlign:'end'}}>★ Outlaw Automation Inc. - System Integrator</p>
                    <p style={{ fontSize: '13px', color:'#000A2A', lineHeight:'25px', textAlign:'end'}}>Calgary, Canada - 2018 - current</p>
                    <div className="bottom-space-sm" />
                    <div className='row'>
                        <div className='col'>
                            <p style={{fontSize: '13px', lineHeight:'18px', textAlign:'end'}}>
                            Deployment and management of cloud-hosted Linux SCADA servers, MySQL, MongoDB Databases. 
                            Development of interactive HMI, XLM, HTML templates, python, JS modules that extend system functionality. 
                            Secure VPN network deployment accross 300+ mobile endpoints. Password and Certificate Management. SSH Access control. 
                            3D product design and print.
                            Direct product support - 24h on call rotations.  
                            </p>
                            <p style={{ fontSize: '10px', textAlign:'end'}}>TOOLS</p>
                            <p style={{fontSize: '10px', lineHeight:'18px', textAlign:'end'}}>
                                Python, HMI, XML, HTML, css, JS, AWS, Linux(Debian, CentOS), OpenVPN, MODBUS, TCP/IP, GIT, MQQT
                            </p>
                        
                        </div>
                        </div>
                </div>
                
                <div className='roadmap'>
                    <p style={{ fontSize: '15px', color:'#0027AD', lineHeight:'25px', textAlign:'start'}}>Calgary Atelier - Web Developer ★</p>
                    <p style={{ fontSize: '13px', color:'#000A2A', lineHeight:'25px', textAlign:'start'}}>Calgary, Canada: 2016 - 2021</p>
                <div className='row'>
                <div className='col'>
                    <div className="bottom-space-sm" />
                <p style={{fontSize: '13px', lineHeight:'18px', textAlign:'justify'}}>
                Build and deploy online experiences such as galleries, ecommerce websites, reporting dashboards, web3 DAPPS,
                smart contract powered token, games and art. 2D / 3D graphic design. Customer care. part-time / contract work.
                </p>
                <p style={{ fontSize: '10px', textAlign:'start'}}>TOOLS</p>

                            <p style={{fontSize: '10px', lineHeight:'18px', textAlign:'start'}}>
                                React, AWS, git, HMTL, sass, solidity, JS, Wordpress, photoshop.
                            </p>
                        </div>

                        </div>
                </div>
                <div className='roadmap'>
                    <p style={{ fontSize: '15px', color:'#0027AD', lineHeight:'25px', textAlign:'end'}}>★ Code and Pepper - Jr. Test Engineer</p>
                    <p style={{ fontSize: '13px', color:'#000A2A', lineHeight:'25px', textAlign:'end'}}>Warsaw, Poland: 2017 - 2018</p>
                    <div className='row'>
                        <div className='col'>
                            <div className="bottom-space-sm" />
                                    <p style={{fontSize: '13px', lineHeight:'18px', textAlign:'end'}}>
                                    System testing, analysis and quality assurance. Indicance and bug reporting. Execute test plans, provide application instruction for users. 
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='roadmap'>
                    <p style={{ fontSize: '15px', color:'#0027AD', lineHeight:'25px', textAlign:'start'}}>BDLux Lighting - Electrical Designer ★</p>
                    <p style={{ fontSize: '13px', color:'#000A2A', lineHeight:'25px', textAlign:'start'}}>Warsaw, Poland: 2016 - 2017</p>
                <div className='row'>
                <div className='col'>
                    <div className="bottom-space-sm" />
                <p style={{fontSize: '13px', lineHeight:'18px', textAlign:'justify'}}>
                Working in a team of electrical designers and architects to develop lighting plans, schedules and calculations 
                for commercial, industrial and residential applications that comply with electrical code and meet client's requirements.
                Developing CAD drawing, 3D designs and cost estimations. 
                </p>
                <p style={{ fontSize: '10px', textAlign:'start'}}>TOOLS</p>

                            <p style={{fontSize: '10px', lineHeight:'18px', textAlign:'start'}}>
                                AutoCAD, 3DS Max, DiaLUX 
                            </p>
                        </div>

                        </div>
                </div>
                <div className='roadmap'>
                    <p style={{ fontSize: '15px', color:'#0027AD', lineHeight:'25px', textAlign:'end'}}>★ Schneider Electric - Electrical Engineering Intern</p>
                    <p style={{ fontSize: '13px', color:'#000A2A', lineHeight:'25px', textAlign:'end'}}>Warsaw, Poland: 2016</p>
                <div className='row'>
                <div className='col'>
                    <div className="bottom-space-sm" />
                <p style={{fontSize: '13px', lineHeight:'18px', textAlign:'end'}}>
                Produce documentation packages for industrial maintenance and development project which inludes power distribution equipment. 
                Maintain business relationships, acting as a mediary between clients and design engineers.
                </p>
                <p style={{ fontSize: '10px', textAlign:'end'}}>TOOLS</p>

                            <p style={{fontSize: '10px', lineHeight:'18px', textAlign:'end'}}>
                                AutoCAD, MS Excel
                            </p>
                        </div>

                        </div>
                </div>
                <div className='roadmap'>
                    <p style={{ fontSize: '15px', color:'#0027AD', lineHeight:'25px', textAlign:'start'}}>Weiss Johnson - Electrical Apprentice ★</p>
                    <p style={{ fontSize: '13px', color:'#000A2A', lineHeight:'25px', textAlign:'start'}}>Edmonton, Canada: 2015 - 2016</p>
                <div className='row'>
                <div className='col'>
                    <div className="bottom-space-sm" />
                <p style={{fontSize: '13px', lineHeight:'18px', textAlign:'justify'}}>
                Commercial and residential electrical system installations, troubleshooting, repair and maintenance.
                Installation of ethernet networks and endpoints in a commercial and industrial environments.
                </p>
                <p style={{ fontSize: '10px', textAlign:'start'}}>TOOLS</p>

                            <p style={{fontSize: '10px', lineHeight:'18px', textAlign:'start'}}>
                                Electrical Tools, Connection Testers
                            </p>
                        </div>

                        </div>
                </div>
                <div className='roadmap'>
                    <p style={{ fontSize: '18px', color:'#0027AD', lineHeight:'25px', textAlign:'end'}}>★ HelpX Organic Farms- Volunteer</p>
                    <p style={{ fontSize: '13px', color:'#000A2A', lineHeight:'25px', textAlign:'end'}}>Nibro, Sweden: 2014</p>
                <div className='row'>
                <div className='col'>
                    <div className="bottom-space-sm" />
                <p style={{fontSize: '13px', lineHeight:'18px', textAlign:'end'}}>
                CSA (community supported agriculture), culinary herbs, feed production, forestry, gardens, 
                vegetable, self-sufficiency and community projects development.
                </p>
                <p style={{ fontSize: '10px', textAlign:'end'}}>TOOLS</p>

                            <p style={{fontSize: '10px', lineHeight:'18px', textAlign:'end'}}>
                                Hand Tools, Machinery
                            </p>
                        </div>

                        </div>
                </div>
        </Box>
        <div className="bottom-space" />
      </>
  )
}


export default CirriculuVitae