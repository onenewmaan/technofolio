import React from "react";
import styled from "styled-components";
import LogoComponent from "../../subComponents/LogoComponent";

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


const NAT = () => {

return (
    <>
    <LogoComponent />
        <Box
        initial={{height:0}}
        animate={{height:'55vh'}}
        transition={{type: 'spring', duration:2, delay:1 }}
        >
                    <h3>
                        Network Address Translation
                    </h3>

                    <div className="bottom-space-sm" />
                    <h4 style={{fontSize:'18px'}}>
                        Difference between SNAT and DNAT
                    </h4>
                    <div className="bottom-space-sm" />

                    <p style={{fontSize:'14px'}}>
                    <h4 style={{fontSize:'16px'}}>1. Source Network Address Translation (SNAT) :</h4>
                    SNAT, as name suggests, is a technique that translates source IP address generally when connecting from 
                    private IP address to public IP address. It maps source client IP address in a request to a translation 
                    defined on BIG-IP device. It is most common form of NAT that is used when internal host needs to initiate 
                    session to an external host or public host.
                    </p>
                    <div className="bottom-space-sm" />


                    <div className="mobile-shrink-2">
                        <img src="/img/snat.png" alt="" width="600px" height="350px"/>
                    </div>

                    <div className="bottom-space-sm" />


                    <p style={{fontSize:'14px'}}>
                    <h4 style={{fontSize:'16px'}}>
                    DNAT, as name suggests, is a technique that translates destination IP address generally when connecting from public 
                    IP address to private IP address. It is generally used to redirect packets destined for specific IP address or specific 
                    port on IP address, on one host simply to a different address’s, mostly on different host.
                    </h4>
                    </p>
                    <div className="bottom-space-sm" />


                    <div className="mobile-shrink-2">
                        <img src="/img/dnat.png" alt="" width="600px" height="350px"/>
                    </div>

                    <div className="bottom-space-sm" />c
                    <table>
                        <tr>
                            <th>SNAT</th>
                            <th>DNAT</th>
                        </tr>
                        <tr>
                            <td>It is generally used to change private address or port into a public address or port for packets leaving network.	</td>
                            <td>It is generally used to redirect incoming packets with destination of public address or port to private IP address or port inside network.</td>
                        </tr>
                        <tr>
                            <td>It translates source IP address within a connection to BIG-IP system IP address that one defines.	</td>
                            <td>It translates IP addresses of internal servers that are protected by device to public IP addresses.</td>
                        </tr>
                        <tr>
                            <td>It is used to change source address of packet.  	</td>
                            <td>It is used to change destination address of packet.</td>
                        </tr>
                        <tr>
                            <td>It also changes source port in TCP/UDP headers.  	</td>
                            <td>It also changes destination port in TCP/UDP headers.</td>
                        </tr>
                        <tr>
                            <td>It generally allows multiple hosts on inside to get any host on outside. 	</td>
                            <td>It generally allows multiple hosts on outside to get single host on inside.</td>
                        </tr>
                        <tr>
                            <td>It is performed after routing decision is made.  	</td>
                            <td>It is performed before routing decision is made.</td>
                        </tr>
                        <tr>
                            <td>In this, destination IP address is maintained and source IP address is changed.  	</td>
                            <td>In this, source IP address is maintained and destination IP address is changed. </td>
                        </tr>
                        <tr>
                            <td>Client inside LAN and behind Firewall needs to browse Internet.	</td>
                            <td>Website hosted inside data center behind Firewall and needs to be accessible to users over Internet.</td>
                        </tr>
                    </table>

        </Box>
        <div className="bottom-space" />   
      </>
  )
}

export default NAT