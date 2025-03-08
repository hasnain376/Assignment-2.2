const slider_content = [
  {
    image: "images/hero1.jpg",
    content:
      "Night City glows with neon and danger, a place where tech and crime intertwine. Skyscrapers pierce the sky while shadows lurk in rain-soaked alleys. The hum of cybernetics and distant sirens fill the air, and every street holds a story of survival.",
  },
  {
    image: "images/herp2.jpg",
    content:
      "Night City never sleeps—its neon glow reflects off rain-slick streets, where hackers, mercs, and dreamers chase fortune or fall into the abyss. The skyline towers above, but in the alleys below, survival is the only currency that matters.",
  },

  {
    image: "images/hero3.jpg",
    content:
      "In Night City, the future is wired and ruthless. Bright holograms promise a better life, but the streets tell a different story—one of gangs, cybernetics, and endless struggle beneath the corporate towers.",
  },
];

const prevBtn = document.querySelector(".prev-icon");
const nextBtn = document.querySelector(".next-icon");

const sliderBtns = document.querySelectorAll(".slider span");

const image = document.querySelector(".img-container img");
const content = document.querySelector(".para");

let count = 0;

let prevCount = () => {
  count--;
  if (count < 0) {
    image.src = slider_content[slider_content.length - 1].image;
    content.textContent = slider_content[slider_content.length - 1].content;
    count = slider_content.length - 1;
  }
  image.src = slider_content[count].image;
  content.textContent = slider_content[count].content;
};

let nextCount = () => {
  count++;
  if (count > slider_content.length - 1) {
    image.src = slider_content[0].image;
    content.textContent = slider_content[0].content;
    count = 0;
  }
  image.src = slider_content[count].image;
  content.textContent = slider_content[count].content;
};

prevBtn.addEventListener("click", prevCount);
nextBtn.addEventListener("click", nextCount);

setInterval(() => {
  count++;
  if (count > slider_content.length - 1) {
    count = 0;
    image.src = slider_content[0].image;
    content.textContent = slider_content[0].content;
  }
  if (count < 0) {
    count = slider_content.length - 1;
    image.src = slider_content[count].image;
    content.textContent = slider_content[count].content;
  }
  image.src = slider_content[count].image;
  content.textContent = slider_content[count].content;
  sliderBtns.forEach((btn, index) => {
    if (index === count) {
      btn.style.border = "2px solid #000";
    } else {
      sliderBtns[count-1].style.border = "none";
    }
  });
}, 3000);






