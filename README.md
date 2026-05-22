<div align="center">

<img src="icons/icon.png" width="120" height="120" alt="IMDbPlay Logo" />

# IMDbPlay

### Watch Movies & TV Shows Directly From IMDb

<p align="center">
  Clean Overlay • One Click Play • IMDb Integration • Lightweight
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/cu-sanjay/IMDbPlay?style=for-the-badge&color=f5c518" />
  <img src="https://img.shields.io/github/license/cu-sanjay/IMDbPlay?style=for-the-badge&color=111111" />
  <img src="https://img.shields.io/github/repo-size/cu-sanjay/IMDbPlay?style=for-the-badge&color=2b2b2b" />
</p>

<p align="center">
  <a href="https://github.com/cu-sanjay/IMDbPlay/raw/main/IMDbPlay.user.js">
    <img src="https://img.shields.io/badge/Install-Userscript-f5c518?style=for-the-badge&logo=tampermonkey&logoColor=black" />
  </a>
</p>

<p align="center">
  <a href="https://microsoftedge.microsoft.com/addons/detail/stream-movies-for-free-/plpglblclokedhebmdgnaajnmdipindi">
    <img width="200" alt="Get it from Microsoft Edge" src="https://github.com/user-attachments/assets/e7a16358-785f-4333-80be-d137be3fc0ae" />
  </a>
</p>

## Demo Preview — Interstellar

https://github.com/user-attachments/assets/d55be147-c8dd-4bfa-800f-259f832f554e

<br>

</div>

> [!WARNING]
> **Why isn't this in the Chrome Web Store?**
> Google rejected this extension due to strict piracy and copyright policies. If you are using Google Chrome, Brave, or other Chromium-based browsers, you will need to install the extension manually via Developer Mode (instructions below).

# Preview

<table style="border-collapse: collapse; border: none; width: 100%;">
  <tr>
    <td align="center" style="border: none; padding: 10px;">
      <img src="https://github.com/user-attachments/assets/3013b1a3-fabc-4055-9211-354c8065eee4" width="100%" alt="IMDb Page Integration" /><br>
      <b>Fig 1: IMDb Page Integration</b>
    </td>
    <td align="center" style="border: none; padding: 10px;">
      <img src="https://github.com/user-attachments/assets/cd9510e2-8ed7-437e-869e-c044e470d911" width="100%" alt="Fullscreen Overlay Player" /><br>
      <b>Fig 2: Fullscreen Overlay Player</b>
    </td>
  </tr>
  <tr>
    <td align="center" style="border: none; padding: 10px;">
      <img src="https://github.com/user-attachments/assets/254d6aa4-9614-4749-8910-f1a7960fb6d1" width="100%" alt="TV Series Episode List" /><br>
      <b>Fig 3: TV Shows & Web Series Episode Selector (Top Left)</b>
    </td>
    <td align="center" style="border: none; padding: 10px;">
      <img src="https://github.com/user-attachments/assets/108f21ce-b9f2-45a5-9665-b629510604fc" width="100%" alt="Movie Playback Details" /><br>
      <b>Fig 4: Subtitles & Video Quality Controls</b>
    </td>
  </tr>
</table>

# Features

- Direct movie and TV show playback from the IMDb interface.
- Native TV show integration (episode selector built directly into the player).
- Beautiful, lightweight fullscreen overlay.
- `Ctrl/Cmd + Click` support to open the stream in a new tab.
- `ESC` key support for instant closure.
- Clean, modern UI designed to match IMDb's native aesthetic.
- Zero tracking and no accounts required.

# Installation

## Method 1 — Download ZIP (For Chrome/Chromium Users)

1. Go to the **[Releases](../../releases)** page on this repository.
2. Download the latest `IMDbPlay.zip` file.
3. Extract the ZIP file to a permanent folder on your computer.
4. Open Chrome and navigate to: `chrome://extensions`
5. Enable **Developer mode** in the top right corner.
6. Click **Load unpacked** in the top left.
7. Select the folder you just extracted.
8. Done. The extension is active.

## Method 2 — Userscript (Tampermonkey)

If you prefer keeping your extensions minimal, you can run this as a userscript.

1. Install [Tampermonkey](https://www.tampermonkey.net/).
2. Click here to **[Install the IMDbPlay Userscript](https://github.com/cu-sanjay/IMDbPlay/raw/main/IMDbPlay.user.js)**.

# How To Use

### Overlay Mode
- Open any IMDb title page.
- Click the yellow play button.
- The video opens instantly inside a fullscreen overlay.
- For Web Series, select your desired season and episode from the dropdown in the top-left corner of the player.

### New Tab Mode
Hold **Ctrl** (or **Cmd** on Mac) and click the play button to launch the player in a separate tab.

### Close Overlay
You can close the player by:
- Pressing **ESC** on your keyboard.
- Clicking the `X` button in the UI.
- Clicking anywhere outside the video frame.

# Recommended Setup

Because playback relies on third-party video hosts, you may occasionally encounter redirect tabs or ads. For the cleanest experience, it is highly recommended to use this extension alongside **[uBlock Origin](https://ublockorigin.com/)**.

# Updating

1. Download the newest ZIP from the Releases page.
2. Extract it and overwrite the files in your existing extension folder.
3. Go to `chrome://extensions` and click the reload icon (↻) on the IMDbPlay card.

# License & Disclaimer

MIT License

> [!NOTE]  
> IMDbPlay is created for educational and experimental purposes only to demonstrate DOM manipulation, iframe overlays, and userscript integration techniques.
>
> IMDbPlay does not host, upload, store, or distribute any media content. All playback content is served through third-party sources that are not owned or controlled by this project. Users are responsible for complying with local copyright laws and platform terms of service.
>
> IMDb and related trademarks belong to their respective owners.
