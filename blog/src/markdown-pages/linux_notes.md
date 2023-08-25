---
title: "Misc Unsorted Linux Notes"
slug: "/linux_notes"
---


# Linux Notes

Misc unsorted linux notes; use ctrl-f to find what you might be looking for 

#### Update Sytem

```
sudo apt-get update && sudo apt-get upgrade
```

#### Permissions 

```
4: Write 
2: Read
1: Execute 
```

#### Rollback git commit by one 

```
git reset --soft HEAD~1
```
### Sign a Commit
```
git commit -S -m "Commit Message"
```

### Set user email to match gpg key
```
git config --global user.email "MY_NAME@example.com"
```

#### Install firmware updater daemon

```
sudo apt install fwupd
```

### Move all files made on May 12th to /tmp/May

```
for i in `ls -lrt | grep "May 12" | awk '{print $9}' `; do mv $i* /tmp/May; done
```



#### Start firmware updating daemon

```
sudo service fwupd start
```

#### Bash Shebang

```
#!/bin/bash
```

#### Apply change to Bashrc

```
source ~/.bashrc
```

#### Udev rule location

```
/etc/udev/rules.d/ 
```


#### Remove all lines from file containing at least one C character

```
sed '/C/'d example.txt
```

#### Empty lines

```
sed '/^$/d' example.txt
```

#### last line

```
sed '$d' example.txt
```

#### first line

```
sed 1d example.txt
```

#### Run command in every subdirectory

```
for d in */ ; do (cd "$d" && command); done
```

### Gnome 


#### Update Gnome stuff 

```
gtk-update-icon-cache
```

##### Overwrite the file

```
sed -i '/C/'d example.txt 
```
##### Save to new file

```
sed '/C/'d example.txt > example2.txt
```

##### Batch rename all files with date in this format (2022_03_15 19_26_07 UTC) 

```
rename -n 's/\(\d{4}_\d{2}_\d{2} \d{2}_\d{2}_\d{2} UTC\).*?//' *
rename -n 's/\s+/_/g' *

rename 's/\(\d{4}_\d{2}_\d{2} \d{2}_\d{2}_\d{2} UTC\).*?//' * && rename 's/\s+/_/g' *

```
##### Batch rename all files with date in this format (2022_03_15 19_26_07 UTC) RECURSIVELY

```
find . -name "*" -exec 'rename 's/\(\d{4}_\d{2}_\d{2} \d{2}_\d{2}_\d{2} UTC\).*?//' * && rename 's/\s+/_/g'' * {} ";"

rename 's/\(\d{4}_\d{2}_\d{2} \d{2}_\d{2}_\d{2} UTC\).*?//' * && rename 's/\s+//g' *
```

#### Rename files in all subdirs (one-deep)

```
for d in */ ; do (cd "$d" && rename 's/\(\d{4}_\d{2}_\d{2} \d{2}_\d{2}_\d{2} UTC\).*?//' * && rename 's/\s+//g' *); done
```

#### Update firmware

```
sudo fwupdmgr refresh

```
#### Conditional Commands

```
The first one is:
exec('command1 ; command2');

This will run the command unconditionally, which means they don't depend on each other.

However, the second one is:

exec('command1 && command2');

This one is conditional, The second command only runs if the first command succeeds
```


#### Get Info about motherboard

```
dmidecode
```

#### Add User to samba

```
sudo smbpasswd -a yalt

```

#### Get size of var directory 

```
sudo du -sh /var
```

#### List all installed packages


#### Search for process using port 9000

```
sudo lsof -i -P -n | grep 9000
```

#### Print cool hostname banner for SSH

```
figlet $(hostname) > /etc/ssh/banner
```

#### Make all connected monitors go to sleep after 60 seconds of inactivity.

```
xset dpms 60 60 60
```


#### Increase inotify watchers

```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

#### Quick raspi kubernetes setup script

```
curl -sL \
 https://gist.githubusercontent.com/alexellis/fdbc90de7691a1b9edb545c17da2d975/raw/b04f1e9250c61a8ff554bfe3475b6dd050062484/prep.sh \
 | sudo sh
```

#### Kubernetes using `ansible` 

```
https://github.com/mrlesmithjr/ansible-rpi-k8s-cluster
```

#### Mounting Archive Drive: 

```
sudo mount -t ntfs-3g /dev/sde1 /mnt/Archives/
sudo mount /dev/md127 /mnt/archives/
```

#### Enable network automount service

```
sudo systemctl enable systemd-networkd-wait-online
```

#### Mounting a smb share

```
sudo mount -t cifs -o username=serverUserName //myServerIpAdress/sharename /mnt/myFolder/
```

#### Mounting an NFS share

```
mount -t nfs 10.10.0.10:/backups /var/backups
```

#### Backup to Archives [r]ecursively, in [a]rchive to preserve attributes, [h]uman readable format, [v]erbose logging,  ignoring already transferred files [u]nless newer, and --deleteing files which do not exist in source

```
rsync -rauhv /mnt/nas/ /mnt/Archives/nas/ > /mnt/nassd/shared/Network/NUC/archivesrsynclog.log --delete
sudo rsync -ruhv --delete /mnt/nas/shared/ /mnt/Archives/shared/ > ./"archivesrsynclog_$(date +"%F %T")".log & 
sudo rsync -ruhv --delete /mnt/nas/shared/ /mnt/Archives/nas/shared/ > ./"archivesrsynclog_$(date +"%F %T")".log & 
```

"archivesrsynclog_$(date +"%F %T")".log

#### Intiialize file system as ext4

```
mkfs.ext4 /dev/sdf1
```

#### Generate 4096 bit RSA keyboard

```
ssh-keygen -b 4096 -t rsa
```

#### Copy that shit

```
ssh-copy-id -i ~/.ssh/id_rsa.pub user@192.168.50.3
```

#### Disable Swap 

```
sudo dphys-swapfile swapoff && \
sudo dphys-swapfile uninstall && \
sudo update-rc.d dphys-swapfile remove
```

#### Silence terminal output 

```
 &> /dev/null
```

#### Generate ssh-RSA key no prompt

```
ssh-keygen -t rsa -N '' -f ~/.ssh/id_rsa
```

#### Fix inability to access GUI on debian

```
/etc/X11/Xsession
```

### Generate GPG key
```
gpg --gen-key --default-new-key-algo=rsa4096/cert,sign+rsa4096/encr
```

### List GPG keys
```
 gpg --list-keys
```

### List GPG signatures
```
gpg --list-signatures
```

### Export a gpg pubkey (exports in binary)
```

gpg --output alice.gpg --export alice@cyb.org
```

### Acii armor an exported binary 
```
gpg --armor --export alice@cyb.org
```

### Give git the ID of your gpg key
```
git config --global user.signingkey 3AA5C34371567BD2
```

#### Copy key to remote server

```
ssh-copy-id -i $HOME/.ssh/id_rsa.pub user@server1.cyberciti.biz
```


#### Command to backup my stuff

```
sudo cp -R /mnt/nas/shared /mnt/Archives/nasbackup & 	

```

#### Convert all NEF images in a directory to jpg

```
convert *.NEF *.JPG; exiftool -tagsfromfile *.NEF -all:all *.JPG
```

convert *.NEF *.JPG


https://askubuntu.com/questions/1337760/how-to-bulk-convert-nef-raw-images-to-jpg-and-remove-original-images
find . -type f \( -iname "*.raw" -o -iname "*.nef" \) -exec sh -c 'darktable-cli {} ${0%.*}.jpg' {} \; -delete


#### Block specific IP with ufw

```
sudo ufw deny from xxx.xxx.xxx.xxx to any
```

/dev/sdh

#### Create software Raid 0 array with two devices 

```
sudo mdadm --create --verbose /dev/md0 --level=0 --raid-devices=2 /dev/sdh /dev/sdi
```


#### Create software Raid 10 array with four devices 

```
sudo mdadm --create --verbose /dev/md10 --level=10 --raid-devices=4 /dev/sde /dev/sdf /dev/sdg /dev/sdh
```


#### View all services using sdh1

```
lsof | grep /dev/sdh1
```





#### Capture 1000 Packets on eth0 and write them to a file 

```
tcpdump -w /media/NAS/Security/packetcaptures/"capture_$(date +"%F %T")".pcap -c 1000 -i enp6s0
```


#### Temporarily change swap value

```
sudo sysctl vm.swappiness=10
```



#### Change file ownership by referenxing another file

```
chown --reference=otherfile thisfile
chmod --reference=otherfile thisfile
```



#### Show file metadata

```
exif filename
```




#### Converts all files from .txt to .txt

```
for f in *.txt; do 
mv -- "$f" "${f%.txt}.text"
done
```



#### Generate custome SSL key

```
openssl req -newkey rsa:4096 \
-x509 \
-sha256 \
-days 3650 \
-nodes \
-out example.crt \
-keyout example.key
```



#### Extract hidden data from files

```
binwalk --extract target_file
```



#### List all connected audio devices

```
aplay -l
```



#### Add a user to Linux System & give them a home dir

```
useradd -m user
```



#### SCP command

```
scp -r UserName@SourceHost:SourceDirectoryPath TargetFolderName
```


#### list all current connections and listening services on a system along with the processes and PIDs for each connection

```
netstat -tulpn
```


#### Kill all processes using port

```
sudo kill `sudo lsof -t -i:3306`
```


```
the $ symbol represents the regular user Linux interface command
prompt. And the # symbol represents the Administrator user Linux interface command prompt.
```


#### Sum all numbers in a file 

```
awk '{ sum += $1 } END { print sum }' file
```


#### Redirect to stdout

```
program [arguments...] 2>&1 | tee outfile
```



#### Change SSH login message

```
You need to edit two files:

/etc/motd (Message of the Day)
/etc/ssh/sshd_config: Change the setting PrintLastLog to "no", this will disable the "Last login" message.

And then restart your sshd.
```

#### Insert Motd 

```
echo $'***************************************************************************\n                            NOTICE TO USERS\nThis computer system is private property. It is for authorized use only.\nUsers (authorized or unauthorized) have no explicit or implicit\nexpectation of privacy.\n\nAny or all uses of this system and all files on this system may be\nintercepted, monitored, recorded, copied, audited and inspected by\nusing this system, the user consents to such interception, monitoring,\nrecording, copying, auditing, inspection, and disclosure at the\ndiscretion of such personnel or officials.  Unauthorized or improper use\nof this system may result in civil and criminal penalties and\nadministrative or disciplinary action, as appropriate. By continuing to\nuse this system you indicate your awareness of and consent to these terms\nand conditions of use. LOG OFF IMMEDIATELY if you do not agree to the\nconditions stated in this warning.\n****************************************************************************\n' | tee /etc/motd
```

#### Count files recursively

```
find . -type f | wc -l
```



### Install deb file 
```
sudo dkpg -i file.deb
```

#### Compile Emscrippten Stuff 

```
docker run --rm -v $(pwd):/src -u $(id -u):$(id -g) emscripten/emsdk emcc dirsize.rs -o dirsize.html
```


#### Fix (ERROR: Couldn't determine iptables version)

```
sudo update-alternatives --set iptables /usr/sbin/iptables-legacy
```


#### Find replace string in files recursively

```
grep -rl oldtext . | xargs sed -i 's/oldtext/newtext/g'
```


#### Find replace filename recursively

```
find -name "*foo*.filetype" -exec rename 's/foo/bar/g' {} ";"
```


#### Create Archive 

```
tar -czvf archive.tar.gz stuff
```

#### Untar an archive

```
tar -czvf archive.tar.gz /usr/local/something
```

#### Count files recursively

```
find <directory> -type f | wc -l
```


#### Tar all directories in working dir, delete untarred dir, and save output to tarlog.log

```
find * -maxdepth 0  -exec tar czvf {}.tar.gz {} \; -exec rm -rf {} \; > tarout.log &
```


#### Tar all .doc files in working dir, delete untarred file, and save to tarlog.log

```
find * -maxdepth 0 -name "*.doc" -exec tar czvf {}.tar.gz {} \; -exec rm -rf {} \; > tarout.log &
```


#### Rar all the directories in the working dir, remove unrared dirs

```
find * -maxdepth 0 -type d-exec rar a {}.rar {} \; -exec rm -rf {} \; > rarout.log &
```


#### Rar all .doc files in working dir, remove unrared files

```
find * -maxdepth 0 -name "*.doc" -exec rar a {}.rar {} \; -exec rm -rf {} \; > rarout.log &
```


#### Disk Usage in depth 

```
du -h --max-depth=4 /path/to/directory
```

#### Disk Usage sorted

```
du -sh * | sort -rh
```

#### Disk usage in depth and sorted

```
du -h --max-depth=6 . | sort -rh > du_scan.log
```




#### Set timezone to Los Angeles

```
timedatectl set-timezone America/Los_Angeles
```

#### Open a disc drive

```
eject
```


#### Display total number of entries in log and sort by descending order

```bash
| uniq -c | sort -nr
```
#### Get info about an IP address 

```bash
curl https://ipinfo.io/ip-address
```
#### Display all users

```bash
getent passwd | awk -F: '{ print $1}'
```
#### View all jobs 

```bash
ps -ef
```
#### Recursivly download everything in an index 

```bash
wget --recursive --no-parent http://example.com/configs/.vim/
```

#### Recursivly download everything in an index 

```bash
wget -m -np -c -w 2 -R "index.html*" "https://www.squid-proxy.xyz/Playstation%202/"
wget -m -np -c -w 2 -R "index.html*" https://edu.anarcho-copy.org/ &
wget -m -np -c -w 2 -R "index.html*" https://anduin.linuxfromscratch.org/sources/linux-firmware/ &
wget -m -np -c -w 2 -R "index.html*" http://reprints.gravitywaves.com/VIP/ &
```

#### wget an entire webite

```bash
wget \
 --recursive \
 --no-clobber \
 --page-requisites \
 --html-extension \
 --convert-links \
 --restrict-file-names=windows \
 --domains website.org \
 --no-parent \
 www.website.com
 ```



 ### Centos Stuff
------------------------


#### Change SSH port

```bash
vi /etc/ssh/sshd.config
You will notice that the line that sets up the port is commented out, so add a new one with a port between 10000 and 60000 (in this example, 22212), then save and close the file:
```


#### If SeLinux is active

```bash
semanage port -a -t ssh_port_t -p tcp 22212
systemctl restart sshd
```

#### Allow port thrrough SeLinux

```bash
semanage port -a -t ssh_port_t -p tcp 7117
semanage port -m -t ssh_port_t -p tcp 7117
```


#### Check if firewall is running

```bash
sudo firewall-cmd --state
```


#### List firewall state

```bash
sudo firewall-cmd --list-all
```

#### Add port to firewall 

```bash
sudo firewall-cmd --permanent --zone=public --add-port=1234/tcp
```
#### Add service to firewall (samba)

```bash
firewall-cmd --permanent --zone=public --add-service=samba
firewall-cmd --zone=public --add-service=samba
```

### GRUB
---

#### Pages Long outputs 

```
grub> set pager=1
```


#### Display attached drives 

```
grub> ls
`
(hd0) (hd0,msdos2) (hd0,msdos1)
```


#### Root Filesystem  

```
grub> ls (hd0,1)/
lost+found/ bin/ boot/ cdrom/ dev/ etc/ home/  lib/
lib64/ media/ mnt/ opt/ proc/ root/ run/ sbin/ 
srv/ sys/ tmp/ usr/ var/ vmlinuz vmlinuz.old 
initrd.img initrd.img.old
```


#### View Distro  

```
grub> cat (hd0,1)/etc/issue
lsb_release -a
cat /etc/issue
```


### [BOOTING FROM GRUB]


#### Tell Grub where root is 

```
grub> set root=(hd0,1)
```



#### Give grub the Kernel 

```
grub> linux /boot/vmlinuz-3.13.0-29-generic root=/dev/sda1
```


```
{
Type /boot/vmli & tab to auto complete 
root=/dev/sdX Sets location of filesystem 
hd0,1 = /dev/sda1; hd1,1 = /dev/sdb1; hd3,2 = /dev/sdd2 & so on 
}
```

#### Set the initrd file (must be same as kernel) 

```
grub> initrd /boot/initrd.img-3.13.0-29-generic
```


#### Boot system 

```
grub> boot
```


### NMAP
------------


-A: Detect a targets operating system 
-sA: Detect Targets firewall

#### Discovering which devices are up

```
nmap -sP 192.168.100.0/24
```


#### Scan a targets OS

```
nmap -A 192.168.100.1
```


#### Scan a targets Firewall

```
nmap -sA 192.168.100.1
```


#### Scan for open ports, save to file

```
nmap -sP 192.168.50.0/24 > /media/NAS/Security/nmapscans/hostsup/"HostsUp_$(date +"%F %T")"
```

nmap 192.168.50.0/24 > /media/NAS/Security/nmapscans/fullscans/"NmapScan_$(date +"%F %T")"

nmap --iflist 192.168.50.0/24
