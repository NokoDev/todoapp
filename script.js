const welcome = document.getElementById("welcome")

setTimeout(()=>{
    
welcome.style.display = none;
},5)

const list = document.getElementById("list");

const list_item = document.createElement("li");
// list_item.innerHTML = "Run";
// list_item.setAttribute("key", Math.random() * 100);

// list.appendChild(list_item);

const newDo = document.getElementById("new_do");

const add = document.getElementById("adding");

add.addEventListener("click", () => {
  console.log(newDo.value);
  if (newDo.value.length >= 1) {
    const addNewToDo = document.createElement("li");
    console.log(addNewToDo);
    addNewToDo.innerHTML = newDo.value;
    addNewToDo.setAttribute("key", Math.random() * 200);
    list.appendChild(addNewToDo);
    console.log("reached");
  }
  newDo.value = "";
});

list.addEventListener("dblclick", (e)=>{
    // alert("Are you sure you completed this item?")
    e.target.remove()
})

const mark = document.getElementById("import")

mark.addEventListener("click", (e) => {

  console.log("clicked marked")
  e.stopPropagation()
})

// const li_s = document.querySelectorAll("li")

// for(item of li_s){
//     item.addEventListener("click", (e)=>{
//         // e.stopPropagation()
//         // e.preventDefault()
//         // item.remove()
//         console.log(e)
//     })
// }

// li_s[0].addEventListener("click", ()=>{
//     console.log("clicked")
// })

