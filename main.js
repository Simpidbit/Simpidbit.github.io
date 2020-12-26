window.onload = function() {
    var music = document.getElementById("music-audio");
    music.volume = 0.05;
    
    var musicinfo = document.getElementById("music-info");
    
    var sounds = [
            ["小星星变奏曲 | Wolfgang Amadeus Mozart", "https://m701.music.126.net/20201226201618/e42125971a08982e9e92b08bea630527/jdyyaac/045c/005d/0553/36dc1490d6772dbdead329f1bbf0ee74.m4a"],
            ["Bloom of Youth | 清水淳一", "https://m801.music.126.net/20201226201231/2fb155c35258104e9be1f063dee6d592/jdyyaac/520b/025e/565a/ea8d5fc84954f14205cba0e8cebd81cd.m4a"],
            ["Menuet D Major | Wolfgang Amadeus Mozart", "https://m801.music.126.net/20201226201358/b6eb676833b3aa00e6091f739a65f64f/jdyyaac/5608/5508/065c/abd6e08d6dbbbdc99b1e160777a051c1.m4a"],
            ["Nuit Silencieuse | Days", "https://m801.music.126.net/20201226201714/5a68f6fc8688ae7be2fb4a8c48c9f803/jdyyaac/515a/0f5b/545a/f05d92817b81c7f984fec00841ad1767.m4a"],
            ["The Right Path | Thomas Greenberg", "https://m10.music.126.net/20201226201759/7831e7d9a829dc835cc8fe9bda5ea524/yyaac/obj/wonDkMOGw6XDiTHCmMOi/2674507329/533d/dc98/6320/04335af67bfe306a7d07ef5d935d7a25.m4a"]
        ];
    var randindex = Math.floor(Math.random() * sounds.length);

    musicinfo.innerHTML = sounds[randindex][0];
    music.src = sounds[randindex][1];
}
