import React from "react";
import LogoComponent from "../../subComponents/LogoComponent";

const DogeNode = () => {

return (
    <>
    <LogoComponent />
    <div className="bottom-space" />   
            <div className="post hentry">
              <div className="entry-header">
                
                <div className="mobile-shrink-2">
                    <img src="/img/dogenode.png" alt="" width="350px" height="250px" padding='35px'/> 
            </div>
            <div className="bottom-space" />   
            <h1 className="entry-title">
                  Blockchain Doge Node
                </h1>
                <p className="entry-meta">
                  <strong>Text</strong> Viktor 	&nbsp;
                  <strong>Foto</strong> Aggie 
                </p>
              </div>
            </div>
            <div className="entry-content">
                <p>
                  <em>What is a Full Node?</em>&emsp;
                  Software that fully validates blocks and transactions and more often then not 
                  help the network by accepting transactions blocks from other full nodes then
                  those transactions and blocks, and then relaying them to further full nodes.
                  <br />
                  &emsp;—  How to get it running?
              &emsp;Full nodes have requirements. There might be a lot of issues if you run it on weak hardware.
              Meet the following requirements and you'll have an easy-to-use node.</p>
            <br />
                <p>• Recent versions of Windows, Mac OS,
                Linux.
                <br />• 100 MB/s. 50 gigabytes of free disk space
                <br />• 2 GB (RAM)
                <br />• Internet min. (50 kilobytes)/ second
                <br />• Best if you run the node continuously. 6h min
                </p>
              <br />
            <p>
            &emsp;Initial block download is the process of nodes synchronization with the network by downloading blocks that are new to them. 
            A node will not accept incoming transactions nor request transactions while downloading the initial block.
            <br />
            
            The following instructions describe installing Dogecoin Core using tools available in most mainstream Linux distributions
            </p>
            <p>
              <strong>
                Raspberrypi Static IP
              </strong>
              <br />
                  — Let's start here: Raspberry Pi OS uses DHCP (Dynamic Host Configuration Protocol) to assign an IP address to the Raspberry Pi automatically. 
                  To change Raspberry Pi OS's behavior so that it uses the same static IP address each time, you will need to modify the configuration file for 
                  the DHCP client daemon, dhcpcd.conf. Before that, you will need some information on your current network setup so you can add the required 
                  details to the configuration file. You will require the following info:
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
                    <br />
                  <strong>2. Add Static IP Settings</strong>
                    <br />
                    <br />
                    Now you have found all your network connection information, it’s time to edit the dhcpcd.conf configuration file to add the settings you 
                    need to set up a static IP address for your Raspberry Pi:
                    <br />
                    <br />
                    <i>sudo nano /etc/dhcpcd.conf</i>
                    <br />
                    <br />
                    The file will mainly contain various comment lines preceded by a hash (#) symbol. At the bottom, add the following lines:
                    <br />
                    <br /><i>interface NETWORK 
                    <br />static ip_address=STATIC_IP/24
                    <br />static routers=ROUTER_IP 
                    <br />static domain_name_servers=DNS_IP</i>
                    <br />
                    <br />&emsp;Replace the emboldened names as follows:
                    <br />• NETWORK – your network connection type: eth0 (Ethernet) or wlan0 (wireless).
                    <br />• STATIC_IP – the static IP address you want to set for the Raspberry Pi.
                    <br />• ROUTER_IP – the gateway IP address for your router on the local network.
                    <br />• DNS_IP – the DNS IP address (typically the same as your router’s gateway address).
                    <br /><br />Here is an example configuration to set the static IP to 192.168.1.120 with a wireless connection to a router at 192.168.1.254:
                    <br /><br /><i>interface wlan0
                    <br />static ip_address=192.168.1.120/24
                    <br />static routers=192.168.1.254
                    <br />static domain_name_servers=192.168.1.254</i>
                    <br />
                    <br />
                    Once you have entered the settings, press Ctrl + X and then Y and ENTER to close and save the modified configuration file.
                    <br />
                    <br />

                    <b>3. Reboot the Raspberry Pi</b>
                    <br />
                    <br />
                    With the dhcpcd.conf configuration file modified, restart your Raspberry Pi to set the static IP:<i>sudo reboot</i>
                    <br /> Rather than using an address assigned automatically by DHCP, the Raspberry Pi will now attempt to connect to the router using the new static IP address that you set in the dhcpcd.conf file.
                    To check that it is working correctly, enter the following command:
                    <br />
                    hostname -I
                    <br />You should now see the static IP address that you set in the dhcpcd.conf configuration file.
                    <br />
                    <br /><b>4. Configure Firewall</b>
                    <br />
                    To configure a basic firewall
                    <br />
                    • Install ufw:<i> sudo apt install ufw</i>
                    <br />
                    •Limit SSH access:<i> sudo ufw limit ssh</i>
                    <br />
                    • Allow SSH access from the internal network:<i> sudo ufw allow from 192.168.1.0/24 to any port 22
                    </i>
                    <br />
                    •Allow Dogecoin traffic:<i>sudo ufw allow 22556 comment "Dogecoin mainnet" </i>
                    <br />
                    •Apply the settings:<i>sudo ufw enable</i>
                    </p>
                    <div className="bottom-space-sm" />
                    <p>— Next. This one liner will download and install the packages we will need for Dogecoin Core:
                    <br /><br /><i>git clone https://github.com/dogecoin/dogecoin.git</i>
                    <br /><br />Begin the install
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
                    <br /><strong>Save and Exit as before for the last time!</strong>
                    <br /><i>sudo reboot</i>
                    <br />
                    <br />Once booted that should be it! To verify it's working use
                    <br /><i>dogecoin-cli -datadir=/home/pi/DogecoinData getinfo</i>
                  <br />
                  — Min plan var att drick champagne och äta tårta, men jag var trött efter paddling och klättring så det blev fisksoppa och Nutella istället. Men det var en fin dag med en vacker solnedgång. Vädret hjälpte mig att fira.
                  </p>
                <p>
                  <strong>
                    Possible problems:
                    </strong>
                    <br />
                    • Bandwidth Limits
                    <br />
                    • As a pertisipant, you become an attack target
                    <br />
                    • Legal, check if dogecoin is not restricted in your area
                    </p>
              </div>
              <footer>
		<p>The article was published by onenewmaan and they hold the copyrights.</p>
	</footer>
        <div className="bottom-space" />   
      </>
  )
}

export default DogeNode