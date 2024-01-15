---
title: "List: Indie Game Dev Assets and Tools"
slug: list-game-dev-assets-tools
date: 2024-01-03
updated: 2024-01-04
tags: 
  - List
  - GamesDevelopment
categories:
  - Tech
  - DIY
description: Indie game dev assets and tools (mostly free, open source, without usage restriction)
comments: true
---

- Game dev assets and tools
- For indie devs: mostly open source / free, beginner-friendly and royalty-free (e.g. unlike Unity asset store etc.)
- Almost everything also usable for commercial projects

<!--more-->

---

## Licensing infos

- [**"CC0"**](https://creativecommons.org/publicdomain/zero/1.0/deed) (similar license): "no rights reserved" / "public domain" assets - possible commercial use without attribution
- Most common **attribution** licence: [**CC BY 4.0**](https://creativecommons.org/licenses/by/4.0/deed)
- **Attribution example**: 

	> "Pack XYZ" (+ product link) by Dillon Becker (+ autor site link), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed)

- **"Royalty free"**: no royalties or license fees over volume or time
- **Use in games**: since redistribution/resell is prohibited even with paid content, it's necessary to ensure that raw assets cannot be easily copied out of your project. Many engines **pack assets** on export by default for this. Some sources even require you to use encryption [^turbosquid]
- I recommend e.g. **organizing assets in folders by authors** to always be able to attribute - either if necessary or as minimum common courtesy and thanks in case of free content

[^turbosquid]: E.g. see turbosquid ["Access to 3D Models"](https://blog.turbosquid.com/turbosquid-3d-model-license/)

## Legend

| Icon  | Description                           |
| --- | ------------------------------------- |
|  🟠  | Few CC0 assets (attribution required) |
|  🟡  | Mixed CC0 / non-CC0 assets            |
|  🟢  | Primarily CC0 assets                  |
| 💰➕ | Also paid content                     |
|  💰  | Only paid content                     |
|  🌐  | Web version available                 |

## Graphics

### Assets

#### All kinds for games

- [itch.io/game-assets](https://itch.io/game-assets) 🟢 💰➕
- [opengameart.org](https://opengameart.org) 🟡
- [kenney.nl](https://kenney.nl) 🟢 💰➕ 
- [gamedevmarket.net](https://www.gamedevmarket.net/) 🟢 💰➕
- [craftpix.net](https://craftpix.net/) 🟢 💰➕ (2D focus)

#### Icons

- [game-icons.net](https://game-icons.net): Icons 🟢 
- [remixicon.com](https://remixicon.com): Icons (general) 🟢

#### Stock images

- [freepik.com](https://www.freepik.com): Stock Photos, vectors & videos 🟡 💰➕
- [pixabay.com](https://pixabay.com): Stock Photos, vectors & videos 🟢
- [pexels.com/](https://www.pexels.com/): Stock Photos & videos 🟢

#### 3D models

- [sketchfab.com](https://sketchfab.com): 3D models 🟡 💰➕
- [polyhaven.com](https://polyhaven.com): 3D models 🟢
- [turbosquid.com](https://www.turbosquid.com): 3D models 🟡 💰➕
- [poly.pizza](https://poly.pizza): 3d models (low poly) 🟡
- [Retro3DGraphicsCollection](https://github.com/Miziziziz/Retro3DGraphicsCollection): 3D models (retro)

#### Textures & materials

- [ambientcg.com](https://ambientcg.com): PBR materials & HDRIs 🟢
- [3dtextures.me](https://3dtextures.me): PBR materials 🟢
- [freepbr.com](https://freepbr.com): PBR materials 🟠 (commercial use: 💰)
- [soundimage.org](https://soundimage.org/images-home-page): Textures 🟠
- [content.minetest.net](https://content.minetest.net/packages/?type=txp): Textures (Minecraft style) 🟡

### Tools

#### 2D Editing / creation

- **Raster**
	- [GIMP](https://www.gimp.org)
	- [paint.NET](https://www.getpaint.net/index.html)
	- [krita](https://krita.org/)
	- [Affinity Photo](https://affinity.serif.com/en-us/photo/) 💰
- **Vector** 
	- [inkscape](https://inkscape.org/de)
	- [vectr](https://vectr.com/) 🌐
	- [Affinity Designer](https://affinity.serif.com/en-us/designer/) 💰
- **Pixel & animation**
	- [pixelorama](https://orama-interactive.itch.io/pixelorama) 🌐
	- [piskel](https://www.piskelapp.com/) 🌐
	- [graphicsgale](https://graphicsgale.com/)
	- [libresprite](https://libresprite.github.io/)
	- [aseprite](https://www.aseprite.org) 💰
	- [pyxeledit](https://pyxeledit.com/) 💰
- **Animation (general)**
    - [synfig](https://www.synfig.org/)
    - [pencil2d](https://www.pencil2d.org/)
    - [spookyghost](https://encelo.itch.io/spookyghost)

- **Conversion**
	- [converseen](https://converseen.fasterland.net)

#### 2D Generation

- **Text to image only**
	- [stablediffusionweb.com](https://stablediffusionweb.com) 🌐 🟢
    - [perchance.org/ai-photo-generator](https://perchance.org/ai-photo-generator) 🌐 🟢
    - [deepai.org/text2img](https://deepai.org/machine-learning-model/text2img) 🌐 🟢
	- [craiyon](https://www.craiyon.com/) 🌐 🟠 💰➕
	- [freepik.com/ai/image-editor](https://www.freepik.com/ai/image-editor) 🌐 🟢 💰➕ (rate limited)
	- [midjourney](https://www.midjourney.com) 🌐 🟢 💰
- **Image/Scribble to image (and more)**:
    - [dezgo.com](https://dezgo.com/) 🌐 🟢
    - [freepik.com/pikaso](https://www.freepik.com/pikaso/) 🌐 🟢 💰➕
    - [scribblediffusion.com](https://scribblediffusion.com/) 🌐 🟢
    - [scribbletoimage.com](https://scribbletoimage.com/) 🌐 🟢
    - [AUTOMATIC1111/stable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui) 🟢
- **Maps**
	- [watabou](https://watabou.github.io/#) 🌐 🟢

#### 2D Game asset work

- **Tool collection**:
    - [lospec.com](https://lospec.com/resources/): pixel art palettes, pixel art web editor and other tools
- **Sprite cutter**
	- [ezgif.com/sprite-cutter](https://ezgif.com/sprite-cutter)
	- [yeoji.github.io/spritesheet-cutter](https://yeoji.github.io/spritesheet-cutter)
- **Sprite unpacker**
	- [Alferd-Spritesheet-Unpacker](https://github.com/ForkandBeard/Alferd-Spritesheet-Unpacker)
- **Pixel art scaling**
	- [2dimagefilter](https://github.com/Hawkynt/2dimagefilter)
- **Pixel art conversion**
	- [slk-img2pixel](https://captain4lk.itch.io/slk-img2pixel)
	- [pixatool](https://kronbits.itch.io/pixatool) 💰
	- [pixelover](https://deakcor.itch.io/pixelover) 💰
	- [pixel-composer](https://makham.itch.io/pixel-composer) 💰
- **Maps / Levels**
    - [Tiled](https://www.mapeditor.org/)
    - [LDtk](https://ldtk.io/)
	- [tabletop-rpg-map-editor](https://deepnight.itch.io/tabletop-rpg-map-editor)

#### 3D Modeling

- **General**
	- [Blender](https://www.blender.org)
- **Low poly**
	- [blockbench](https://www.blockbench.net/)
	- [picocad](https://johanpeitz.itch.io/picocad) 💰
	- [crocotile3d](http://www.crocotile3d.com/) 💰
	- [assetforge](https://kenney.itch.io/assetforge) 💰
- **Voxel**
	- [MagicaVoxel](https://ephtracy.github.io)
	- [voxedit](https://www.voxedit.io)
	- [goxel](https://goxel.xyz/) 🌐
	- [Kenney Shape](https://kenney.nl/tools/kenney-shape?kenshape) 💰
- **Pose**
	- [posemy.art](https://posemy.art) 🌐
	- [justsketch.me](https://justsketch.me) 🌐
	- [magicposer.com](https://webapp.magicposer.com) 🌐

#### Textures

- **PBR materials**
	- [material-maker](https://rodzilla.itch.io/material-maker)
	- [materialize](https://boundingboxsoftware.com/materialize)
	- [laigter](https://azagaya.itch.io/laigter) (2D focus)

## Audio

### Assets

#### All kinds

- [itch.io/game-assets](https://itch.io/game-assets) 🟢 💰➕
- [opengameart.org](https://opengameart.org) 🟡
- [pixabay.com](https://pixabay.com) 🟢
- [sampleswap.com](https://sampleswap.com) 🟡 💰➕ 
- [gamedevmarket.net](https://www.gamedevmarket.net/) 🟢 💰➕

#### Sounds

- [freesound.org](https://freesound.org) 🟡
- [zapsplat.com](https://www.zapsplat.com) 🟠 💰➕ (rate limited)
- [soundly.com](https://getsoundly.com/) 🟢 💰➕
- [kenney.nl](https://kenney.nl) 🟢 💰➕ 
- [sonniss.com/gameaudiogdc](https://sonniss.com/gameaudiogdc) 🟢 💰➕
- [99sounds.org](https://99sounds.org) 🟢
- [freetousesounds.com](https://www.freetousesounds.com) 🟡 💰➕
- [gamesounds.xyz](https://gamesounds.xyz) 🟢

#### Music

- [filmmusic.io](https://filmmusic.io) 🟠 💰➕
- [soundimage.org](https://soundimage.org) 🟠 💰➕
- [darrencurtismusic.com](https://www.darrencurtismusic.com) 🟠

### Tools

#### Editing

- **General**
	- [Audacity](https://www.audacityteam.org/)
- **Conversion**
	- [lame](https://lame.sourceforge.io/)

#### Creation

- **Retro**
    - [bosca-ceoil](https://terrycavanagh.itch.io/bosca-ceoil)
    - [amistudio](https://bleubleu.itch.io/famistudio)
    - [petaporon](https://pixwlk.itch.io/petaporon) 🌐
    - [beepbox.co](https://www.beepbox.co/) 🌐
- **Sound only**
	- [chiptone](https://sfbgames.itch.io/chiptone) 🌐
    - [labchirp](https://labbed.itch.io/labchirp)
- **DAW**:
    - [lmms](https://lmms.io/)
    - [ardour](https://ardour.org/)
    - [FL Studio](https://www.image-line.com/fl-studio/) 💰

#### Generation

- **Voice**
	- [coqui tts](https://github.com/coqui-ai/tts) 🟢 💰➕

## Design

### Tools

#### Project management (game/art specific)

- [articy](https://www.articy.com) 💰➕
- [hacknplan](https://hacknplan.com) 💰➕

#### Engines / IDEs (open source, for beginners)

- [Godot](https://godotengine.org/): 2D & 3D, Python-like & C#
- [GDevelop](https://gdevelop.io/): 2D, no-code 💰➕
- [pico-8](https://www.lexaloffle.com/pico-8.php): 2D & 3D, Lua

### Guides

- **Programming**
	- [gameprogrammingpatterns.com](https://gameprogrammingpatterns.com/contents.html)

- **AI**
	- [gameaipro.com](http://www.gameaipro.com)