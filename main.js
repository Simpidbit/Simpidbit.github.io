var music = document.getElementById("music-audio");
music.volume = 0.05;

var musicinfo = document.getElementById("music-info");

var randindex = Math.floor(Math.random() / 2);
var sounds = [
        ["小星星变奏曲 | Wolfgang Amadeus Mozart", "./sounds/小星星变奏区.mp3"],
        ["Bloom of Youth | 清水淳一", "./sounds/Bloom-of-Youth.mp3"],
        ["Menuet D Major | Wolfgang Amadeus Mozart", "./sounds/Menuet-D-Major.mp3"],
        ["Nuit Silencieuse | Days", "./sounds/Nuit-Silencieuse.mp3"],
        ["The Right Path | Thomas Greenberg", "./sounds/The-Right-Path.mp3"]
    ];


musicinfo.value = sounds[randindex][0];
music.src = sounds[randindex][1];
