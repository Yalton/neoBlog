---
title: "Raspi Mic Setup"
slug: "/raspi_mic"
---


- [Raspi Mic Setup](#raspi-mic-setup)
  - [Look for your USB microphone in the output. It should appear as a card with a device number, like "card 1: Device \[USB Audio Device\], device 0: USB Audio \[USB Audio\]".](#look-for-your-usb-microphone-in-the-output-it-should-appear-as-a-card-with-a-device-number-like-card-1-device-usb-audio-device-device-0-usb-audio-usb-audio)
  - [Record audio:](#record-audio)
  - [Replace X and Y with the card and device numbers of your USB microphone.](#replace-x-and-y-with-the-card-and-device-numbers-of-your-usb-microphone)
  - [Convert the audio file (optional):](#convert-the-audio-file-optional)


# Raspi Mic Setup

To record audio using a USB microphone on a Raspberry Pi, you'll need to follow these steps:

Update and upgrade the Raspberry Pi:
Before starting, make sure your Raspberry Pi is up-to-date. Open a terminal and run the following commands:
sql

```
sudo apt update
sudo apt upgrade
Install the required software:
```

Install the ALSA (Advanced Linux Sound Architecture) utilities and FFmpeg for recording and converting audio:

```
sudo apt install alsa-utils ffmpeg
```

Check if the USB microphone is detected:
Run the following command to list all the audio devices:

```
arecord -l
```

## Look for your USB microphone in the output. It should appear as a card with a device number, like "card 1: Device [USB Audio Device], device 0: USB Audio [USB Audio]".

Set the USB microphone as the default recording device:
Edit the ALSA configuration file:

```
sudo nano /etc/asound.conf
```

Add the following lines to the file, replacing X with the card number and Y with the device number you found in step 3:

```
pcm.!default {
  type asym
  playback.pcm {
    type plug
    slave.pcm "hw:0,0"
  }
  capture.pcm {
    type plug
    slave.pcm "hw:X,Y"
  }
}
```
Save the file and exit by pressing Ctrl+X, then Y, and finally Enter.

## Record audio:

You can now record audio using the arecord command. For example, to record a 10-second audio clip in WAV format, run:

```
arecord -D plughw:X,Y -f cd -d 10 test.wav
```

## Replace X and Y with the card and device numbers of your USB microphone.

## Convert the audio file (optional):

If you want to convert the recorded WAV file to MP3, use the following command:
less
```
ffmpeg -i test.wav -codec:a libmp3lame -qscale:a 2 test.mp3
```
This will create an MP3 file named test.mp3 with a variable bitrate.

You can now play the recorded audio using a media player like VLC or transfer it to another device for further processing.