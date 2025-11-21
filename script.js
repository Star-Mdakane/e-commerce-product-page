// Variables

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
const clearCart = document.querySelector(".remove");
const success = document.querySelector(".success");
const del = document.querySelector(".del");
const checkout = document.querySelector(".checkout");
const totNum = document.querySelector(".total-amount");
const cartDisplay = document.querySelector(".cart-display");
const itemNum = document.querySelector(".nr-of-items");
const rightBtnLightbox = document.querySelector(".l-right-btn");
const form = document.getElementById("actions");


// Functions

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

const addTotal = (num) => {
    return num * 125;
}

const loadCart = () => {
    const emptyCart = document.querySelector(".empty");
    const cartItem = document.querySelector(".cart-item");

    const totalAmount = localStorage.getItem("amount");

    if (!totalAmount || totalAmount === 0) {
        emptyCart.style.display = "block"
        cartItem.style.display = "none"
        cartDisplay.style.display = "none";

    } else {
        emptyCart.style.display = "none"
        cartItem.style.display = "flex"

        const items = totalAmount / 125

        totNum.textContent = `$${totalAmount}`;
        itemNum.textContent = `x ${items}`;
        cartDisplay.style.display = "flex";
        cartDisplay.textContent = items;
    }
}

loadCart()

const loadAmount = () => {
    const totalAmount = localStorage.getItem('amount');
    totalAmount ? totalAmount : 0;
}

let amount = loadAmount;

const addAmount = (amount) => {
    const totalAmount = localStorage.getItem("amount");
    const total = Number(totalAmount) + Number(amount)
    saveAmount(total)
}

const saveAmount = (amount) => {
    localStorage.setItem("amount", amount)
}

const clearAmount = () => {
    localStorage.clear();
    console.log('Amount cleared:', localStorage.getItem("amount"));
}

const numInput = document.querySelector('#number');
let numValue = Number(numInput.value);

const subtract = document.querySelector(".minus");
const add = document.querySelector(".plus");

subtract.addEventListener('click', () => {
    if (numValue > 0) {
        numValue--;
        numInput.value = numValue;
    }
})

// Event Handlers

add.addEventListener("click", () => {
    numValue++;
    numInput.value = numValue;
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;
    numValue = Number(numInput.value);

    if (isNaN(numValue) || numValue === 0) {
        isValid = false;
        return;
    }

    let total = addTotal(numValue);
    addAmount(total);
    loadCart();
    numInput.value = 0;
    numValue = 0;
})

clearCart.addEventListener("click", () => {
    clearAmount();
    del.classList.add("show");
    setTimeout(() => {
        loadCart();
        del.classList.remove("show");
    }, 2000)
})

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

checkout.addEventListener("click", () => {
    clearAmount();
    success.classList.add("show");
    setTimeout(() => {
        loadCart();
        success.classList.remove("show");
    }, 3000)
})

rightBtn.addEventListener("click", nextImage);
leftBtn.addEventListener("click", previousImage);
rightBtnLightbox.addEventListener("click", nextImage);
leftBtnLightbox.addEventListener("click", previousImage);


