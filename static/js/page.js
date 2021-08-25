window.onload = function() {
    console.log("Onloaded.");

    // 设置title
    title = document.getElementsByTagName("title")[0];
    title.innerHTML = document.getElementsByTagName("h1")[0].innerHTML;
};
