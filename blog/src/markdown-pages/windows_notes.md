---
title: "Windows Notes"
slug: "/windows_notes"
---


# Windows Notes

---

 
### Path to add apps to start
```
%AppData%\Microsoft\Windows\Start Menu\Programs
```


### Stops Superfetch
```
net.exe stop superfetch
```



### Opens program uninstallers (from run)
```
Appwiz.cpl
```
### Get product key
```
wmic path softwareLicensingService get OA3xOriginalProductKey
```

### Windows Debloater Script
```
iwr -useb https://git.io/debloat|iex
```


### Windows ls
```
dir
```


### Command to Kill Cortana
```
Get-AppxPackage -allusers Microsoft.549981C3F5F10 | Remove-AppxPackage
```


### Type into run utility prompt to view all services 
```
services.msc
```


### Create Symlink
```
mklink /J “%USERPROFILE%\Apple\MobileSync\Backup” “H:\Users\dalt\iTunes\backup”
```


### Disk Partition Utility
```
diskpart
```



### Forces a partition to be deleted
```
DELETE PARTITION OVERRIDE
```



### Scan and repair corruptions in system files
```
sfc /scanow 
```



### Get Execeution policy for powershell
```
Get-ExeceutionPolicy
```
### Set Execeution policy for powershell to unrestricted
```
Set-ExeceutionPolicy unrestricted
```
### View event History
```
eventvwr
```
### Connect WSL to xlanch display
```
export DISPLAY=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2; exit;}'):0
```