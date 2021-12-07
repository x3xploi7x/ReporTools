/** 
    * Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/> Everyone is permitted to 
    * copy and distribute verbatim copies of this 
    * license document, but changing it is not allowed.
*/
!(function(global, factory){
    if(typeof exports === 'object' && typeof module !== 'object') module.exports = factory();
    else if(typeof define === 'function' && define.amd) define(factory);
    else (global = global || self, global.$ = factory())

}(this, function($){
    'use strict';

    //----------------------------------------------------------------------------------------------------//
    const __version__ = '1.3.0';
    const __author__ = 'x3ploi7x';
    const __compile__ = true;
    const __agent__ = window.navigator.userAgent;
    const __storage__ = window.localStorage;
    //----------------------------------------------------------------------------------------------------//

    $ = (function() {
        var __options__ = {};
            __options__.showMessage = function(title, content) {
                var parent = document.createElement("div");
                    parent.setAttribute("id", "container__modal");
                    parent.setAttribute("class", "group:mirror");
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
                    document.getElementById("app__container").removeChild(parent);
                }, false);
            }
            
            __options__.showForm = function(element, reference, options={id: "", class: "", type:"", data: ""}) {
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
                parent.innerHTML = `<div id="modal__popup" class="modal:form background:white font:family-lucida">
                                    <div id="div__main" class="content:main padding:y-50% direction:center">
                                        <span id="text__reference" class="letter:small color:grey-dark font:weight-bold"></span>
                                    </div>
                                    <div id="div__footer" class="content:footer direction:center">
                                        <button id="button__notify" class="button:small margin:x-75% background:red color:white" type="button">Continuar</button>
                                    </div>
                                </div>`;
                const aux = document.createElement(element);
                
                for(var i = 0; i <= Object.keys(options).length - 1; i++) {
                    aux.setAttribute(Object.keys(options)[i], Object.values(options)[i]);
                    
                }
                    
                //let temp = options.id;
                //console.log(temp);
        
                //document.getElementById(temp).innerHTML = options.data;
                document.getElementById("div__main").appendChild(aux);
                document.getElementById("text__reference").innerText = reference;
                document.getElementById("button__notify").addEventListener("click", function(){
                    parent.classList.remove("display:block");
                    parent.innerHTML = '';
                }, false);
            }
        
            __options__.showNotify = function(content) {
                const parent = document.getElementById("container__modal");
                    parent.classList.add("display:block");
                    parent.innerHTML = `<div class="modal:notify font:family-monaco>"
                                            <div class="content:message padding:50%">
                                                <span id="text__message" class="letter:small color:grey-dark direction:start font:weight-bold"></span>
                                            </div>
                                        </div>`;
        
                document.getElementById("text__message").innerText = content;
                setTimeout(function() {
                    parent.classList.remove("display:block");
                    parent.innerHTML = '';
                }, 1500);
            }
        
            __options__.showLoader = function(action, options={color: "", time: ""}) {
                var parent = document.createElement("div");
                    parent.setAttribute("id", "container__modal");
                    parent.setAttribute("class", "group:mirror");
                var child = document.createElement("div");
                
                action = typeof(action) === "string" ? String(action) : Object(action);
        
                switch(action) {
                    case "on":
                        parent.classList.add("display:block");
        
                        for(var i = 0; i <= Object.keys(options).length - 1; i++) {
                            child.classList.add("spinner:dotted", `spinner:${Object.values(options)[i].color}`);
                        }
        
                        break;
                    
                    case "off":
                        parent.classList.remove("display:block");
        
                        for(var i = 0; i <= Object.keys(options).length - 1; i++) {
                            setTimeout(function() {
                                parent.removeChild(child);
                            }, Object.values(options)[i].time);
                        }
        
                        break;
                }
        
                document.getElementById("container__modal").appendChild(child);
                document.getElementById("app__container").append(parent);
            }

            __options__.setCard = function(options={title: '', img: '', description: ''}) {
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
        
            __options__.toggleClass = function(selector, options={}) {
                const parent = document.querySelector(selector);
                options = {}
            }
        
            __options__.setDate = function(selector, period) {
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

        return __options__;
    });
   
    //----------------------------------------------------------------------------------------------------//
    if(typeof $ === "function") return $();
    else if(__version__ <= '1.0') throw(`This Version Not Compatible:${__version__}, by:${__author__}`); 
    else throw(`This Version Not Support With navigator:${__agent__}, by:${__author__}`);
    //----------------------------------------------------------------------------------------------------//
}));
