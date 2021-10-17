class PopUp {
    super();

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
                                        <input id="button__notify" class="button:small button:hover background:blue color:white" type="button" value="Continuar">
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