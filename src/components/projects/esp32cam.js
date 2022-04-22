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


const ESP32cam = () => {

return (
    <>
    <LogoComponent />
        <Box
        initial={{height:0}}
        animate={{height:'55vh'}}
        transition={{type: 'spring', duration:2, delay:1 }}
        >
            <div className="mobile-shrink-2">
                    <img src="/img/esp32.png" alt="" width="450px" height="350px"/>
            </div>
                    <h3>
                        MQTT Broker| ESP32-cam | Raspberry Pi
                    </h3>

                    <div className="bottom-space-sm" />
                    <h4 style={{fontSize:'18px'}}>
                        Install and configure a MQTT broker on a Raspberry Pi.
                    </h4>
                    <div className="bottom-space-sm" />

                    <p style={{fontSize:'14px'}}>
                    <h4 style={{fontSize:'16px'}}>Flash Rasbian onto a microSD -</h4> download rasbian 
                    from <a href="https://www.raspberrypi.com/software/operating-systems/ ">Raspberry Pi</a> official website for your device 
                    (I recommend version lite if you're familiar with CLI).
                    Insert your SD card into you PC and run <i><b>lsblk</b></i> to list you disks (USB ports should be listed as sdX... 
                    and card reader ports as mmblkX...)
                    <br />
                    Indentify your drive, example: <i>sdb</i> and unmount it: <i>sudo umount /dev/sdb1 && sudo umount /dev/sdb2. </i>
                    Once the Rasbian OS file finishes downloading, extract the iso file from the compressed folder and we are ready to flash: 
                    <br />
                    <br />
                    <i>sudo dd bs=4M if=~/Downloads/2022_path_to_iso of=/dev/sdb conv=fsync status=progress</i>
                    <br />
                    <br />
                    Plug the SD card into the Raspberry Pi and boot. After initial user set up, go: <i>sudo raspi-config</i>
                    <br />
                    System Options - Wireless LAN - Enter SSID & Password
                    <br />
                    <br />
                    <i>sudo apt-get updade && sudo apt-get full-upgrade -y</i>
                    <br />
                    <i>sudo apt-get install mosquitto mosquitto-clients</i>
                    </p>

                    <div className="bottom-space-sm" />


                    <p style={{fontSize:'14px'}}>
                    <h4 style={{fontSize:'16px'}}>Configure WiFi Access Point - </h4> Install AP and Management Software
                    In order to work as an access point, the Raspberry Pi needs to have the hostapd access point software package installed 
                    and enabled the wireless access point service and set it to start when your Raspberry Pi boots:
                    <br />
                    <br />
                    <i>sudo apt install hostapd</i>
                    <br />
                    <i>sudo systemctl unmask hostapd</i>up
                    <br />
                    <i>sudo systemctl enable hostapd</i>
                    <br />
                    <br />
                    In order to provide network management services (DNS, DHCP) to wireless clients, the Raspberry Pi needs to have the dnsmasq software package installed:
                    <br />
                    <br />
                    <i>sudo apt install dnsmasq</i>
                    <br />
                    <br />
                    Finally, install netfilter-persistent and its plugin iptables-persistent. This utility helps by saving firewall rules and restoring them when the Raspberry Pi boots:
                    <br />
                    <br />
                    <i>sudo DEBIAN_FRONTEND=noninteractive apt install -y netfilter-persistent iptables-persistent</i>
                    <br />
                    <br />
                    Software installation is complete.
                    </p>
                    <div className="bottom-space" />   

                    <p>more notes on the mqtt and esp32 configuration coming soon...</p>

        </Box>
        <div className="bottom-space" />   
      </>
  )
}

export default ESP32cam