const add = document.getElementById("add");
const inp = document.getElementById("txt");

add.addEventListener("click",()=>{
    if(inp.value!=""){
        taskcreate(inp.value);
        inp.value = "";
    }
})

document.addEventListener("keypress", event=>{
    if(event.key=="Enter"){
        if (inp.value!=""){
            taskcreate(inp.value);
            inp.value = "";
        }
    }
})


function taskcreate(input){
    
    var task = document.createElement("div");
    var cont = document.createElement("p");
    var but = document.createElement("button");
    var ic = document.createElement("i");
    var chk = document.createElement("input");
    
    task.setAttribute("class", "item");
    but.setAttribute("class","del");
    ic.setAttribute("class", "material-icons");
    chk.setAttribute("type", "checkbox");
    chk.setAttribute("name", "done");
    chk.setAttribute("id", "done");
    
    cont.textContent = input;
    ic.textContent = "delete";
    
    task.appendChild(chk);
    task.appendChild(cont);
    task.appendChild(but);
    but.appendChild(ic);
    document.getElementById("list").appendChild(task);
    
    but.addEventListener("click",()=>{
        but.parentNode.remove();
    })

    chk.addEventListener("change",()=>{
        if (cont.getAttribute("style")==null){
            cont.setAttribute("style", "text-decoration: line-through;");
        }
        else{
            cont.removeAttribute("style");
        }
        
    })
}

