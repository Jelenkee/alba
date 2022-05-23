var sections = [
    {
        name: "Visualisierungen",
        id: "#cc-m-11316005277"
    },
    /*{
        name:"Design",
        id:"#cc-m-11585987377"
    },*/
    {
        name: "Alba Columba.",
        id: "#cc-m-11585987877"
    },
    {
        name: "Preise",
        id: "#cc-m-11585988177"
    },
    {
        name: "Kunden",
        id: "#cc-m-11658219277"
    }
];
var editPage = true;
window.addEventListener("load", function () {
    /*document.querySelectorAll(".jtpl-header")[0].classList.add("panel");
    document.querySelector("#cc-m-11316005277").classList.add("panel");
    document.querySelector("#cc-m-11585987377").classList.add("panel");
    document.querySelector("#cc-m-11585987877").classList.add("panel");
    document.querySelector("#cc-m-11585988177").classList.add("panel");
    document.querySelector("#contentfooter").classList.add("panel");
    var panels=document.querySelectorAll(".panel");*/

    //document.querySelector("#cc-m-11585985477").querySelector("a").href="javascript:show(3);";

    document.querySelector("#cc-website-logo img").classList.add("visi");
    var divs = document.querySelectorAll(".cc-m-gallery-cool-item, .cc-m-gallery-stack-item, .thumb_sq3");
    for (var i = 0; i < divs.length; i++) {
        var d = divs[i];
        var img = d.querySelector("img");
        var newDiv = document.createElement("div");
        newDiv.classList.add("after");
        var link = d.querySelector("a");
        if (link) { link.appendChild(newDiv); editPage = false; }
        var newSpan = document.createElement("span");
        newDiv.appendChild(newSpan);
        var textArr = img.alt.split("-");
        var altText = "";
        if (textArr.length == 1) {
            altText = textArr[0].trim();
        } else if (textArr.length == 2) {
            altText = textArr[0].trim() + "<br><span class='kunde'>" + textArr[1].trim() + "<\/span>";
        }
        newSpan.innerHTML = altText;
        newDiv.addEventListener("mouseenter", function () {
            this.previousElementSibling.classList.add("hover");
        });
        newDiv.addEventListener("mouseleave", function () {
            this.previousElementSibling.classList.remove("hover");
        });
        d.classList.add("j-text");
    }
    setTimeout(function () {
        console.log(document.getElementById("j-sa-topbar"));
    });
    if (!editPage) {
        var navBars = document.querySelectorAll(".jtpl-navigation");
        for (var i = 0; i < navBars.length; i++) {
            navBars[i].classList.add("gone")
        }
        document.querySelector(".jtpl-header").classList.add("loaded");
    }

    function updateLinkColor() {
        var secs = sections.map(o => document.querySelector(o.id)).filter(Boolean);
        var links = document.querySelector("#navv").querySelectorAll("a");
        for (var i = 0; i < links.length; i++) {
            links[i].classList.remove("acti");
        }
        for (var i = secs.length - 1; i >= 0; i--) {
            if (secs[i].offsetTop <= window.pageYOffset) {
                links[i].classList.add("acti");
                break;
            }
        }
    }
    addEventListener("scroll", updateLinkColor);
    updateLinkColor();
    document.querySelector("#burger").addEventListener("click", function () {
        document.querySelector("#navvm").classList.toggle("open");
        document.querySelector("#nm").classList.toggle("open");
        document.querySelector("#burger").classList.toggle("open");
    });

    const exs = ["gallery_thumb_7616795077", "gallery_thumb_7612595077", "gallery_thumb_7614608677", "gallery_thumb_7559976177", "gallery_thumb_7587919277", "gallery_thumb_7558444977",
        "gallery_thumb_7546335777", "gallery_thumb_7546353577", "gallery_thumb_7548909877", "gallery_thumb_7528924077", "gallery_thumb_7557591577", "gallery_thumb_7559976077",
        "gallery_thumb_7559976277", "gallery_thumb_7528925477", "gallery_thumb_7587919377", "gallery_thumb_7621913177", "gallery_thumb_7625086777"].map(id => document.getElementById(id));
    const all = Array.from(document.querySelectorAll("#cc-m-gallery-11588939277>div"));
    const ins = all.filter(n => !exs.includes(n));
    const gallery = document.querySelector("#cc-m-gallery-11588939277");

    const filterLinks = Array.from(document.querySelectorAll(".links a"));
    filterLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            if (link.classList.contains("active")) {
                return;
            }
            filterLinks.forEach(nn => nn.classList.remove("active"));
            link.classList.add("active");

            gallery.classList.add("vanishing");

            setTimeout(() => {
                const ext = link.classList.contains("ext");
                const int = link.classList.contains("int");
                if (ext || int) {
                    for (let i = all.length; i >= 0; i--) {
                        gallery.appendChild(all[Math.random() * i | 0]);
                    }
                } else {
                    all.forEach(e => gallery.appendChild(e));
                }
                all.forEach(n => {
                    n.style["display"] = "none";
                    if (ext) {
                        exs.forEach(nn => {
                            nn.style["display"] = "";
                        })
                    } else if (int) {
                        ins.forEach(nn => {
                            nn.style["display"] = "";
                        })
                    } else {
                        all.forEach(nn => {
                            nn.style["display"] = "";
                        })
                    }
                });
                gallery.classList.remove("vanishing");
            }, 1100);
        });
    });


});

function show(id) {
    $('html, body').animate({
        scrollTop: $(sections[id].id).offset().top
    }, { duration: 500 });
    document.querySelector("#navvm").classList.remove("open");
    document.querySelector("#nm").classList.remove("open");
    document.querySelector("#burger").classList.remove("open");
}
