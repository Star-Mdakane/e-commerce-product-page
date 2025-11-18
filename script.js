const overlay = document.querySelector(".overlay");
const closeMenuBtn = document.querySelector(".close-menu");
const menu = document.querySelector(".menu");
const burger = document.querySelector(".burger");
const cartBtn = document.querySelector(".header-cart");
const avatar = document.querySelector(".avatar");
const cart = document.querySelector(".cart");
const lightbox = document.querySelector(".lightbox");
const viewLightbox = document.querySelector(".image-container");
const lightboxClose = document.querySelector(".lightbox-close");
const imageSlider = document.querySelectorAll(".image-slide .product");
const imageSliderLightbox = document.querySelectorAll(".l-image-slide .product");
const previewImg = document.querySelector(".image-container");
const previewImgLightbox = document.querySelector(".l-image-container");


imageSlider.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        imageSlider.forEach((thumb) => thumb.classList.remove("active"));
        imageSliderLightbox.forEach((thumb) => thumb.classList.remove("active"));
        btn.classList.add("active");
        imageSliderLightbox[index].classList.add("active");

        const previewImg = document.querySelector(".image-container");
        const newSrc = btn.querySelector('img').src.replace('-thumbnail', '');
        previewImg.style.backgroundImage = `url(${newSrc})`;
    })
})

imageSliderLightbox.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        imageSlider.forEach((thumb) => thumb.classList.remove("active"));
        imageSliderLightbox.forEach((thumb) => thumb.classList.remove("active"));
        btn.classList.add("active");
        imageSlider[index].classList.add("active");

        const previewImgLightbox = document.querySelector(".l-image-container");
        const newSrc = btn.querySelector('img').src.replace('-thumbnail', '');
        previewImgLightbox.style.backgroundImage = `url(${newSrc})`;
    })
})





const closeOverlay = () => {
    overlay.classList.remove("active");
}

const openOverlay = () => {
    overlay.classList.add("active");
}

const openMenu = () => {
    menu.classList.add("open");
    openOverlay();
}
const closeMenu = () => {
    menu.classList.remove("open");
    closeOverlay()
}

const openCart = () => {
    cart.style.display = "flex";
    openOverlay();
}
const closeCart = () => {
    cart.style.display = "none";
    closeOverlay();
}

const openLightbox = () => {
    lightbox.style.display = "flex";
    openOverlay();
}
const closeLightbox = () => {
    lightbox.style.display = "none";
    closeOverlay();
}

const nextImg = () => {

}


// const previousImg = () => {
//     const current = 
// }

overlay.addEventListener("click", () => {
    closeOverlay();
    closeMenu();
    avatar.classList.remove("active");
    closeCart();
    closeLightbox();
});

closeMenuBtn.addEventListener("click", () => {
    closeOverlay();
    closeMenu();
});

burger.addEventListener("click", () => {
    openMenu();
    openOverlay();
})

cartBtn.addEventListener("click", () => {
    openOverlay();
    openCart();
    avatar.classList.add("active");
})

viewLightbox.addEventListener("click", () => {
    openOverlay();
    openLightbox();
})

lightboxClose.addEventListener("click", () => {
    closeOverlay();
    closeLightbox();
});


