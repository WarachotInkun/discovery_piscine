let ckies = document.cookie;
let list = document.getElementById("ft_list");
console.log(ckies);
if (ckies.length > 0) {
  let ckie = ckies.split(";");
  console.log(ckie.length);
  ckie.forEach((element) => {
    const newNode = document.createElement("div");
    newNode.classList.add("todo");
    let hex = fromHex(element.split("=")[1]);
    newNode.innerHTML = hex
    newNode.onclick = () => {
      let remove = confirm("Do you want to remove this to-do?");
      if (remove) {
        newNode.remove();
        console.log(element.split("=")[0]);
        document.cookie = element.split("=")[0] + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
      }
    };
    list.prepend(newNode);
  });
}

const newTodo=()=> {
  let todo = prompt("Create a new To-do");
  if (todo != null && todo != "") {
    let name = new Date().getTime();
    let hex = toHex(todo);
    console.log(hex); 
    document.cookie = name + "=" + hex;
    const newNode = document.createElement("div");
    newNode.classList.add("todo");
    newNode.innerHTML = todo;
    newNode.onclick = () => {
      let remove = confirm("Do you want to remove this to-do?");
      if (remove) {
        newNode.remove();
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
      }
    };
    list.prepend(newNode);
  }
}

function toHex(s){
    let h =''
    for (let i=0; i<s.length; i++){
        h += s.charCodeAt(i).toString(16) +''
    }
    return h
}
function fromHex(h){
    let s = ''
    for (let i=0; i<h.length; i+=2){
        s += String.fromCharCode(parseInt(h[i] + h[i+1], 16))
    }
    return s
}