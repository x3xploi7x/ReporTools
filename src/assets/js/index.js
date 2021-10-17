class ReporTools extends HTMLElement {
    constructor() {}

    message(title, content) {
        const parent = document.getElementById("container__modal");
            parent.innerHTML = `<div id="modal__popup" class="modal:alert background:white">
                                    <div class="content:title">
                                        <h1 id="letter__header" class="letter:large color:grey font:transform-upper"></h1>
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
            parent.getElementById("modal__container");
        }, false);
    }

    loader(action) {
        const parent = document.getElementById("container__modal");
        action = typeof(action) === "string" ? String(action) : Object(action);

        switch(action) {
            case "on":
                mirror.classList.add("display:block");
                mirror.innerHTML = `<div id="modal__loader" class="spinner:dashed"></div>`;
                break;
            
            case "off":
                mirror.classList.remove("display:block");
                mirror.getElementById("modal__loader").remove();
                break;
        }
    }
}