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
                      Configure Simultaneous AP and Managed Mode WiFi on Raspberry Pi Zero W
                    </h4>
                    <div className="bottom-space-sm" />
                    <p style={{fontSize:'14px'}}>
                      Recently purchased a hand full of Raspberry Pi Zero W boards, 
                      and plan to use them for automation / IoT-type work. 
                      One of my requirements is that the WiFi on this board be able to run as both a “managed” device 
                      (also known as “client” mode) and as an access point, preferrably at the same time. 
                      The AP mode is neccessary for remote access to the nodered dashboard running locally on th Pi but having a 
                      connection with an external network would also be handy.
                      Found several people who claimed to have gotten this working, 
                      as well as posts saying it should work, based on the chipset. 
                      By combining some information garnered from the web along with some trial and error, 
                      finally able to get AP/Manged mode working, as described below. LET'S GO!
                    </p>

                    <div className="bottom-space-sm" />
                    <p style={{fontSize:'14px'}}>
                    <h4 style={{fontSize:'16px'}}>Flash Rasbian onto a microSD -</h4> download rasbian 
                    from the official <a href="https://www.raspberrypi.com/software/operating-systems/ ">RaspberryPi</a> website for your device.
                    I am using a Raspberry Pi Zero W.
                    Insert your microSD card into your PC and type <i><b>lsblk</b></i> in your terminal to list your disks (USB ports should be listed as sdX... 
                    and card reader ports as mmblkX...) Indentify your drive, example: <i>sdX</i> and unmount it, type: 
                    <br /><i>sudo umount /dev/sdX1 && sudo umount /dev/sdX2. </i> 
                    <br />
                    <br />- where X is the letter of your drive - double check, don't mistake it with your other drives or prepare to lose your data.
                    Once the Rasbian OS file finishes downloading, extract the iso file from the compressed folder and we are ready to flash: 
                    <br />
                    <i>sudo dd bs=4M if=~/Downloads/2022_path_to_iso of=/dev/sdX conv=fsync status=progress</i>
                    </p>

                    <div className="bottom-space-sm" />
                    <p style={{fontSize:'14px'}}>
                      <h4 style={{fontSize:'16px'}}>Add A Virtual AP Device At Boot by Adding Udev Rule </h4>
                      <br/>Similarly to how systemd allocates a wlan0 device at boot time, we need a device allocated for our AP before we can operate it.
                        On the build of Raspbian Stretch I’m using, only wlan0 is available automatically. 
                        We create a file caled <i>/etc/udev/rules.d/70-persistent-net.rules</i> which contains the following:
                      <br />
                      <br /><i>SUBSYSTEM=="ieee80211", ACTION=="add|change", ATTR{'{macaddress}'}=="b8:27:eb:ff:ff:ff", KERNEL=="phy0", \</i> 
                      <br /><i>RUN+="/sbin/iw phy phy0 interface add ap0 type __ap", \</i> 
                      <br /><i>RUN+="/bin/ip link set ap0 address b8:27:eb:ff:ff:ff"</i>
                      <br />
                      <br />
                      Replace both MAC addresses above withyour own RPi MAC. Find yours for example from your router’s client list, or from the RPi’s command line, type:
                      <br /><i>iw dev</i>


                    </p>

                    <div className="bottom-space-sm" />
                    <p style={{fontSize:'14px'}}>
                      <h4 style={{fontSize:'16px'}}>Add A Virtual AP Device At Boot by Adding Udev Rule </h4>
                      <br/>Similarly to how systemd allocates a wlan0 device at boot time, we need a device allocated for our AP before we can operate it.
                        On the build of Raspbian Stretch I’m using, only wlan0 is available automatically. 
                        We create a file caled <i>/etc/udev/rules.d/70-persistent-net.rules</i> which contains the following:
                      <br />
                      <br /><i>SUBSYSTEM=="ieee80211", ACTION=="add|change", ATTR{'{macaddress}'}=="b8:27:eb:ff:ff:ff", KERNEL=="phy0", \</i> 
                      <br /><i>RUN+="/sbin/iw phy phy0 interface add ap0 type __ap", \</i> 
                      <br /><i>RUN+="/bin/ip link set ap0 address b8:27:eb:ff:ff:ff"</i>
                    </p>

                    <div className="bottom-space-sm" />
                    <p style={{fontSize:'14px'}}>
                      Plug the SD card into the Raspberry Pi and boot. If you need to connect to the raspberry pi remotely create an empty file 
                      in the /root directory named ssh and wpa_cupplicant.conf with your network details 
                      (<a href="https://www.raspberrypi.com/documentation/computers/configuration.html#configuring-networking31">example</a>), this will allow the Raspberry pi 
                      to connect to your WiFi automalically and enable to ssh server as well, 
                      but I am using a keyboard and monitor and will edit the wpa_supplicant file at a later time. Once loged in as pi, type:
                      <br /><i>sudo raspi-config</i>
                      <br />
                      System Options > Wireless LAN > Enter SSID & Password
                      <br />
                      <i>sudo apt-get updade && sudo apt-get full-upgrade -y</i>
                      <br />
                      <i>sudo apt-get install mosquitto mosquitto-clients</i>
                    </p>
                    <div className="bottom-space-sm" />

                    <p style={{fontSize:'14px'}}>
                    Install AP and Management Software
                    In order to work as an access point, the Raspberry Pi needs to have the hostapd access point software package installed 
                    and enabled the wireless access point service and set it to start when your Raspberry Pi boots:
                    <br />
                    <i>sudo apt install hostapd</i>
                    <br />
                    <i>sudo systemctl unmask hostapd</i> up
                    <br />
                    <i>sudo systemctl enable hostapd</i>
                    <br />
                    <br />
                    In order to provide network management services (DNS, DHCP) to wireless clients, the Raspberry Pi needs to have the dnsmasq software package installed:
                    <br />
                    <i>sudo apt install dnsmasq</i>
                    <br />
                    <br />
                    Finally, install netfilter-persistent and its plugin iptables-persistent. This utility helps by saving firewall rules and restoring them when the Raspberry Pi boots:
                    <br />
                    <i>sudo DEBIAN_FRONTEND=noninteractive apt install -y netfilter-persistent iptables-persistent</i>
                    <br />
                    Software installation is complete.
                    </p>
                    <div className="bottom-space-xsm" />

                    <p style={{fontSize:'14px'}}>
                    <br /> In linux the /etc folder contains most of the system softwarew configuration files and settings. The /etc 
                    folder is protected, sudo privilages are needed. type:
                    <br />
                    <i>sudo nano /etc/dhcpcd.conf</i>
                    <br />
                    <br />
                    Navigate to the bottom of the file and add this line:
                    <br />
                    <i>denyinterfaces wlan0</i>
                    <br />
                    <br />
                    Setting up a static IP
                    <br />
                    
                    </p>

        </Box>
        <div className="bottom-space" />   
      </>
  )
}

export default ESP32cam