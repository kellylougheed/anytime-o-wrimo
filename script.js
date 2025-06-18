let words = 0
let goal = 50000

let name = "Your Name"
let novel = "Your Novel Title"
let color = "darkgrey"

let input = document.querySelector("#updateBox")
let button = document.querySelector("#updateButton")

let goalInput = document.querySelector("#goalBox")
let goalButton = document.querySelector("#goalButton")

let nameInput = document.querySelector("#nameBox")
let nameButton = document.querySelector("#nameButton")

let novelInput = document.querySelector("#novelBox")
let novelButton = document.querySelector("#novelButton")

let colorInput = document.querySelector("#colorBox")
let colorButton = document.querySelector("#colorButton")

let div = document.querySelector(".progress")
let h2 = document.querySelector("h2")
let h3 = document.querySelector("h3")

if (localStorage.getItem('words')) {
  words = localStorage.getItem('words')
  words = parseInt(words)
  input.value = words
}
if (localStorage.getItem('goal')) {
  goal = localStorage.getItem('goal')
  goal = parseInt(goal)
  goalInput.value = goal
} else {
  goalInput.value = "50000"
}
if (localStorage.getItem('words') && localStorage.getItem('goal')) {
  updateWordCount(words, goal)
} else if (localStorage.getItem('words')) {
  updateWordCount(words, 50000)
}

if (localStorage.getItem('name')) {
  name = localStorage.getItem('name')
  nameInput.value = name
} else {
  nameInput.value = "Your Name"
}
if (localStorage.getItem('novel')) {
  novel = localStorage.getItem('novel')
  novelInput.value = novel
} else {
  novelInput.value = "Your Novel Title"
}
if (localStorage.getItem('name') && localStorage.getItem('novel')) {
  updateTitleAuthor(name, novel)
} else if (localStorage.getItem('name')) {
  updateTitleAuthor(name, "Your Novel Title")
} else if (localStorage.getItem('novel')) {
  updateTitleAuthor(name, "Your Name")
}

if (localStorage.getItem('color')) {
  color = localStorage.getItem('color')
  colorInput.value = color
  updateProgressBarColor(color)
} else {
  colorInput.value = "darkgrey"
}

button.addEventListener("click", e => {
  let wordCount = input.value
  words = parseInt(wordCount)
  localStorage.setItem('words', words.toString())
  updateWordCount(words, goal)
})

goalButton.addEventListener("click", e => {
  let goalCount = goalInput.value
  goal = parseInt(goalCount)
  localStorage.setItem('goal', goal.toString())
  updateWordCount(words, goal)
})

nameButton.addEventListener("click", e => {
  name = nameInput.value
  localStorage.setItem('name', name)
  updateTitleAuthor(name, novel)
})

novelButton.addEventListener("click", e => {
  novel = novelInput.value
  localStorage.setItem('novel', novel)
  updateTitleAuthor(name, novel)
})

colorButton.addEventListener("click", e => {
  color = colorInput.value
  localStorage.setItem('color', color)
  updateProgressBarColor(color)
})

function updateWordCount(words, goal) {
  h3.innerHTML = + words + " / " + goal + " words"
  let percentage = (words / goal) * 100
  console.log(percentage)
  div.innerHTML = `<div class="progress-bar" role="progressbar" style="width: ${percentage}%;" aria-valuenow="${percentage}" aria-valuemin="0" aria-valuemax="100">${percentage}%</div>`
}

function updateTitleAuthor(name, novel) {
  h2.innerHTML = novel + " by " + name
}

function updateProgressBarColor(color) {
  let bar = document.querySelector(".progress-bar")
  bar.style.backgroundColor = color
}
