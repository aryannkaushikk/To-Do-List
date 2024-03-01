const add = document.getElementById("add");
const inp = document.getElementById("txt");
add.addEventListener("click",()=>{
    var txt = inp.value;
    taskcreate(txt);
    inp.value = "";
})


function taskcreate(input){
    var task = document.createElement("div");
    var cont = document.createElement("p");
    var but = document.createElement("button");
    var ic = document.createElement("i");
    task.setAttribute("class", "item");
    but.setAttribute("class","del");
    ic.setAttribute("class", "material-icons");
    cont.textContent = input;
    ic.textContent = "delete";
    task.appendChild(cont);
    task.appendChild(but);
    but.appendChild(ic);
    document.getElementById("list").appendChild(task);
    but.addEventListener("click",()=>{
        but.parentNode.remove();
    })
}