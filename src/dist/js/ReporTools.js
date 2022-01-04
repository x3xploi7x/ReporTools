//----------------------------------------------------------------------------------------------------//
//                                      Name : ReporTools                                             //
//                                      Version : 1.3                                                 //
//                                      Author : x3ploi7x                                             //
//----------------------------------------------------------------------------------------------------//
!(function(global, factory){
    if(typeof exports === 'object' && typeof module !== 'object') module.exports = factory();
    else if(typeof define === 'function' && define.amd) define(factory);
    else (global = global || self, global.rp = factory())
}(this, (function(rp){
    'use strict';
    
    var propertys = {
        win: window, // Priority
        doc: document, // Priority
        self: this
    };
    
    const namespace = {
        NAME: 'ReporTools',
        VERSION: '1.3.0',
        AUTHOR: 'x3ploi7x',
        DESCRIPTION: undefined,
        COMPILE: true,
        DEBBUG: false,
        AGENT: propertys.win.navigator.userAgent,
        STORAGE: propertys.win.localStorage // Default Null
    };
    
    rp = (function() {
        var options = {
            /**
            * @param {Function} -> addClass 
            * @param {Description} -> Add Class In Element's Refered 
            */
            // addClass: function(element, classes) {
            //     const temp = propertys.doc.querySelector(element);
                
            //     for(let i = 0; i <= temp.length - 1; i++) {
            //         temp[i].classList.addClass(classes);
            //     }
            // },

            /**
            * @param {Function} -> addClass 
            * @param {Description} -> Add Class In Element's Refered 
            */
            // removeClass: function(selector, classes) {
            //     var temp = propertys.doc.querySelectorAll(selector);

            //     for(let i = 0; i <= temp.length - 1; i++) {
            //         temp[i].classList.remove(classes);
            //     }
            // },

            /**
            * @param {Function} -> toggleClass 
            * @param {Description} -> Change Classes To Most Important First 
            */
            // toggleClass: function(selector, props={remove, add}) {
            //     var element = propertys.doc.querySelector(selector);
            //     var aux = [];
                
            //     for(let i = 0; i <= Object.keys(props).length - 1; i++) {
            //         aux.push(Object.values(props)[i]);
            //     }

            //     element.classList.remove(aux[0]);
            //     element.classList.add(aux[1]);
            // },

            /**
            * @param {Function} -> DestroyElement 
            * @param {Description} -> Destroy Element With Not Used In DOM 
            */
            empty: function (selector) {
                const parent = propertys.doc.querySelector(selector);
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

                parent = propertys.doc.querySelector(aux[0]);

                if(!propertys.doc.getElementById(aux[2])) { // If not exists in DOM
                    element = propertys.doc.createElement(aux[1]);
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
                if(!propertys.doc.getElementById('container__modal')) { // If not exist's in DOM
                    // View State Modal
                    options.onCreateElement({
                        parent: '#container',
                        target: 'div',
                        id: 'container__modal',
                        classes: 'group:mirror'
                    });
                }

                const   parent = propertys.doc.getElementById('container__modal');
                        parent.classList.add('display:block');
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
                    parent.querySelector('#letter__header').innerText = Object.values(props)[0];
                    parent.querySelector('#letter__message').innerText = Object.values(props)[1];
                }
        
                parent.querySelector('#button__notify').addEventListener('click', function(){
                    parent.removeChild(parent.querySelector('#modal__popup')); // Change With ToggleClass Function
                    parent.classList.remove('display:block');
                }, false);
            },
            
            /**
            * @param {Function} -> showForm 
            * @param {Description} -> Deploy & Append Element Data Refered In Pop-Up 
            */
             showForm: function(title, props={data}) {
                if(!propertys.doc.getElementById('container__modal')) { // If not exist's in DOM
                    // View State Modal
                    options.onCreateElement({
                        parent: '#container',
                        target: 'div',
                        id: 'container__modal',
                        classes: 'group:mirror'
                    });
                }

                const   parent = propertys.doc.getElementById('container__modal');
                        parent.classList.add('display:block');
                        parent.innerHTML = `
                            <div id="modal__container" class="modal:form background:white font:family-lucida">
                                <div id="div__main" class="content:main padding:y-50% direction:center scroll:y-auto">
                                    <span id="text__reference" class="letter:small color:grey-dark font:weight-bold"></span>
                                </div>
                                <div id="div__footer" class="content:footer direction:center">
                                    <button id="button__notify" class="button:small margin:x-75% background:red color:white" type="button">Continuar</button>
                                </div>
                            </div>
                        `;

                parent.querySelector("#text__reference").innerText = title;
                parent.querySelector("#div__main").innerHTML += props.data;
                parent.querySelector("#button__notify").addEventListener("click", function(){
                    parent.removeChild(parent.querySelector('#modal__container')); // Change With ToggleClass Function
                    parent.classList.remove('display:block');
                }, false);
            },
            
            /**
            * @param {Function} -> showNotify 
            * @param {Description} -> Deploy Notify's With Product Data Info 
            */
             showNotify: function(content) {
                if(!propertys.doc.getElementById('container__modal')) { // If not exist's in DOM
                    // View State Modal
                    options.onCreateElement({
                        parent: '#container',
                        target: 'div',
                        id: 'container__modal',
                        classes: 'group:mirror'
                    });
                }

                const   parent = propertys.doc.getElementById("container__modal");
                        parent.classList.add('display:block');
                        parent.innerHTML = `
                            <div id="modal__notify" class="modal:notify font:family-monaco scroll:y-auto">
                                <div class="content:message padding:50%">
                                    <span id="text__message" class="letter:small color:grey-dark direction:start font:weight-bold"></span>
                                </div>
                            </div>
                        `;

                parent.querySelector("#text__message").innerText = content;
                
                setTimeout(function() {
                    parent.removeChild(parent.querySelector('#modal__notify')); // Change With ToggleClass Function
                    parent.classList.remove('display:block');
                }, 4500); // Static Time Not Change
            },
            
            /**
            * @param {Function} -> showLoader 
            * @param {Description} -> Deploy Spinner To Charge Info 
            */
            showLoader: function(props={type, color, time}) {
                if(!propertys.doc.getElementById('container__modal')) { // If not exist's in DOM
                    // View State Modal
                    options.onCreateElement({
                        parent: '#container',
                        target: 'div',
                        id: 'container__modal',
                        classes: 'group:mirror'
                    });
                }

                const   parent = propertys.doc.getElementById('container__modal');
                        parent.classList.add('display:block');
                        parent.innerHTML = `
                            <div id="modal__spinner"></div>
                        `;
                
                var aux = [];
                
                for(let i = 0; i <= Object.keys(props).length - 1; i++) {
                    aux.push(Object.values(props)[i]);
                }

                parent.querySelector('#modal__spinner').classList.add(`spinner:${aux[0]}`);
                parent.querySelector('#modal__spinner').classList.add(`spinner:${aux[1]}`);
                
                // switch(state) {
                //     case 'on': // Replace With onDestroyElement
                //         parent.classList.add('display:block');
                //     break;

                //     case 'off':
                //         parent.classList.removeClass('display:block');
                //         parent.removeChild(parent.querySelector('#modal__spinner'));
                //     break;
                // }
                
                var duration = aux[2]; //(parseInt(aux[2]) / 1000);

                function async() {
                    setTimeout(function() {
                        parent.classList.remove('display:block');
                        parent.removeChild(parent.querySelector('#modal__spinner'));
                    }, duration);
                }

                async();
            },
            
            /**
            * @param {Function} -> setCard 
            * @param {Description} -> Create Card To Show Importance Information 
            */
            // setCard: function(selector, props={title, img, description}) { // Modify
            //     propertys.doc.querySelector(selector).innerHTML = `
            //         <div class="card:expand card:hover background:grey-light font:family-verdana direction:center">
            //             <ul class="list:portrait">
            //                 <li class="list:item">
            //                     <h1 class="letter:large font:weight-bold">Lorem</h1>
            //                 </li>
            //                 <li class="list:item">
            //                     <img class="image:large" src="src/util/assets/img/things/DOCS_REFERENCE.png">
            //                 </li>
            //                 <li class="list:item">
            //                     <p class="letter:small">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint repudiandae ipsa quisquam labore laudantium. Beatae sequi laborum quos aliquam nobis, eos, nostrum sunt magni id ratione incidunt fugit maxime dignissimos.</p>
            //                 </li>
            //             </ul>
            //         </div>
            //     `;
            // },

            /**
            * @param {Function} -> getDate 
            * @param {Description} -> Get DateTime [day's, month's, year's] To Charge In Element's 
            */
            getDate: function() {
                const name = [
                    'Enero',
                    'Febrero',
                    'Marzo',
                    'Abril',
                    'May',
                    'Junio',
                    'Julio',
                    'Agosto',
                    'Septiembre',
                    'Octubre',
                    'Noviembre',
                    'Diciembre'
                ];

                var date = new Date();
                var day = date.getDate() < 10 ? "0" + date.getDay() + "" : "" + date.getDate();
                var month = date.getMonth() > 0 ? date.getMonth() + 0 : date.getMonth() + 1;
                var year = date.getFullYear();

                return `Day: ${day} / Month: ${name[month]} / Year: ${year}`;
            }
        };

        return options;
    });
   
    //----------------------------------------------------------------------------------------------------//
    if(typeof rp === 'function' && rp != 'undefined') return rp();
    else if(namespace.VERSION <= '1.0') throw(`This Version Not Compatible:${namespace.VERSION}, by:${namespace.AUTHOR}.`); 
    else throw(`This Version Not Support With Navigator:${namespace.AGENT}.`);
    //----------------------------------------------------------------------------------------------------//
})));
