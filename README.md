# vwl

```

 /$$    /$$ /$$      /$$ /$$             /$$$$$$$                                                      /$$    
| $$   | $$| $$  /$ | $$| $$            | $$__  $$                                                    | $$    
| $$   | $$| $$ /$$$| $$| $$            | $$  \ $$  /$$$$$$   /$$$$$$        /$$  /$$$$$$   /$$$$$$$ /$$$$$$  
|  $$ / $$/| $$/$$ $$ $$| $$            | $$$$$$$/ /$$__  $$ /$$__  $$      |__/ /$$__  $$ /$$_____/|_  $$_/  
 \  $$ $$/ | $$$$_  $$$$| $$            | $$____/ | $$  \__/| $$  \ $$       /$$| $$$$$$$$| $$        | $$    
  \  $$$/  | $$$/ \  $$$| $$            | $$      | $$      | $$  | $$      | $$| $$_____/| $$        | $$ /$$
   \  $/   | $$/   \  $$| $$$$$$$$      | $$      | $$      |  $$$$$$/      | $$|  $$$$$$$|  $$$$$$$  |  $$$$/
    \_/    |__/     \__/|________/      |__/      |__/       \______/       | $$ \_______/ \_______/   \___/  
                                                                       /$$  | $$                              
                                                                      |  $$$$$$/                              
                                                                       \______/                               
```


For all discussions, designs, and clarifications, we recommend you join our Gitter Chat room: [https://](https://)



Version: 0.0.1 - Released September 01, 2015

*****
Imagien compile [Arduino](http://www.arduino.cc/) sketches without IDE and not programming on C++, only choose the shield you have!! and drag if any you need.  
ProjectLab can to do convert an [Arduino](http://www.arduino.cc/) UNO and MEGA in a WEB-LAB, We prentend to you can obtain many variables and analized on real time and shared on the web. 


*****

VWL, you say?
================


*  


How To Use
==========



**Special Notes**


Good luck.


To Install
----------

For most "standard" use cases (node v0.10.x on mac, linux, windows on a x86 or x64 processor), node-serialport will install nice and easy with a simple

```
npm install 
```

### Installation Special Cases


#### Windows:

 * Windows 7 or Windows 8.1 are supported.
 * Install [node.js 0.10.x](http://nodejs.org/) matching the bitness (32 or 64) of your operating system.
 * Install [Python 2.7.6](http://www.python.org/download/releases/2.7.6/) matching the bitness of your operating system.  For any questions, please refer to their [FAQ](http://docs.python.org/2/faq/windows.html). Default settings are perfect.

#### Mac OS X:

Ensure that you have at a minimum the xCode Command Line Tools installed appropriate for your system configuration. If you recently upgraded the OS, it probably removed your installation of Command Line Tools, please verify before submitting a ticket.

#### Desktop (Debian/Ubuntu) Linux:

You know what you need for you system, basically your appropriate analog of build-essential. Keep rocking! Ubuntu renamed the `node` binary `nodejs` which can cause problems building `node-serialport`. The fix is simple, install the [nodejs-legacy package](https://packages.debian.org/sid/nodejs-legacy) that symlinks `/usr/bin/nodejs => /usr/bin/node` or install the more up to date nodejs package from [Chris Lea's PPA](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager#ubuntu-mint-elementary-os).


```
# Ubuntu node
sudo apt-get install nodejs nodejs-legacy

# Or Chris Lea's PPA Node (more up to date)
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs
```

#### Raspberry Pi Linux:

 * Starting with a a vanilla New Out of the Box Software (NOOBS) Raspbian image (currently tested: 5/25/2013)
 * Log into your Raspberry Pi through whatever means works best and ensure you are on a terminal prompt for the remaining steps. This could be local or through an SSH (or a serial connection if you like).
 * Issue the following commands to ensure you are up to date:

```bash
   sudo apt-get update
   sudo apt-get upgrade -y
```

 * Download and install node.js:

```bash
   wget http://nodejs.org/dist/v0.10.16/node-v0.10.16-linux-arm-pi.tar.gz
   tar xvfz node-v0.10.16-linux-arm-pi.tar.gz
   sudo mv node-v0.10.16-linux-arm-pi /opt/node/
```

 * Set up your paths correctly:

```bash
   echo 'export PATH="$PATH:/opt/node/bin"' >> ~/.bashrc
   source ~/.bashrc
```

 * Install using npm, note this will take a while as it is actually compiling code and that ARM processor is getting a workout.

```bash
   npm install 
```

To Use
------

Opening a serial port:


open event
----------



List Ports
----------



Parsers
-------



Reference Guide
---------------

## Methods

### 



Open issues on GitHub
---------------------
If you have [Issues](https://github.com/mauricioduqueorozco/projectLab/issues).


# Credit

A special thanks to [CEDIA](http://cedia.org.ec) for helping create and hosting the precompiled binaries for OSX, Linux, & Windows. This makes installing ProjectLab much easier and much simpler for individuals using those platforms. Thank you.


