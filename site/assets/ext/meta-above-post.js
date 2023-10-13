var meta = document.querySelector(".md-post__meta")
if (!meta)
meta.style["list-style"] = "none"
meta.style["margin-left"] = "0px"

var list = meta.querySelector(".md-nav__list")
list.style["display"] = "flex"
list.style["list-style"] = "none"
list.style["margin-left"] = "-20px"
Array.prototype.forEach.call(list.children, child => {
    child.style["margin-left"] = "8px"
    child.querySelector("div").style["gap"] = "0px"
});
meta.querySelector(".md-post__title").remove()
var content = document.querySelector(".md-content__inner")
content.insertBefore(meta, content.childNodes[3])