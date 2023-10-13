function updateHeader() {
    document.querySelector(".md-logo").href = "/about"
    
    var titleText = "<a href='/about'><u>Philipp Kopp</u></a> - Sharing pragmatic knowledge about<br> 💻tech, 🛠️diy and 📈personal development"
    document.querySelector(".md-header__topic span").innerHTML = titleText
    var navTitle = document.querySelector(".md-nav__title")
    // navTitle.innerHTML = navTitle.innerHTML.replaceAll("Philipp Kopp", titleText)
}

updateHeader()

