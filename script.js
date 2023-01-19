
//Function to toggle class of certain elements, applying
//different CSS styling depending on if in night or day mode.
let swap = document.getElementById("swap")

swap.addEventListener('click', () => {
  document.getElementById("header-banner").classList.toggle("dark-header")
  document.getElementById("stage").classList.toggle("dark-body");
  document.getElementById("swap").classList.toggle("toggle-dark");
})


//Function to add a li template based on info typed into
//input field at the top. Triggered by pressing 'Enter'
//Will not add li if field is blank.
let taskInput = document.getElementById("entry");
let incompleteTasks = document.getElementById("tasks")

var appendEntry = function (e) {
  let inputText = document.getElementById("entry").value;
  var linode = document.createElement("li");
  var liClass = document.querySelector('li');
  if (e.code == 'Enter' && inputText != '') {
    linode.innerHTML = `<input class="check circle" onclick="checkTag(this)" type="checkbox">
        <p class="todo-sample">${inputText}</p>
        <button class="delete"><img src="./images/icon-cross.svg"></button>`;
    incompleteTasks.appendChild(linode)
    linode.setAttribute("class", "todo-entry")
    document.getElementById("entry").value = "";
    randomFunction()
  }
}
taskInput.addEventListener('keypress', appendEntry);

//Function applied to 'ul' that targets X buttons
//Targetted element removes its parent node.
//This method chosen as it works with a dynamic list.
incompleteTasks.onclick = function(e) {
  let targetted = e.target.closest('button');  
  targetted.parentNode.remove();
  randomFunction()
}

//Filter buttons appearance, "active" filters will be colored blue
var tabLink = document.querySelectorAll('.filter'),
    tabPane = document.querySelectorAll('.tab-pane')

tabLink.forEach(function(item){
    item.addEventListener('click', function(){
        tabLink.forEach(function(item) {
          item.classList.remove('active')
        })
        item.classList.add('active')
    }, false)
})

//Actual Filter Functioniality

let showAll = document.getElementById("all")
let showActive = document.getElementById("active")
let showComplete = document.getElementById("complete")
let showList = document.getElementsByTagName("li") 
let checkedBox = document.querySelectorAll("check")
//Checking an individual list item will toggle the "complete" class
//Uncheck will remove the "complete" class
const checkTag = function(e) {
  e.parentNode.classList.toggle("complete");
  
}

//Sets all items in the list to be displayed
let displayAll = function() {
  for (var i = 0; i < showList.length; i++) {
    showList[i].classList.remove("hide")
  }
};

//Displays unchecked items and hides checked (completed) items
showActive.addEventListener ("click", function() {
  
  for (var i = 0; i <showList.length; i++) {
    showList[i].classList.remove("hide")
    if (showList[i].classList.contains("complete")) {
      showList[i].classList.add("hide")
    };
  }
})
//Displays checked items (completed) and hides unchecked items//
let displayComplete = function (e) {
   for (var i = 0; i < showList.length; i++) {
    var classCheck = showList[i]
    showList[i].classList.remove("hide")
    if (!classCheck.classList.contains("complete")){
      classCheck.classList.remove("hide")
      classCheck.classList.add("hide")
    }
   } 
}
var liList = document.getElementsByTagName("li")
var listCount = document.getElementById("remaining")
let randomFunction = function() {
//listCount.innerHTML = `${liList.length} items left`
let positive = liList.length;  
listCount.innerHTML = `${positive} items left`;
}

