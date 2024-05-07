document.addEventListener("DOMContentLoaded", function () {
  buildGallery();
  fixedNav();
  linkFocus();
  scrollNav();
});

function fixedNav(){
    const header = document.querySelector(".header");
    const aboutFestival = document.querySelector(".about__festival");

    document.addEventListener('scroll', function(){
        if(aboutFestival.getBoundingClientRect().bottom < 1){
            header.classList.add('fixed')
        }else{
            header.classList.remove('fixed')
        }
    })
}

function buildGallery() {
  const IMG_QUANTITY = 16;
  const gallery = document.querySelector(".gallery-img");

  for (let i = 1; i <= IMG_QUANTITY; i++) {
    const img = document.createElement("IMG");
    img.src = `src/img/gallery/full/${i}.jpg`;

    //event handler
    img.onclick = function () {
      showImg(i);
    };

    gallery.appendChild(img);
  }
}
function showImg(i) {
  const img = document.createElement("IMG");
  img.src = `src/img/gallery/full/${i}.jpg`;

  //modal
  const modal = document.createElement("DIV");
  modal.classList.add("modal");
  modal.onclick = closeModal;

  //closes img modal
  const closeModalImg = document.createElement("BUTTON");
  closeModalImg.textContent = "X";
  closeModalImg.classList.add("close-btn");
  closeModalImg.onclick = closeModal;

  modal.appendChild(img);
  modal.appendChild(closeModalImg);

  //Html
  const body = document.querySelector("body");
  body.classList.add("overflow-hidden");
  body.appendChild(modal);
}

function closeModal() {
  const modal = document.querySelector(".modal");
  modal.classList.add("fade-out");
  setTimeout(() => {
    modal?.remove();

    const body = document.querySelector("body");
    body.classList.remove("overflow-hidden");
  }, 500);
}

function linkFocus(){
  document.addEventListener('scroll', function(){
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');
    let current = ""

    sections.forEach(section =>{

      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight

      if(window.scrollY >= (sectionTop - sectionHeight / 3)){

        current = section.id;
      }

      navLinks.forEach(link => {
        link.classList.remove('active')
        if (link.getAttribute('href') === "#" + current){
          link.classList.add('active')
        }
      } )


    })
  })
}

function scrollNav(){
  const navLinks = document.querySelectorAll('.navbar a')

  navLinks.forEach(link =>{
    link.addEventListener('click', e => {
      e.preventDefault()

      const sectionScroll = e.target.getAttribute('href')
      const section = document.querySelector(sectionScroll)

      section.scrollIntoView({behavior : 'smooth'})



    })
  })
}
