//----------------------------------------------------------------------------------------------------//
//                                      Name : ReporTools                                             //
//                                      Version : 1.5                                                 //
//                                      Author : x3ploi7x                                             //
//----------------------------------------------------------------------------------------------------//
!(function(global, factory){
    'use strict';

    if(typeof exports === 'object' && typeof module !== 'object') {
        module.exports = factory();
    } else if(typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        (global = global || self, global._ = factory())
    }
}(this, (function(_){
    'use strict';

    var propertys = {
        win: window, // Priority
        doc: document, // Priority
        self: this
    };

    var page = {
        current: 1,
        record: 5,
        data: [] // request xhr -> response json
    };

    // var jsonTest = [
    //     {
    //         test: 'a',
    //     },
    //     {
    //         test: 'b',
    //     },
    //     {
    //         test: 'c',
    //     },
    //     {
    //         test: 'd',
    //     },
    //     {
    //         test: 'e',
    //     }
    // ];

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

    // Exact window dimention's
    const width = propertys.win.innerWidth ? propertys.win.innerWidth : propertys.doc.documentElement.clientWidth;
    const height = propertys.win.innerHeight ? propertys.win.innerHeight : propertys.doc.documentElement.clientHeight;
    const left = propertys.win.screenLeft ? propertys.win.screenLeft : propertys.win.screenX;
    const top = propertys.win.screenTop ? propertys.win.screenTop : propertys.win.screenY;

    _ = (function() {
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
            // empty: function (selector) {
            //     const parent = propertys.doc.querySelector(selector);
            //     var childs;

            //     if(parent.childNodes.length > 0) {
            //         for(let i = 0; i <= parent.childNodes.length; i++) {
            //             childs = parent.childNodes[i];
            //         }

            //         parent.remove(childs);
            //     }
            // },
    
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
                // View State Modal
                this.onCreateElement({
                    parent: '#container',
                    target: 'div',
                    id: 'container__modal',
                    classes: 'group:mirror'
                });

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
                // View State Modal
                this.onCreateElement({
                    parent: '#container',
                    target: 'div',
                    id: 'container__modal',
                    classes: 'group:mirror'
                });

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
                // View State Modal
                this.onCreateElement({
                    parent: '#container',
                    target: 'div',
                    id: 'container__modal',
                    classes: 'group:mirror'
                });

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
                // View State Modal
                this.onCreateElement({
                    parent: '#container',
                    target: 'div',
                    id: 'container__modal',
                    classes: 'group:mirror'
                });

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

                return `${day} / ${name[month]} / ${year}`;
            },

            /**
            * @param {Function} -> exportToExcel 
            * @param {Description} -> Export datatable to excel application 
            */
            exportToExcel: function(params={element, fileName, dateFile}) {
                const schema = 'application/vnd.ms-excel' || 'urn:schemas-microsoft-com:office:excel' || 'application/vnd.opennxmlformats-officedocument.spreadsheetml.sheet';
                const encode = 'charset=UTF-8';
                const separator = '%EF%BB%BF';
                
                var aux = [];

                for(let i = 0; i <= Object.keys(params).length - 1; i++) {
                    aux.push(Object.values(params)[i]);
                }

                const   selector = propertys.doc.querySelector(aux[0]); 
                        selector.setAttribute('border', '1px');
                const temporal = selector.outerHTML.replace(/ /g, '%20'); // Remove space's in url reference
                // temporal.replace(/<A[^>]*>|<\/A>/g, "");
                // temporal.replace(/<img[^>]*>/gi, "");
                // temporal.replace(/<input[^>]*>|<\/input>/gi, "");
                
                var file = String(aux[1]).concat(`_${aux[2]}.xls`);
                var direction = propertys.doc.createElement('a');
                
                propertys.doc.body.appendChild(direction);

                if(propertys.win.navigator.msSaveOrOpenBlob) {
                    // Generate binary in document
                    var blob = new Blob(
                        ['\ufeff', temporal],
                        {
                            type: `${schema};${encode + separator}`
                        }
                    );

                    propertys.win.navigator.msSaveOrOpenBlob(blob, direction) && blob.remove(propertys.doc.body);
                    //console.log(blob);
                } else {
                    // In case not generate binary custom document to export
                    direction.href = `data:${schema};${encode},${separator + temporal}`
                    direction.download = file;
                    direction.click();
                    direction.remove(propertys.doc.body);
                }

                selector.removeAttribute('border'); // Remove border showed in excel application
            },

            /**
            * @param {Function} -> exportToPDF 
            * @param {Description} -> Export datatable to pdf application 
            */
            exportToPDF: function (params={title, element}) {
                var aux = [];

                for(let i = 0; i <= Object.keys(params).length - 1; i++) {
                    aux.push(Object.values(params)[i]);
                }
                
                const header = aux[0];
                const   selector = propertys.doc.querySelector(aux[1]);
                        selector.setAttribute('border', '1px');

                var temporal = selector.outerHTML; // Deploy html data to element selected
                
                // Options to PDF panel
                var     mirror = propertys.win.open('', '', `height=500,width=1000,left=${width/8},top=${height/8}`);
                        mirror.document.write(`
                            <html>
                                <head>
                                    <title>${header}</title>
                                </head>
                                <body>
                                    ${temporal}
                                </body>
                        `);
                        mirror.print();
                        mirror.close();

                selector.removeAttribute('border');
            },

            /**
            * @param {Function} -> prevPage 
            * @param {Description} -> Back page count 
            */
            prevPage: function() {
                if(page.current > 1) {
                    page.current--;
                }

                this.setPagination(page.current);
            },

            /**
            * @param {Function} -> nextPage 
            * @param {Description} -> Next page count 
            */
            nextPage: function() {
                if(page.current == 0) {
                    page.current = 1;
                }
                
                page.current++;
                this.setPagination(page.current);
            },

            /**
            * @param {Function} -> setPagination 
            * @param {Description} -> Enabled pagination with process fetch & showed in data table 
            */
            setPagination: function(pages, callback) {
                // this.showLoader({
                //     type: 'dashed',
                //     color: 'blue',
                //     time: 500
                // });

                if(pages < 1) {
                    pages = 1;
                }

                if(pages > this.getPages()) { // Returned total number page's count with response json object data
                    pages = this.getPages();
                }

                // return callback = function () {
                //     document.getElementById('div__table').innerHTML = '';

                //     var table = `
                //         <table class="table:normal table:border table:hover">
                //             <thead class="background:pink-light color:white">
                //                 <tr>
                //                     <th>Test</th>
                //                 </tr>
                //             </thead>
                //             <tbody>
                //     `;

                //     for(let i = (pages - 1) * page.record; i < (pages * page.record) && i < jsonTest.length; i++) {
                //         // document.getElementById('div__table').innerHTML += `
                //         //     <span>${jsonTest[i].test}</span>
                //         // `;

                //         table += `
                //             <tr>
                //                 <td>${jsonTest[i].test}</td>
                //             </tr>
                //         `;
                //     }

                //     table += `
                //             </tbody>
                //         </table>
                //     `;

                //     document.getElementById('div__table').innerHTML = table;
                // }
            },

            getPages: function () {
                let calc = jsonTest.length / page.record;
                return Math.ceil(calc);
            }
        };

        return options;
    });
     
    //----------------------------------------------------------------------------------------------------//
    if(typeof _ === 'function' && _ != 'undefined') {
        return _();
    } else if(namespace.VERSION <= '1.0') {
        throw(`This Version Not Compatible:${namespace.VERSION}, by:${namespace.AUTHOR}.`); 
    } else { 
        throw(`This Version Not Support With Navigator:${namespace.AGENT}.`);
    }
    //----------------------------------------------------------------------------------------------------//
})));
