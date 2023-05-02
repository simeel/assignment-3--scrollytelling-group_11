//STEP 1 - choose element to observe
const scenes = document.querySelectorAll(".scene__container > div");


/****** INTERSECTION OBSERVER  ******/
//STEP 2 - declare options
const options = {
  threshold: 1.0
};

//STEP 3 - tell Intersection Observer what should it do with HTML element
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

//STEP 4 - tell intersection observer how to behave
    if (!entry.target.classList.contains("visible")) {
      entry.target.classList.add("visible");
    }
  });
}, options);

//STEP 5 - adding observer to HTML element
scenes.forEach((scene) => {
  observer.observe(scene);
});