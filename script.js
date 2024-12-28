
const closeMenu = document.getElementById("close");

function handleMenu() {
    closeMenu.classList.toggle("hidden");
   
}


const initialTranslateLTR = -48 * 4;
const initialTranslateRTL = 36 * 4;

function setupIntersectionObserver(element, isLTR, speed) {
  // Intersection observer callback
  const intersectionCallback = (entries) => {
    const isIntersecting = entries[0].isIntersecting;

    if (isIntersecting) {
      document.addEventListener("scroll", scrollHandler);
    } else {
      document.removeEventListener("scroll", scrollHandler);
    }
  };

  // Create observer
  const observer = new IntersectionObserver(intersectionCallback);
  observer.observe(element);

  function scrollHandler() {
    const rect = element.getBoundingClientRect();
    const translateX = (window.innerHeight - rect.top) * speed;

    let totalTranslateX = 0;
    if (isLTR) {
      totalTranslateX = translateX + initialTranslateLTR;
    } else {
      totalTranslateX = -(translateX + initialTranslateRTL);
    }

    element.style.transform = `translateX(${totalTranslateX}px)`;
  }
}

// Select elements
const line1 = document.getElementById("one");
const line2 = document.getElementById("two");
const line3 = document.getElementById("three");

// Ensure elements exist before calling the function
if (line1) setupIntersectionObserver(line1, true, 0.15);
if (line2) setupIntersectionObserver(line2, false, 0.15);
if (line3) setupIntersectionObserver(line3, true, 0.15);


