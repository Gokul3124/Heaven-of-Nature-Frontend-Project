window.scroll = function() {myfunction()};

myfunction = () => {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("prograss-bar").style.width = scrolled + "%";
}