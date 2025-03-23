document.querySelector(".menu-icon").addEventListener("click",()=>{
    document.querySelector(".header").classList.toggle("menu-show")
})


var header = document.querySelector(".header")

let lastscroll = 0
window.addEventListener("scroll", () => {
    document.querySelector(".header").classList.remove("menu-show")

     if (scrollY > 50) {
          header.classList.add("highlight")
          if(scrollY > 100)
          {
               if (scrollY > lastscroll) {

                    header.classList.add("header-hide")
               }
               else {
                    header.classList.remove("header-hide")
               }
          }
          else
          {
               header.classList.remove("header-hide")
          }
       
     }
     else
     {
          header.classList.remove("highlight")
     }
     lastscroll = scrollY
})
const video = document.getElementById("myvideo")
const vcontainer = document.querySelector(".home .end")

const observer = new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting)
        {
            video.play()
        }
        else
        {
            video.onpause()
        }
    })
},{
    threshold : 0.6
})

observer.observe()