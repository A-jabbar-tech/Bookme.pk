

// slider
 const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const slidesToShow = 3;
    let currentIndex = 0;

    function moveSlider() {
      currentIndex++;
      if (currentIndex > totalSlides - slidesToShow) {
        currentIndex = 0;
      }
      const translateXPercentage = -(currentIndex * (100 / slidesToShow));
      slider.style.transform = `translateX(${translateXPercentage}%)`;
    }

    // Move slide every 3 seconds
    setInterval(moveSlider, 3000);



    // question 

    const plus1 = document.querySelector(".plus1");
    const plus2 = document.querySelector(".plus2");
    const plus3 = document.querySelector(".plus3");
    const plus4 = document.querySelector(".plus4");
    const plus5 = document.querySelector(".plus5");

    const answer1 = document.querySelector(".answer1");
    const answer2 = document.querySelector(".answer2");
    const answer3 = document.querySelector(".answer3");
    const answer4 = document.querySelector(".answer4");
    const answer5 = document.querySelector(".answer5");

    plus1.addEventListener("click" , ()=>{
      answer1.classList.toggle("hidden");
      answer2.classList.add("hidden");
      answer3.classList.add("hidden");
      answer4.classList.add("hidden");
      answer5.classList.add("hidden");

      plus1.classList.toggle("fa-minus");
      plus2.classList.remove("fa-minus");
      plus3.classList.remove("fa-minus");
      plus4.classList.remove("fa-minus");
      plus5.classList.remove("fa-minus");
    })
    plus2.addEventListener("click" , ()=>{
      answer1.classList.add("hidden");
      answer2.classList.toggle("hidden");
      answer3.classList.add("hidden");
      answer4.classList.add("hidden");
      answer5.classList.add("hidden");

      plus1.classList.remove("fa-minus");
      plus2.classList.toggle("fa-minus");
      plus3.classList.remove("fa-minus");
      plus4.classList.remove("fa-minus");
      plus5.classList.remove("fa-minus");
    })
    plus3.addEventListener("click" , ()=>{
      answer1.classList.add("hidden");
      answer2.classList.add("hidden");
      answer3.classList.toggle("hidden");
      answer4.classList.add("hidden");
      answer5.classList.add("hidden");

      plus1.classList.remove("fa-minus");
      plus2.classList.remove("fa-minus");
      plus3.classList.toggle("fa-minus");
      plus4.classList.remove("fa-minus");
      plus5.classList.remove("fa-minus");
    })
    plus4.addEventListener("click" , ()=>{
      answer1.classList.add("hidden");
      answer2.classList.add("hidden");
      answer3.classList.add("hidden");
      answer4.classList.toggle("hidden");
      answer5.classList.add("hidden");

      plus1.classList.remove("fa-minus");
      plus2.classList.remove("fa-minus");
      plus3.classList.remove("fa-minus");
      plus4.classList.toggle("fa-minus");
      plus5.classList.remove("fa-minus");
    })
    plus5.addEventListener("click" , ()=>{
      answer1.classList.add("hidden");
      answer2.classList.add("hidden");
      answer3.classList.add("hidden");
      answer4.classList.add("hidden");
      answer5.classList.toggle("hidden");

      plus1.classList.remove("fa-minus");
      plus2.classList.remove("fa-minus");
      plus3.classList.remove("fa-minus");
      plus4.classList.remove("fa-minus");
      plus5.classList.toggle("fa-minus");
    })

    
    // slide wrapper

    const slideWrapper = document.querySelector('.slide-wrapper'); // This is now the moving slider
  const slideWraps = document.querySelectorAll('.slide-wrap');   // Each individual slide
  const totalSlideswrap = slideWraps.length;
  const slideswrapToShow = 2;
  let currentslidewrapIndex = 0;

  function moveSlidewrapper() {
    currentslidewrapIndex++;

    // Reset when reaching the end
    if (currentslidewrapIndex > totalSlideswrap - slideswrapToShow) {
      currentslidewrapIndex = 0;
    }

    // Move by percentage of one slide
    const translateXPercentage = -(currentslidewrapIndex * (100 / slideswrapToShow));
    
    // Apply transform to the slider (slide-wrapper is used as the container that moves)
    slideWrapper.querySelector('.slider').style.transform = `translateX(${translateXPercentage}%)`;
  }

  setInterval(moveSlidewrapper, 3000);

