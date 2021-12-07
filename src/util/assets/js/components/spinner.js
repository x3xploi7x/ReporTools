export default class Spinner {
    loader(action, color) {
        const parent = document.getElementById("container__modal");
        var child;

        if(!document.getElementById(parent).length) {
            const modal = document.createElement("div");
                  modal.setAttribute("id", "container__modal");
                  modal.setAttribute("class", "group:mirror");
            child = modal;
        } else {
            modal = document.querySelector("group:mirror");
            child = modal;
        }
    
        document.getElementById(parent).appendChild(child);
        action = typeof(action) === "string" ? String(action) : Object(action);

        switch(action) {
            case "on":
                parent.classList.add("display:block");
                parent.innerHTML = `<div id="modal__loader" class="spinner:dotted spinner:red"></div>`;
                break;
            
            case "off":
                color = undefined;
                parent.classList.remove("display:block");
                parent.innerHTML = '';
                break;
        }
    }
}
