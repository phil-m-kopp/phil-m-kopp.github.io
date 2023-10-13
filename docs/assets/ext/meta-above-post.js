var meta = document.querySelector(".md-post__meta")
meta.style["list-style"] = "none"
var list = meta.querySelector(".md-nav__list")
list.style["display"] = "flex"
list.style["list-style"] = "none"
meta.querySelector(".md-post__title").remove()
var content = document.querySelector(".md-content__inner")
content.insertBefore(meta, content.childNodes[3])