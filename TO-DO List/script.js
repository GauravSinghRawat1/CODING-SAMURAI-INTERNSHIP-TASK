const inputbox = document.getElementById("inputbox");
const listContainer = document.getElementById("listContainer");
document.getElementById('inputbox').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      document.getElementById('submitbutton').click();
    }
  });
document.addEventListener('DOMContentLoaded',()=>{
    showtask();
})

function addTask(){
    if(inputbox.value===""){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        let textarea = document.createElement("p");
        textarea.textContent = inputbox.value;
        listContainer.appendChild(li);
        li.appendChild(textarea); 
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value="";
    savedata();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);
document.getElementById("showall").addEventListener("click", function () {
    document.querySelectorAll("#listContainer li").forEach(item => {
        item.style.display = "block"; 
    });
});

document.getElementById("Unfinished").addEventListener("click", function () {
    document.querySelectorAll("#listContainer li").forEach(item => {
        if(item.classList.contains("checked")){
            item.style.display = "none";
        }
        else{
            item.style.display = "block";
        }
    });
});

document.getElementById("Finished").addEventListener("click", function () {
    document.querySelectorAll("#listContainer li").forEach(item => {
        if(item.classList.contains("checked")){
            item.style.display = "block";
        }
        else{
            item.style.display = "none";
        }    });
});
const buttons = document.querySelector(".buttons");
const children = buttons.children;

function removeHighlights() {
  Array.from(children).forEach(btn => btn.classList.remove("highlight"));
}


Array.from(children).forEach(btn => {
  btn.addEventListener("click", function() {
    removeHighlights();
    this.classList.add("highlight");
  });
});
document.addEventListener('DOMContentLoaded',()=>{
    window.onload = function(){
        document.getElementById("showall").click();
    };
});
function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showtask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
