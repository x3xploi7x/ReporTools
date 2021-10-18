class Spinner {
    super();
    
    loader(action) {
        const parent = document.getElementById("container__modal");
        action = typeof(action) === "string" ? String(action) : Object(action);

        switch(action) {
            case "on":
                parent.classList.add("display:block");
                parent.innerHTML = `<div id="modal__loader" class="spinner:dashed"></div>`;
                break;
            
            case "off":
                parent.classList.remove("display:block");
                parent.innerHTML = '';
                break;
        }
    }
}