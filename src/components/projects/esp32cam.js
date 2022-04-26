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
                    <p style={{fontSize:'14px', textAlign:'justify'}}>
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
                    <p style={{fontSize:'14px',textAlign:'justify'}}>
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
                    <br />
                    <br />
                      Plug the SD card into the Raspberry Pi and boot. If you need to connect to the raspberry pi remotely create an empty file 
                      in the /root directory named ssh and wpa_cupplicant.conf with your network details 
                      (<a href="https://www.raspberrypi.com/documentation/computers/configuration.html#configuring-networking31">example</a>), this will allow the Raspberry pi 
                      to connect to your WiFi automalically and enable to ssh server as well, 
                      but I am using a keyboard and monitor and will edit the wpa_supplicant file at a later time.
                    </p>


                    <div className="bottom-space-sm" />
                    <p style={{fontSize:'14px', textAlign:'justify'}}>
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
                      <br />
                      <br />
                      A number of tutorials claims that the address for the virtual AP must be different from the primary MAC address. 
                      I found there to be no difference in behavior, but you should be able to change the last byte, for example, to give your client and AP different MACs.
                      The device we created above is called ap0. We will refer to this elsewhere, so if you decide to change the name, 
                      make sure to use the new name everywhere else I reference it, or things won’t work correctly.
                    </p>

                    <div className="bottom-space-sm" />
                    <p style={{fontSize:'14px', textAlign:'justify'}}>
                    <h4 style={{fontSize:'16px'}}>Installing dnsmasq, hostasp, mosquitto</h4>
                      <br/>Now we need to download and install dnsmasq for our purposes of a DHCP server for our WiFi AP, hostapd will define our AP's 
                      physical operation based on the driver configuration and use mosquitto for out MQTT broker
                      <br />
                      <br /><i>sudo raspi-config</i>
                      <br />
                      System Options > Wireless LAN > Enter SSID & Password
                      <br />
                      <i>sudo apt-get updade && sudo apt-get full-upgrade -y</i>
                      <br />
                      <i>sudo apt-get install mosquitto mosquitto-clients dnsmasq hostapd -y</i>
                      <br />
                      <br />
                      Wait awhile, and this process should complete. 
                      The install process may automatically start the dnsmasq.service in systemd right after installation and it will probably fail, 
                      since <i>ap0</i> does not exist until we reboot. Disregard this for now. Next, we need to modify 3 files. 
                      First we modify <i>/etc/dnsmasq.conf</i> by adding the following lines at the end of the file:
                      <br />
                      <br /><i>interface=lo,ap0</i>
                      <br /><i>no-dhcp-interface=lo,wlan0</i>
                      <br /><i>bind-interfaces</i>
                      <br /><i>server=8.8.8.8</i>
                      <br /><i>domain-needed</i>
                      <br /><i>bogus-priv</i>
                      <br /><i>dhcp-range=192.168.10.50,192.168.10.150,12h</i>
                      <br />
                      <br />
                      Referenced ap0 above, so use your device name here if you changed it earlier. 
                      I’ve added Google’s DNS server IP here (8.8.8.8) feel free to use one from your router/ISP/or whatever. 
                      I’ve also made the assumption that our DHCP server will give out addresses on the 192.168.10.0/24 subnet, ranging from .50 to .150. 
                      You can substiute your own subnet here, but be sure to remember it for later, as it should match the static IP we assign your AP. 
                      The 12 hour lease time can also be arbitrarily changed to suit your needs.
                      <br />
                      <br />
                      Next, we need to modify the file at <i>/etc/hostapd/hostapd.conf</i>. 
                      I found many different parameters that can go in here, but this is what worked for me. 
                      Feel free to experiment further by poking around online. Lets do this for now:
                      <br />
                      <br /><i>ctrl_interface=/var/run/hostapd</i>
                      <br /><i>ctrl_interface_group=0</i>
                      <br /><i>interface=ap0</i>
                      <br /><i>driver=nl80211</i>
                      <br /><i>ssid=YourApNameHere</i>
                      <br /><i>hw_mode=g</i>
                      <br /><i>channel=11</i>
                      <br /><i>wmm_enabled=0</i>
                      <br /><i>macaddr_acl=0</i>
                      <br /><i>auth_algs=1</i>
                      <br /><i>wpa=2</i>
                      <br /><i>wpa_passphrase=YourPassPhraseHere</i>
                      <br /><i>wpa_key_mgmt=WPA-PSK</i>
                      <br /><i>wpa_pairwise=TKIP CCMP</i>
                      <br /><i>rsn_pairwise=CCMP</i>
                      <br />
                      <br />A couple things to note here: Replace <i>YourApNameHere</i> and <i>YourPassPhraseHere</i> with the SSID and Passphrase you wish to use.
                      Multiple sources claiming that the channel you use here must match the channel that your wlan0 iterface is using for its WiFi connection, 
                      as reported by iw dev. Testing showed, it looks like the RPi’s AP will dynamically change channels to match whatever channel 
                      the wlan0 interface is currently using. Other article authores claim they watched this happen in real time by rebooting the WiFi AP the RPi was using, 
                      forcing it to roam and switch to another AP in my house. In the process, wlan0 switched from channel 11 to channel 6, 
                      and ap0 did the same, without losing connectivity.
                      <br />
                      <br />
                      Finally, we modify <i>/etc/default/hostapd </i> adding the following:
                      <br /><i>DAEMON_CONF="/etc/hostapd/hostapd.conf"</i>
                      <br />
                      <br />
                      This tells the hostpad daemon to use our new conf file. I’m not sure if this matters since we will be launching hostapd manually and pointing to the proper config file, 
                      but it shouldn’t hurt anything.
                    </p>
                    <div className="bottom-space-xsm" />

                    <div className="bottom-space-sm" />
                    <p style={{fontSize:'14px',textAlign:'justify'}}>
                    <h4 style={{fontSize:'16px'}}>Modify Our Interfaces File</h4>
                    <br />
                    Next, define the WiFi network interfaces, both for the managed access (wlan0) and for the access point (ap0). 
                    Using wpa_supplicant to assist with connecting to WPA-encrypted WiFi networks. 
                    If you followed the “headless” bring-up tutorial I mentioned in the previously, you will have already touched both of the 
                    following files and configured wlan0 as required. In that case, we’ll be adding a static IP definition for ap0. 
                    <br />First, we need to modify /etc/wpa_supplicant/wpa_supplicant.conf ...tbc
                    </p>

        </Box>
        <div className="bottom-space" />   
      </>
  )
}

export default ESP32cam