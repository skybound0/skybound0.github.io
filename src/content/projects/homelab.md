---
title: Homelab
date: 2021-2025
description: TrueNAS SCALE home server stack
tags:
  - TrueNAS SCALE
  - Debian
  - Docker
  - Nginx
  - Home Assistant
---

My first "homelab" was an old computer running Debian with a Minecraft server, Jellyfin, Navidrome, and a few other random things for fun.

The system has gotten more and more complicated over time. A brief overview of some of the core components:
- labsys- TrueNAS SCALE system managing all of my ZFS pools and Docker host for:
  - Nextcloud productivity suite, including Collabora Office, Talk self-hosted video conferencing, and some backends
  - Fully automated Jellyfin and *arr stack. And some secret sauce to find and "download" content :\)
  - Immich media server for sharing and backups
  - Authentik identity provider for all my services
  - SMTP mail server for all my services
  - Home Assistant for my apartment
  - Gamer servers for Minecraft and Palworld
  - Headscale for my Tailnet
  - Vaultwarden for my passwords
  - Obsidian LiveSync server
  - Various websites for various things
  - And more!
- labsys1- TrueNAS SCALE system for backups. Snapshots from labsys get replicated here
- labsys-proxy- Oracle Always-Free VPS with Nginx to protect all my stuff
- labdev- Ubuntu development server with all my automations and some GitHub action runners
- labdev1- New NixOS development server that I'm slowly migrating everything over to. NixOS is the future
- gooseserver- The original Debian system before I got the hardware to build labsys. Still around for some legacy services and testing
- labnode*- A collection of salvaged Raspberry Pi 3's and 4's for various purposes. Many are used as exit nodes or to send WoL packets. 
- labnix- My daily driver NixOS, formerly Arch, image
- miku- Voron 2.4 3D printer. This is here because I used to use the Pi on it for WoL and some other utilities I needed back before I got dedicated hardware.

Coming soon: A whole Ubiquiti stack at my house plus new server hardware. When all that is setup, all the services will be moved over from my apartment and labsys will become a mirror/offsite backup. (Fall 2026 update: with the RAMpocalypse, I don't know if this is still possible. labsys lives on)

Later fall 2026 update: everything is getting moved to Proxmox and k8s, probably
