function categoryText(category, text) {
    if (window.location.href.indexOf(`category/${category}`) != -1) {
        var contentDiv = document.querySelector(".md-content__inner")
        var div = document.createElement('DIV');
        div.className = "md-typeset"
        div.innerHTML = `
        <p>${text}</p>
        `
        contentDiv.insertBefore(div, contentDiv.childNodes[3])
    }
}

categoryText("tech", "About tech")