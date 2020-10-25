let inputArea = document.getElementById("input-area");
let tweetBtn = document.getElementById("tweet-btn");
let timeline = document.getElementById("timeline");
let alertEmpty = document.getElementById("alert-empty");

let tweetArray = [];

tweetBtn.addEventListener("click", tweet);

function loadTweet() {
  timeline.innerHTML = tweetArray.map((tweet) => `<li>${tweet}</li>`);
}

function tweet() {
  let tweet = inputArea.value;

  if (tweet != "") {
    tweetArray.push(tweet);
    loadTweet();
  } else {
    alertEmpty.classList.remove("invisible");
  }

  inputArea.value = "";
  console.log(tweetArray);
}

// Psuedo code
