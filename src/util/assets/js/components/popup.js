export default class PopUp {
    message(title, content) {
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
        
        parent.classList.add("display:block");
        parent.innerHTML = `<div id="modal__popup" class="modal:alert background:white font:family-lucida">
                            <div class="content:title">
                                <h1 id="letter__header" class="letter:medium color:grey-dark font:weight-bold font:transform-upper"></h1>
                            </div>
                            <div class="divider:x"></div>
                            <div class="content:message padding:100%">
                                <p id="letter__message" class="color:grey font:weight-bold"></p>
                            </div>
                            <div class="content:options">
                                <button id="button__notify" class="button:extra-small background:blue color:white" onclick="return false;">Continuar</button>
                            </div>
                        </div>`;

        document.getElementById("letter__header").innerText = title;
        document.getElementById("letter__message").innerText = content;
        document.getElementById("button__notify").addEventListener("click", function(){
            parent.classList.remove("display:block");
            parent.innerHTML = '';
        }, false);
    }
}
