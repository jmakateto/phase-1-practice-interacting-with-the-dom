// Start of challenge.js

// Initialize variables
let playing = true;
let interval;

// Function to increment the counter every second
function startTimer() {
  interval = setInterval(() => {
    const counter = document.getElementById("counter");
    const currentValue = parseInt(counter.innerText);
    counter.innerText = currentValue + 1;
  }, 1000);
}

// Start the timer when the page has loaded
window.addEventListener("load", startTimer);

// Handle the minus button click event
const minusButton = document.getElementById("minus");
minusButton.addEventListener("click", () => {
  const counter = document.getElementById("counter");
  const currentValue = parseInt(counter.innerText);
  counter.innerText = currentValue - 1;
});

// Handle the plus button click event
const plusButton = document.getElementById("plus");
plusButton.addEventListener("click", () => {
  const counter = document.getElementById("counter");
  const currentValue = parseInt(counter.innerText);
  counter.innerText = currentValue + 1;
});

// Handle the like button click event
const likeButton = document.getElementById("heart");
likeButton.addEventListener("click", () => {
  const counter = document.getElementById("counter");
  const currentValue = parseInt(counter.innerText);
  const likes = document.querySelector(".likes");

  // Check if a like already exists for the current number
  const existingLike = Array.from(likes.children).find((like) => {
    return parseInt(like.dataset.num) === currentValue;
  });

  if (existingLike) {
    // Increment the like count
    const likeCount = parseInt(existingLike.children[0].innerText);
    existingLike.innerHTML = currentValue + " has been liked <span>" + (likeCount + 1) + "</span> times";
  } else {
    // Create a new like element
    const newLike = document.createElement("li");
    newLike.setAttribute("data-num", currentValue);
    newLike.innerHTML = currentValue + " has been liked <span>1</span> time";
    likes.appendChild(newLike);
  }
});

// Handle the pause button click event
const pauseButton = document.getElementById("pause");
pauseButton.addEventListener("click", () => {
  if (playing) {
    // Pause the timer
    playing = false;
    clearInterval(interval);
    pauseButton.innerText = "resume";
  } else {
    // Resume the timer
    playing = true;
    startTimer();
    pauseButton.innerText = "pause";
  }

  // Disable or enable all buttons except the pause button
  const buttons = Array.from(document.getElementsByTagName("button"));
  buttons.forEach((button) => {
    if (button.id !== "pause") {
      button.disabled = !playing;
    }
  });
});

// Handle the comment form submission
const commentForm = document.getElementsByTagName("form")[0];
commentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const commentInput = commentForm.children[0];
  const commentText = commentInput.value;
  commentInput.value = "";
  const comments = document.querySelector(".comments");
  const newComment = document.createElement("p");
  newComment.innerText = commentText;
  comments.appendChild(newComment);
});

// End of challenge.js
