/* Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/> Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed. */

/**
 * @parameter <string> Name
 */

 class ReporTools {
    constructor(parent) {
        this.child;

        if(!document.getElementById(parent).length) {
            this.modal = document.createElement("div");
            this.modal.setAttribute("id", "container__modal");
            this.modal.setAttribute("class", "section:mirror");
            this.child = this.modal;
        } else {
            this.modal = document.querySelector("section:mirror");
            this.child = this.modal;
        }
        
        this.parent = parent;

        document.getElementById(this.parent).appendChild(this.child);
    }

    message(title, content) {
        const parent = document.getElementById("container__modal");
              parent.classList.add("display:block");
              parent.innerHTML = `<div id="modal__popup" class="modal:alert background:white font:family-apple">
                                    <div class="content:title">
                                        <h1 id="letter__header" class="letter:medium color:grey font:transform-upper"></h1>
                                    </div>
                                    <div class="content:message">
                                        <p id="letter__message" class="color:grey-dark"></p>
                                    </div>
                                    <div class="content:options">
                                        <button id="button__notify" class="button:small button:hover background:blue color:white">Continuar</button>
                                    </div>
                                </div>`;

        document.getElementById("letter__header").innerText = title;
        document.getElementById("letter__message").innerText = content;
        document.getElementById("button__notify").addEventListener("click", function(){
            parent.classList.remove("display:block");
            parent.innerHTML = '';
        }, false);
    }

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