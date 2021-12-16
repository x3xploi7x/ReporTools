//----------------------------------------------------------------------------------------------------//
//                                      Name : ReporTools                                             //
//                                      Version : 1.3                                                 //
//                                      Author : x3ploi7x                                             //
//----------------------------------------------------------------------------------------------------//
!(function(global, factory){
    if(typeof exports === 'object' && typeof module !== 'object') module.exports = factory();
    else if(typeof define === 'function' && define.amd) define(factory);
    else (global = global || self, global._ = factory())
}(this, (function(_){
    'use strict';
    
    var win = window; // Priority
    var doc = document; // Priority
    var body = doc.body; // Priority
    var self = this;
    var options = {};

    const VERSION = '1.3.0';
    const AUTHOR = 'x3ploi7x';
    const COMPILE = true;
    const DEBBUG = !(COMPILE);
    const AGENT = win.navigator.userAgent;
    const STORAGE = win.localStorage; // Default Null
    
    _ = (function() {
        return options = {
            /**
            * @param {Function} -> addClass 
            * @param {Description} -> Add Class In Element's Refered 
            */
            addClass: function(element, classes) {
                const temp = doc.querySelectorAll(element);
                
                var str = '';
                //var aux = [];

                for(let i = 0; i <= classes.length - 1; i++) {
                    str += classes[i];
                }

                for(var j = 0; j <= temp.length; j++) {
                    try {
                        temp[j].classList.add(str);
                    } catch(exception) {
                        //console.log(exception.innerText);
                    }
                }
            },

            /**
            * @param {Function} -> addClass 
            * @param {Description} -> Add Class In Element's Refered 
            */
            removeClass: function(selector, classes) {
                var temp = doc.querySelectorAll(selector);

                for(let i = 0; i <= temp.length - 1; i++) {
                    temp[i].classList.remove(classes);
                }
            },

            /**
            * @param {Function} -> toggleClass 
            * @param {Description} -> Change Classes To Most Important First 
            */
            toggleClass: function(selector, props={remove, add}) {
                var element = doc.querySelector(selector);
                var aux = [];
                
                for(let i = 0; i <= Object.keys(props).length - 1; i++) {
                    aux.push(Object.values(props)[i]);
                }

                element.classList.remove(aux[0]);
                element.classList.add(aux[1]);
            },

            /**
            * @param {Function} -> DestroyElement 
            * @param {Description} -> Destroy Element With Not Used In DOM 
            */
            empty: function (selector) {
                const parent = document.querySelector(selector);
                var childs;

                if(parent.childNodes.length > 0) {
                    for(let i = 0; i <= parent.childNodes.length; i++) {
                        childs = parent.childNodes[i];
                    }

                    parent.remove(childs);
                }
            },
    
            /**
            * @param {Function} -> createElement 
            * @param {Description} -> Create Element If Not Exist's And Append In Parent Selector 
            */
            onCreateElement: function(props={parent, target, id, classes, type}) {
                var parent;
                var element;
                var aux = [];

                for(let i = 0; i <= Object.keys(props).length - 1; i++) {
                    aux.push(Object.values(props)[i]);
                }

                parent = doc.querySelector(aux[0]);

                if(!doc.getElementById(aux[2])) { // If not exists in DOM
                    element = doc.createElement(aux[1]);
                    element.setAttribute('id', aux[2]);
                    element.setAttribute('class', aux[3]);
    
                    if(element.nodeName === 'INPUT' || element.nodeName === 'BUTTON') {
                        element.setAttribute('type', aux[4]);
                    } else {
                        delete Object.keys(props)[5]; // Remove Attr Not Used In Production
                    }

                    parent.appendChild(element);
                }

                return element;
            },

            /**
            * @param {Function} -> showMessage 
            * @param {Description} -> Deploy Pop-Up Message To - Result's, Error's, Data 
            */
            showMessage: function(props={title, content}) {
                // View State Modal
                options.onCreateElement({
                    parent: '#container',
                    target: 'div',
                    id: 'container__modal',
                    classes: 'group:mirror display:block'
                });

                const parent = doc.getElementById('container__modal');
                parent.innerHTML = `
                    <div id="modal__popup" class="modal:alert background:white font:family-lucida">
                        <div class="content:title">
                            <h1 id="letter__header" class="letter:medium color:grey-dark font:weight-bold font:transform-upper"></h1>
                        </div>
                        <div class="divider:x">
                        </div>
                        <div class="content:message padding:100%">
                            <p id="letter__message" class="color:grey font:weight-bold"></p>
                        </div>
                        <div class="content:options">
                            <button id="button__notify" class="button:small background:blue color:white" type="button" onclick="return false;">Continuar</button>
                        </div>
                    </div>
                `;

                for(let i = 0; i <= Object.keys(props).length - 1; i++) {
                    doc.getElementById("letter__header").innerText = Object.values(props)[0];
                    doc.getElementById("letter__message").innerText = Object.values(props)[1];
                }
        
                doc.getElementById("button__notify").addEventListener("click", function(){
                    parent.remove(body); // Change With ToggleClass Function
                }, false);
            },
            
            /**
            * @param {Function} -> showForm 
            * @param {Description} -> Deploy & Append Element Data Refered In Pop-Up 
            */
             showForm: function(title, props={id, classes, type, data}) {
                // View State Modal
                options.onCreateElement({
                    parent: '#container',
                    target: 'div',
                    id: 'container__modal',
                    classes: 'group:mirror display:block'
                });

                const parent = doc.getElementById('container__modal');
                parent.innerHTML = `
                    <div id="modal__popup" class="modal:form background:white font:family-lucida">
                        <div id="div__main" class="content:main padding:y-50% direction:center">
                            <span id="text__reference" class="letter:small color:grey-dark font:weight-bold"></span>
                        </div>
                        <div id="div__footer" class="content:footer direction:center">
                            <button id="button__notify" class="button:small margin:x-75% background:red color:white" type="button">Continuar</button>
                        </div>
                    </div>
                `;
                
                var element;

                for(let i = 0; i <= Object.keys(props).length - 1; i++) {
                    if(element.nodeName === 'INPUT' || element.nodeName === 'BUTTON') {
                        delete Object.keys(props)[2];
                    }
                }

                doc.getElementById("text__reference").innerText = title;
                doc.getElementById("button__notify").addEventListener("click", function(){
                    parent.remove(body);
                }, false);
            },
            
            /**
            * @param {Function} -> showNotify 
            * @param {Description} -> Deploy Notify's With Product Data Info 
            */
             showNotify: function(content) {
                // View State Modal 
                options.onCreateElement({
                    parent: '#container',
                    target: 'div',
                    id: 'container__modal',
                    classes: 'group:mirror display:block'
                });

                const parent = doc.getElementById("container__modal");
                parent.innerHTML = `
                    <div class="modal:notify font:family-monaco>"
                        <div class="content:message padding:50%">
                            <span id="text__message" class="letter:small color:grey-dark direction:start font:weight-bold"></span>
                        </div>
                    </div>
                `;
                doc.getElementById("text__message").innerText = content;
                
                setTimeout(function() {
                    parent.remove(body);
                }, 1000); // Static Time Not Change
            },
            
            /**
            * @param {Function} -> showLoader 
            * @param {Description} -> Deploy Spinner To Charge Info 
            */
            showLoader: function(props={color, time, state}) {
                // View State Modal
                options.onCreateElement({
                    parent: '#container',
                    target: 'div',
                    id: 'container__modal',
                    classes: 'group:mirror display:block'
                });

                var aux = [];
                
                const parent = doc.getElementById('container__modal');
                parent.innerHTML = `
                    <div id="spinner" class="spinner:dotted">
                    </div>
                `;
                
                for(let i = 0; i <= Object.keys(props).length - 1; i++) {
                    aux.push(Object.values(props)[i]);
                }

                doc.getElementById('spinner').classList.add(`spinner:${aux[0]}`);
                
                if(aux[1] == 0 || typeof(aux[1]) === 'undefined') {
                    var step = aux[2];

                    switch(step) {
                        case 'on': // Replace With onDestroyElement
                            options.removeClass('#spinner', 'display');
                            break;

                        case 'off':
                            options.addClass('#spinner', 'display');
                            parent.remove(body);
                            break;
                    }
                } else {
                    setTimeout(function() {
                        parent.remove(body);
                    }, aux[1]);
                }
            },
            
            /**
            * @param {Function} -> setCard 
            * @param {Description} -> Create Card To Show Importance Information 
            */
            setCard: function(selector, props={title, img, description}) { // Modify
                document.querySelector(selector).innerHTML = `
                    <div class="card:expand card:hover background:grey-light font:family-verdana direction:center">
                        <ul class="list:portrait">
                            <li class="list:item">
                                <h1 class="letter:large font:weight-bold">Lorem</h1>
                            </li>
                            <li class="list:item">
                                <img class="image:large" src="src/util/assets/img/things/DOCS_REFERENCE.png">
                            </li>
                            <li class="list:item">
                                <p class="letter:small">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint repudiandae ipsa quisquam labore laudantium. Beatae sequi laborum quos aliquam nobis, eos, nostrum sunt magni id ratione incidunt fugit maxime dignissimos.</p>
                            </li>
                        </ul>
                    </div>
                `;
            },

            /**
            * @param {Function} -> setDate 
            * @param {Description} -> Get DateTime [day's, month's, year's] To Charge In Element's 
            */
            setDate: function(selector, period) {
                var parent = doc.querySelector(selector);
                
                const day = 0;
                const month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
                const year = [2015, 2016, 2017, 2018, 2019, 2020, 2021];
        
                switch(period) {
                    case "day":
                        for(let i = 1; i < 32; i++) {
                            let count = i < 10 ? "0" + i : i;
                            parent.innerHTML += `<option id=item__${count} class="option:item" value=${count}>${day[i]}</option>`;
                        }
                    break;
        
                    case "month":
                        for(let i = 0; i <= month.length - 1; i++) {
                            let count = i < 9 ? "0" + (i + 1) : i + 1; 
                            parent.innerHTML += `<option id=item__${i+1} class="option:item" value=${count}>${month[i]}</option>`;
                        }
                    break;
        
                    case "year":
                        for(let i = 0; i <= year.length - 1; i++) {
                            parent.innerHTML += `<option id=item__${i} class="option:item" value=${i+1}>${year[i]}</option>`;
                        }
                    break;
                }
            }
        };
    });
   
    //----------------------------------------------------------------------------------------------------//
    if(typeof _ === "function") return _();
    else if(VERSION <= '1.0') throw(`This Version Not Compatible:${VERSION}, by:${AUTHOR}`); 
    else throw(`This Version Not Support With navigator:${AGENT}, by:${AUTHOR}`);
    //----------------------------------------------------------------------------------------------------//
})));
