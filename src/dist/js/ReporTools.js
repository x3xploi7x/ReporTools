/**
 * @param {Class} => ReporTools
 * @param {Descripton} => main class to ReporTools project 
 */

 class ReporTools {
    constructor(parent) {
        this.child;

        if(!document.getElementById(parent).length) {
            this.modal = document.createElement("div");
            this.modal.setAttribute("id", "container__modal");
            this.modal.setAttribute("class", "group:mirror");
            this.child = this.modal;
        } else {
            this.modal = document.querySelector("group:mirror");
            this.child = this.modal;
        }
        
        this.parent = parent;

        document.getElementById(this.parent).appendChild(this.child);
    }

    /**
     * @param {Function} => message
     * @param {Description} => create modal popup show information
     */
    message(title, content) {
        const parent = document.getElementById("container__modal");
              parent.classList.add("display:block");
              parent.innerHTML = `<div id="modal__popup" class="modal:alert background:white font:family-lucida">
                                    <div id="div__header" class="content:title">
                                        <h1 id="letter__header" class="letter:medium color:grey-dark font:weight-bold font:transform-upper"></h1>
                                    </div>
                                    <div id="div__separator" class="divider:x"></div>
                                    <div id="div__main" class="content:message padding:100%">
                                        <p id="letter__message" class="color:grey font:weight-bold"></p>
                                    </div>
                                    <div id="div__footer" class="content:options">
                                        <button id="button__notify" class="button:small background:blue color:white" type="button">Continuar</button>
                                    </div>
                                </div>`;

        document.getElementById("letter__header").innerText = title;
        document.getElementById("letter__message").innerText = content;
        document.getElementById("button__notify").addEventListener("click", function(){
            parent.classList.remove("display:block");
            parent.innerHTML = '';
        }, false);
    }

    /**
     * @param {Function} => form
     * @param {Description} => create modal popup add element in parent selector
     */
    form(element, reference, options) {
        const parent = document.getElementById("container__modal");
              parent.classList.add("display:block");
              parent.innerHTML = `<div id="modal__popup" class="modal:form background:white font:family-lucida">
                                    <div id="div__main" class="content:main padding:y-50% direction:center">
                                        <span id="text__reference" class="letter:small color:grey-dark font:weight-bold"></span>
                                    </div>
                                    <div id="div__footer" class="content:footer direction:center">
                                        <button id="button__notify" class="button:small margin:x-75% background:red color:white" type="button">Continuar</button>
                                    </div>
                                </div>`;
        const child = document.createElement(element);
        
        for(var i = 0; i <= Object.keys(options).length - 1; i++) {
            child.setAttribute(Object.keys(options)[i], Object.values(options)[i]);
        }

        document.getElementById("div__main").appendChild(child);
        document.getElementById("text__reference").innerText = reference;
        document.getElementById("button__notify").addEventListener("click", function(){
            parent.classList.remove("display:block");
            parent.innerHTML = '';
        }, false);
    }

    /**
     * @param {Function} => loader
     * @param {Description} => add spinner to load data or show information
     */
    loader(action, color) {
        const parent = document.getElementById("container__modal");
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

    /**
     * @param {Function} => toogle
     * @param {Description} => change class or id name
     */
    toggle(selector, options={}) {
        const parent = document.querySelector(selector);
        options = {}
    }

    /**
     * @param {Function} => date
     * @param {Description} => add datetime in selector component
     */
    date(selector, period) {
        const day = 0;
        const month = [
            "Enero", 
            "Febrero", 
            "Marzo", 
            "Abril", 
            "Mayo", 
            "Junio", 
            "Julio", 
            "Agosto", 
            "Septiembre", 
            "Octubre", 
            "Noviembre", 
            "Diciembre"
        ];
        const year = [
            2015, 
            2016, 
            2017, 
            2018, 
            2019, 
            2020, 
            2021
        ];

        var parent = document.querySelector(selector);

        switch(period) {
            case "day":
                for(var i = 1; i < 32; i++) {
                    let count = i < 10 ? "0" + i : i;
                    parent.innerHTML += `<option id=item__${count} class="option:item" value=${count}>${day[i]}</option>`;
                }
                break;

            case "month":
                for(var i = 0; i <= month.length - 1; i++) {
                    let count = i < 9 ? "0" + (i + 1) : i + 1; 
                    parent.innerHTML += `<option id=item__${i+1} class="option:item" value=${count}>${month[i]}</option>`;
                }
                break;

            case "year":
                for(var i = 0; i <= year.length - 1; i++) {
                    parent.innerHTML += `<option id=item__${i} class="option:item" value=${i+1}>${year[i]}</option>`;
                }
            break;
        }
    }
}
