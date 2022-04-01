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
// const Main = styled.div`
// border: 2px solid ${props => props.theme.text};
// color: ${props => props.theme.text};
// background-color: ${props => props.theme.body};
// padding: 2rem;
// width: 30vw;
// height: 60vh;
// z-index: 3;
// line-height: 1.5;
// cursor: pointer;

// font-family: monospace;
// display: flex;
// flex-direction: column;
// justify-content: space-between;
// &:hover{
//     color: ${props => props.theme.body};
//     background-color: ${props => props.theme.text};
// }
// `
// const Title = styled.h2`
// display: flex;
// justify-content: center;
// align-items: center;
// font-size: 1.9rem;
// color: '#000A2A';
// ${Main}:hover &{
//     &>*{
//         fill:${props => props.theme.body};
//     }
// }
// &>*:first-child{
//     margin-right: 1rem;
// }
// `
// const Description = styled.h3`
// color: '#000A2A';
// font-size: 1.0rem;
// padding: 0.5rem 0;
// ${Main}:hover &{
    
//     color:${props => props.theme.body};

// }
// strong{
//     margin-bottom: 1rem;
//     text-transform: uppercase;
// }
// ul, p{
//     margin-left: 2rem;
// }
// `

const DogeNode = () => {

return (
    <>
    <LogoComponent />
        <Box
        initial={{height:0}}
        animate={{height:'55vh'}}
        transition={{type: 'spring', duration:2, delay:1 }}
        >
            <div className="mobile-shrink-2">
                    <img src="/img/dogenode.png" alt="" width="450px" height="350px"/>
            </div>
                    <h3>
                        Dogecoin Node 
                    </h3>
                    <p>
                    <b>Set a Static IP Address on Raspberry Pi</b> By default in Raspberry Pi OS (Linux-based operating system) the Raspberry Pi’s IP address is configured automatically each time it is booted, 
                    so it may well change. Naturally, this is not ideal when you need a reliable address at which to connect to the Raspberry Pi from another device.
                    This is also useful to avoid confusion when you have multiple Raspberry Pi devices connected to your network.
                    </p>
                    <br />
                    <p>
                    <b>1. DHCP Configuration </b> 
                    Raspberry Pi OS uses DHCP (Dynamic Host Configuration Protocol) to assign an IP address to the Raspberry Pi automatically.
                    To change Raspberry Pi OS's behavior so that it uses the same static IP address each time, 
                    you will need to modify the configuration file for the DHCP client daemon, <i>dhcpcd.conf.</i>
                    <br/>
                    Before that, you will need some information on your current network setup so you can add the required details to the configuration file. You will require the following info:
                    <br />
                    • The type of network connection. This is either wlan0 if your Raspberry Pi is connected to the router wirelessly, or eth0 if it’s connected using an Ethernet cable.
                    <br />
                    • The Raspberry Pi’s currently assigned IP address – it’s safest to reuse this for its static IP so that you can be sure the latter hasn’t already been to another device on the network. If not, make sure another device isn't already using it.
                    To find the Raspberry Pi’s current IP address, enter the following command in a Terminal window:
                    hostname -I
                    <br />
                    • Your router’s gateway IP address – the one used to contact it from the local network, not its public IP. It varies depending on the router model, but typically starts with 192.168.
                    To find it, enter the following command and note the first IP address given:
                    ip r | grep default
                    <br />
                    • Your router’s DNS (Domain Name System) IP address. This is typically the same as its gateway address, but may be set to another value to use an alternative DNS – such as 8.8.8.8 for Google, or 1.1.1.1 for Cloudflare.
                    To find the current DNS IP address, enter the command:
                    sudo nano /etc/resolv.conf
                    <br />
                    Note the IP address after nameserver – that's the DNS address – and then press Ctrl + X to close the file.
                    </p>
                    <br />
                    <p>
                    <b>2. Add Static IP Settings</b>
                    <br />
                    Now you have found all your network connection information, it’s time to edit the dhcpcd.conf configuration file to add the settings you 
                    need to set up a static IP address for your Raspberry Pi:
                    <br />
                    sudo nano /etc/dhcpcd.conf
                    <br />
                    If you haven’t edited the file previously, it will mainly contain various comment lines preceded by a hash (#) symbol. At the bottom, add the following lines, replacing the emboldened names with your own network details:
                    <br />
                    <br />interface NETWORK 
                    <br />static ip_address=STATIC_IP/24
                    <br />static routers=ROUTER_IP 
                    <br />static domain_name_servers=DNS_IPReplace the emboldened names as follows:
                    <br />• NETWORK – your network connection type: eth0 (Ethernet) or wlan0 (wireless).
                    <br />• STATIC_IP – the static IP address you want to set for the Raspberry Pi.
                    <br />• ROUTER_IP – the gateway IP address for your router on the local network.
                    <br />• DNS_IP – the DNS IP address (typically the same as your router’s gateway address).
                    <br />Here is an example configuration to set the static IP to 192.168.1.120 with a wireless connection to a router at 192.168.1.254:
                    <br />interface wlan0
                    <br />static ip_address=192.168.1.120/24
                    <br />static routers=192.168.1.254
                    <br />static domain_name_servers=192.168.1.254
                    <br />
                    <br />
                    Once you have entered the settings, press Ctrl + X and then Y and ENTER to close and save the modified configuration file.
                    <br />
                    <br />

                    <b>3. Reboot the Raspberry Pi</b>
                    <br />
                    With the dhcpcd.conf configuration file modified, restart your Raspberry Pi to effect the changes and set the static IP address for it:
                    sudo rebootRather than using an address assigned automatically by DHCP, the Raspberry Pi will now attempt to connect to the router using the new static IP address that you set in the dhcpcd.conf file.
                    To check that it is working correctly, enter the following command:
                    <br />
                    <br />
                    hostname -I
                    <br />You should now see the static IP address that you set in the dhcpcd.conf configuration file.
                    <br />
                    <br /><b>Configure Firewall</b>
                    <br />
                    To configure a basic firewall
                    <br />
                    1. Install ufw : 
                    <br /><i>sudo apt install ufw</i>
                    <br />
                    2. Limit SSH access: 
                    <br /><i>sudo ufw limit ssh</i>
                    <br />
                    3 .Allow SSH access from the internal network.
                    <br />
                    <i>
                    sudo ufw allow from 192.168.1.0/24 to any port 22
                    </i>
                    <br />
                    4.Allow Dogecoin traffic:
                    <br />
                    <i>sudo ufw allow 22556 comment "Dogecoin mainnet" </i>
                    <br />
                    5.Apply the settings: 
                    <br /><i>sudo ufw enable</i>
                    </p>
                    <div className="bottom-space-sm" />
                    <p>... next</p>     
                    <p>
                    This one liner will download and install the packages we will need for Dogecoin Core:
                    <br /><br /><i>git clone https://github.com/dogecoin/dogecoin.git</i>
                    <br />Begin the install
                    <br /><i>cd dogecoin</i>
                    <br /><i>./autogen.sh</i>
                    <br /><i>./configure --enable-upnp-default</i>
                    <br /><i>make -j2</i>
                    <br /><br />**Note** 'make' took around 2 hours on my last build. Recommended to use 'make -j2'.
                    The -j2 flag tells the pi how many cores of it's processor to use in that instruction. 
                    The pi has 4 cores available but it is not recommended to use them all for a task. 
                    If you encounter errors just stick with 'make'.
                    <br /><br />Then
                    <br /><i>sudo make install</i>
                    <br /><br />add it to autostart
                    <br /><i>sudo nano ~/.config/lxsession/LXDE/autostart</i>
                    <br />
                    <br />And add
                    <br /><i>@dogecoind -datadir=/home/pi/DogecoinData -daemon</i>
                    <br />
                    <br />Save and Exit as before for the last time!
                    <br /><i>sudo reboot</i>
                    <br />Once booted that should be it! To verify it's working use
                    <br /><i>dogecoin-cli -datadir=/home/pi/DogecoinData getinfo</i>
                    </p>
                    <div className="bottom-space-sm" />

        </Box>
        <div className="bottom-space" />
        
                
      </>
  )
}

export default DogeNode