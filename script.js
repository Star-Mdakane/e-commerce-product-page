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
const leftBtn = document.querySelector(".left-btn");
const leftBtnLightbox = document.querySelector(".l-left-btn");
const rightBtn = document.querySelector(".right-btn");
const rightBtnLightbox = document.querySelector(".l-right-btn");




imageSlider.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        imageSlider.forEach((thumb) => thumb.classList.remove("active"));
        imageSliderLightbox.forEach((thumb) => thumb.classList.remove("active"));
        let current = btn.classList.add("active");
        imageSliderLightbox[index].classList.add("active");

        const previewImg = document.querySelector(".image-container");
        const newSrc = btn.querySelector('img').src.replace('-thumbnail', '');
        previewImg.style.backgroundImage = `url(${newSrc})`;

        const rightBtn = document.querySelector(".right-btn");
        rightBtn.addEventListener("click", () => {
            if (current.nextElementSibling) {
                current.nextElementSibling.classList.add('active')
            } else {
                btn[0].classList.add('active');
            }
        })

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


const nextImage = () => {

    const current = document.querySelector(".image-slide .product.active");
    current.classList.remove("active");

    let next = current.nextElementSibling;
    if (next) {
        next.classList.add("active");
    } else {
        imageSlider[0].classList.add("active");
    }

    const newSrc = document.querySelector(".image-slide .product.active").querySelector('img').src.replace('-thumbnail', '');
    previewImg.style.backgroundImage = `url(${newSrc})`;

    const currentLightbox = document.querySelector(".l-image-slide .product.active");
    currentLightbox.classList.remove("active");
    let nextLightbox = currentLightbox.nextElementSibling;
    if (nextLightbox) {
        nextLightbox.classList.add("active");
    } else {
        imageSliderLightbox[0].classList.add("active");
    }
    const newSrcLightox = document.querySelector(".l-image-slide .product.active").querySelector('img').src.replace('-thumbnail', '');
    previewImgLightbox.style.backgroundImage = `url(${newSrcLightox})`;

}

const previousImage = () => {

    const current = document.querySelector(".image-slide .product.active");
    current.classList.remove("active");

    let previous = current.previousElementSibling;
    if (previous) {
        previous.classList.add("active");
    } else {
        imageSlider[imageSliderLightbox.length - 1].classList.add("active");
    }

    const newSrc = document.querySelector(".image-slide .product.active").querySelector('img').src.replace('-thumbnail', '');
    previewImg.style.backgroundImage = `url(${newSrc})`;

    const currentLightbox = document.querySelector(".l-image-slide .product.active");
    currentLightbox.classList.remove("active");

    let previousLightbox = currentLightbox.previousElementSibling;
    if (previousLightbox) {
        previousLightbox.classList.add("active");
    } else {
        imageSliderLightbox[imageSliderLightbox.length - 1].classList.add("active");
    }
    const newSrcLightox = document.querySelector(".l-image-slide .product.active").querySelector('img').src.replace('-thumbnail', '');
    previewImgLightbox.style.backgroundImage = `url(${newSrcLightox})`;

}

const previousImageLightbox = () => previousImage(imageSliderLightbox, previewImgLightbox);


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

viewLightbox.addEventListener("click", (e) => {
    if (!e.target.closest('button')) {
        openLightbox();
        openOverlay();
    }
})

lightboxClose.addEventListener("click", () => {
    closeOverlay();
    closeLightbox();
});

rightBtn.addEventListener("click", nextImage);
leftBtn.addEventListener("click", previousImage);
rightBtnLightbox.addEventListener("click", nextImage);
leftBtnLightbox.addEventListener("click", previousImage);


