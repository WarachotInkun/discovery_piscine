$(document).ready(function() {
  let ckies = document.cookie;
  let $list = $("#ft_list");
  console.log(ckies);
  if (ckies.length > 0) {
      let ckie = ckies.split(";");
      console.log(ckie.length);
      ckie.forEach((element) => {
          const newNode = $("<div></div>").addClass("todo");
          let hex = fromHex(element.split("=")[1]);
          newNode.html(hex);
          newNode.on("click", function() {
              let remove = confirm("Do you want to remove this to-do?");
              if (remove) {
                  newNode.remove();
                  console.log(element.split("=")[0]);
                  document.cookie = element.split("=")[0] + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
              }
          });
          $list.prepend(newNode);
      });
  }

  window.newTodo = function() {
      let todo = prompt("Create a new To-do");
      if (todo != null && todo != "") {
          let name = new Date().getTime();
          let hex = toHex(todo);
          console.log(hex);
          document.cookie = name + "=" + hex;
          const newNode = $("<div></div>").addClass("todo");
          newNode.html(todo);
          newNode.on("click", function() {
              let remove = confirm("Do you want to remove this to-do?");
              if (remove) {
                  newNode.remove();
                  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
              }
          });
          $list.prepend(newNode);
      }
  };

  function toHex(s) {
      let h = '';
      for (let i = 0; i < s.length; i++) {
          h += s.charCodeAt(i).toString(16) + '';
      }
      return h;
  }

  function fromHex(h) {
      let s = '';
      for (let i = 0; i < h.length; i += 2) {
          s += String.fromCharCode(parseInt(h[i] + h[i + 1], 16));
      }
      return s;
  }
});
