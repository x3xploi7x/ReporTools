//----------------------------------------------------------------------------------------------------//
//                                      Name : ReporTools 
//                                      Version : 1.3
//                                      Author : x3ploi7x 
//----------------------------------------------------------------------------------------------------//
!(function(global, factory){
    if(typeof exports === 'object' && typeof module !== 'object') module.exports = factory();
    else if(typeof define === 'function' && define.amd) define(factory);
    else (global = global || self, global.$ = factory())

}(this, function($){
    'use strict';
    
    var __win__ = window;
    var __doc__ = document;
    var __body__ = __doc__.body;

    const __version__ = '1.3.0';
    const __author__ = 'x3ploi7x';
    const __compile__ = true;
    const __debbug__ = !(__compile__);
    const __agent__ = __win__.navigator.userAgent;
    const __storage__ = __win__.localStorage;


    $ = (function() {
        var options = {};

            /**
             * @param {Function} -> onCreateElement 
             * @param {Description} -> create element if not exist's and append in parent selector 
             */
            options.onCreateElement = function(props={parent, target, id, classes, type}) {
                var parent;
                var element;
                var aux = [];

                for(var i = 0; i <= Object.keys(props).length - 1; i++) {
                    aux.push(Object.values(props)[i]);
                }

                parent = __doc__.querySelector(aux[0]);
                element = __doc__.createElement(aux[1]); 
                element.setAttribute('id', aux[2]);
                element.setAttribute('class', aux[3]);

                if(element.nodeName === 'INPUT' || element.nodeName === 'BUTTON') {
                    element.setAttribute('type', aux[4]);
                } else {
                    delete Object.keys(props)[5]; // remove attr not used in production
                }

                parent.appendChild(element);

                return element;
            }

            /**
             * @param {Function} -> showMessage 
             * @param {Description} -> deploy pop-up message to - result's, error's, data 
             */
            options.showMessage = function(props={title, content}) {
                options.onCreateElement({
                    parent: '#container',
                    target: 'div',
                    id: 'container__modal',
                    classes: 'group:mirror display:block'
                });

                __doc__.getElementById('container__modal').innerHTML = `<div id="modal__popup" class="modal:alert background:white font:family-lucida">
                                                                            <div class="content:title">
                                                                                <h1 id="letter__header" class="letter:medium color:grey-dark font:weight-bold font:transform-upper"></h1>
                                                                            </div>
                                                                            <div class="divider:x"></div>
                                                                            <div class="content:message padding:100%">
                                                                                <p id="letter__message" class="color:grey font:weight-bold"></p>
                                                                            </div>
                                                                            <div class="content:options">
                                                                                <button id="button__notify" class="button:small background:blue color:white" onclick="return false;">Continuar</button>
                                                                            </div>
                                                                        </div>`;

                for(var i = 0; i <= Object.keys(props).length - 1; i++) {
                    __doc__.getElementById("letter__header").innerText = Object.values(props)[0];
                    __doc__.getElementById("letter__message").innerText = Object.values(props)[1];
                }
        
                __doc__.getElementById("button__notify").addEventListener("click", function(){
                    __doc__.getElementById("container__modal").remove(__body__); // change with toggleClass function
                }, false);
            }
            
            /**
             * @param {Function} -> showForm 
             * @param {Description} -> deploy and append element data refered in pop-up 
             */
            options.showForm = function(title, props={id, classes, type, data}) {
                options.onCreateElement({
                    parent: '#container',
                    target: 'div',
                    id: 'container__modal',
                    classes: 'group:mirror display:block'
                });

                __doc__.getElementById('container__modal').innerHTML = `<div id="modal__popup" class="modal:form background:white font:family-lucida">
                                                                            <div id="div__main" class="content:main padding:y-50% direction:center">
                                                                                <span id="text__reference" class="letter:small color:grey-dark font:weight-bold"></span>
                                                                            </div>
                                                                            <div id="div__footer" class="content:footer direction:center">
                                                                                <button id="button__notify" class="button:small margin:x-75% background:red color:white" type="button">Continuar</button>
                                                                            </div>
                                                                        </div>`;
                
                var element;

                for(var i = 0; i <= Object.keys(props).length - 1; i++) {
                    if(element.nodeName == 'INPUT' || element.nodeName == 'BUTTON') {
                        delete Object.keys(props)[2];
                    }

                    //element.setAttribute(Object.keys(props)[i], Object.values(props)[i]);
                }

                __doc__.getElementById("text__reference").innerText = title;
                __doc__.getElementById("button__notify").addEventListener("click", function(){
                    __doc__.getElementById("container__modal").remove(__body__);
                }, false);
            }
            
            /**
             * @param {Function} -> showNotify 
             * @param {Description} -> deploy notify's with product data info 
             */
            options.showNotify = function(content) {
                options.onCreateElement({
                    parent: '#container',
                    target: 'div',
                    id: 'container__modal',
                    classes: 'group:mirror display:block'
                });

                __doc__.getElementById("container__modal").innerHTML = `<div class="modal:notify font:family-monaco>"
                                                                            <div class="content:message padding:50%">
                                                                                <span id="text__message" class="letter:small color:grey-dark direction:start font:weight-bold"></span>
                                                                            </div>
                                                                        </div>`;
                __doc__.getElementById("text__message").innerText = content;
                
                setTimeout(function() {
                    __doc__.getElementById("container__modal").remove(__body__);
                }, 1000);
            }
        
            options.showLoader = function(action, props={color, time}) {
                options.onCreateElement({
                    parent: '#container',
                    target: 'div',
                    id: 'container__modal',
                    classes: 'group:mirror display:block'
                });
                
                action = typeof action === 'string' ? String(action) : Object(action);
                
                switch(action) { 
                    case "on":
                        for(var i = 0; i <= Object.keys(props).length - 1; i++) {
                            __doc__.getElementById("container__modal").innerHTML = `<div id="spinner" class="spinner:dotted spinner:${Object.values(props)[0]} display:block"></div>`;
                            
                            setTimeout(function() {
                                __doc__.getElementById("spinner").remove(__doc__.getElementById("container__modal")); // change with toggleClass function
                            }, Object.values(props)[1]);
                        }
                    break;
                    
                    case "off":
                        __doc__.getElementById("spinner").remove(__doc__.getElementById("container__modal"));
                    break;
                }
        
                //__doc__.getElementById("container__modal").remove(__body__);
            }

            options.setCard = function(options={title, img, description}) { // modify
                `<div class="card:expand card:hover background:grey-light font:family-verdana direction:center">
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
                </div>`
            }
        
            options.toggleClass = function(selector, props={remove, add}) {
                var element = __doc__.querySelector(selector);
                var aux = [];
                
                for(var i = 0; i <= Object.keys(props).length - 1; i++) {
                    aux.push(Object.values(props)[i]);
                }

                element.classList.remove(aux[0]);
                element.classList.add(aux[1]);
            }
        
            options.setDate = function(selector, period) {
                var parent = __doc__.querySelector(selector);
                
                const day = 0;
                const month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
                const year = [2015, 2016, 2017, 2018, 2019, 2020, 2021];
        
        
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

        return options;
    });
   
    //----------------------------------------------------------------------------------------------------//
    if(typeof $ === "function") return $();
    else if(__version__ <= '1.0') throw(`This Version Not Compatible:${__version__}, by:${__author__}`); 
    else throw(`This Version Not Support With navigator:${__agent__}, by:${__author__}`);
    //----------------------------------------------------------------------------------------------------//
}));
