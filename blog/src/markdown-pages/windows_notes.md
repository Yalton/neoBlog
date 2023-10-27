---
title: "Windows Notes"
slug: "/windows_notes"
---



# Windows Notes

## Table of Contents

- [Windows Notes](#windows-notes)
  - [Table of Contents](#table-of-contents)
    - [Path to add apps to start](#path-to-add-apps-to-start)
    - [Stops Superfetch](#stops-superfetch)
    - [Opens program uninstallers (from run)](#opens-program-uninstallers-from-run)
    - [Get product key](#get-product-key)
    - [Windows Debloater Script](#windows-debloater-script)
    - [Windows ls](#windows-ls)
    - [Command to Kill Cortana](#command-to-kill-cortana)
    - [Type into run utility prompt to view all services](#type-into-run-utility-prompt-to-view-all-services)
    - [Create Symlink](#create-symlink)
    - [Disk Partition Utility](#disk-partition-utility)
    - [Forces a partition to be deleted](#forces-a-partition-to-be-deleted)
    - [Scan and repair corruptions in system files](#scan-and-repair-corruptions-in-system-files)
    - [Get Execeution policy for powershell](#get-execeution-policy-for-powershell)
    - [Set Execeution policy for powershell to unrestricted](#set-execeution-policy-for-powershell-to-unrestricted)
    - [View event History](#view-event-history)
    - [Connect WSL to xlanch display](#connect-wsl-to-xlanch-display)

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