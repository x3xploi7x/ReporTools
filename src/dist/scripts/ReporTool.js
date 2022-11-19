//----------------------------------------------------------------------------------------------------//
//                                      Name : ReporTools                                             //
//                                      Version : 1.5.7                                               //
//                                      Author : x3ploi7x                                             //
//----------------------------------------------------------------------------------------------------//
!(function (global, factory) {
    'use strict';

    if (typeof exports === 'object' && typeof module !== 'object') {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        (global = global || self, global._ = factory())
    }
}(this, (function (_) {
    'use strict';

    var propertys = {
        win: window, // Priority
        doc: document, // Priority
        self: this
    };

    var page = {
        current: 1,
        record: 100,
        data: [] // request xhr -> response json
    };

    const namespace = {
        NAME: 'ReporTools',
        VERSION: '1.5.7',
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

    _ = (function () {
        var options = {
            addClass: function (element, classes) {
                var temp = propertys.doc.querySelector(element);

                for (let i = 0; i <= temp.length - 1; i++) {
                    temp[i].classList.addClass(classes);
                }
            },
            removeClass: function (selector, classes) {
                var temp = propertys.doc.querySelectorAll(selector);

                for (let i = 0; i <= temp.length - 1; i++) {
                    temp[i].classList.remove(classes);
                }
            },
            toggleClass: function (element, props = { add, remove }) {
                var parent = propertys.doc.querySelector(element);

                if (!parent.classList.contains(Object.values(props[0]))) {
                    parent.classList.contains(Object.values(props[0]));
                }

                if (parent.classList.contains(Object.values(props[1]))) {
                    parent.classList.contains(Object.values(props[1]));
                }
            },
            onCreateElement: function (props = { parent, target, id, classes, type }) {
                var parent;
                var element;
                var aux = [];

                for (let i = 0; i <= Object.keys(props).length - 1; i++) {
                    aux.push(Object.values(props)[i]);
                }

                parent = propertys.doc.querySelector(aux[0]);

                if (!propertys.doc.getElementById(aux[2])) { // If not exists in DOM
                    element = propertys.doc.createElement(aux[1]);
                    element.setAttribute('id', aux[2]);
                    element.setAttribute('class', aux[3]);

                    if (element.nodeName === 'INPUT' || element.nodeName === 'BUTTON') {
                        element.setAttribute('type', aux[4]);
                    } else {
                        delete Object.keys(props)[5]; // Remove Attr Not Used In Production
                    }

                    parent.appendChild(element);
                }

                return element;
            },
            onDeleteElement: function (element) {
                const parent = propertys.doc.querySelector(element);
                const child = parent.children;

                if (typeof parent === undefined || child.length == 0) {
                    parent.remove(propertys.doc.body);
                }
            },
            showMessage: function (props = { title, content }) {
                // View State Modal
                this.onCreateElement({
                    parent: '#container',
                    target: 'div',
                    id: 'container__modal',
                    classes: 'container:mirror'
                });

                const parent = propertys.doc.getElementById('container__modal');
                parent.classList.add('display:block');
                parent.innerHTML = `
                            <div id="modal__popup" class="modal:alert display:flex height:auto background:white padding:2 font:family-lucida direction:center direction:col round:top-right-4 round:bottom-left-4 shadow:component shadow:black">
                                <div class="content:title width:100% background:grey-light border:bottom-1 border:grey-dark border:bottom-style-solid round:15px">
                                    <h1 id="letter__header" class="letter color:grey-dark font:size-20pt font:weight-bold font:transform-upper"></h1>
                                </div>
                                <div class="divider:x"></div>
                                <div class="content:message width:100% padding:4">
                                    <p id="letter__message" class="color:grey font:size-10pt font:weight-bold"></p>
                                </div>
                                <div class="content:options width:100% direction:right">
                                    <button id="button__notify" class="button hover@background:blue-dark background:blue color:white border padding:2" type="button" onclick="return false;">Continuar</button>
                                </div>
                            </div>
                        `;

                for (let i = 0; i <= Object.keys(props).length - 1; i++) {
                    parent.querySelector('#letter__header').innerText = Object.values(props)[0];
                    parent.querySelector('#letter__message').innerText = Object.values(props)[1];
                }

                parent.querySelector('#button__notify').addEventListener('click', function () {
                    parent.removeChild(parent.querySelector('#modal__popup')); // Change With ToggleClass Function
                    //parent.classList.remove('display:block');
                    parent.remove('body');
                }, false);
            },
            showForm: function (title, data) {
                // View State Modal
                this.onCreateElement({
                    parent: '#container',
                    target: 'div',
                    id: 'container__modal',
                    classes: 'container:mirror'
                });

                const parent = propertys.doc.getElementById('container__modal');
                parent.classList.add('display:block');
                parent.innerHTML = `
                            <div id="modal__container" class="modal:form background:white font:family-lucida shadow:component shadow:black">
                                <div id="div__header" class="content:header padding:y-2 direction:right">
                                    <button id="button__close" class="icon icon:close-dark width:15px height:15px background:white border margin:x-1 round:100%" type="button"></button>
                                </div>
                                <div id="div__main" class="content:main display:flex padding:y-4 direction:center scroll:y-auto direction:col">
                                    <span id="text__reference" class="letter color:grey font:weight-bold"></span>
                                    <div class="divider:x"></div>
                                </div>
                                <div id="div__footer" class="content:footer margin:bottom-2 direction:right">
                                    <button id="button__notify" class="button color:white hover@background:red-dark background:red border margin:x-3 padding:2" type="button">Continuar</button>
                                </div>
                            </div>
                        `;

                parent.querySelector("#text__reference").innerText = title;
                parent.querySelector("#div__main").innerHTML += data;
                parent.querySelector("#button__close, #button__notify").addEventListener("click", function () {
                    parent.removeChild(parent.querySelector('#modal__container')); // Change With ToggleClass Function
                    // parent.classList.remove('display:block');
                    parent.remove('body');
                }, false);
            },
            showNotify: function (content) {
                // View State Modal
                this.onCreateElement({
                    parent: '#container',
                    target: 'div',
                    id: 'container__modal',
                    classes: 'container:mirror'
                });

                const parent = propertys.doc.getElementById("container__modal");
                parent.classList.add('display:block');
                parent.innerHTML = `
                            <div id="modal__notify" class="modal:notify font:family-monaco scroll:y-auto">
                                <div class="content:message padding:50%">
                                    <span id="text__message" class="letter color:grey-dark direction:start font:weight-bold"></span>
                                </div>
                            </div>
                        `;

                parent.querySelector("#text__message").innerText = content;

                setTimeout(function () {
                    parent.removeChild(parent.querySelector('#modal__notify')); // Change With ToggleClass Function
                    parent.classList.remove('display:block');
                    parent.remove('body');
                }, 4500); // Static Time Not Change
            },
            showLoader: function (props = { type, color, time }) {
                // View State Modal
                this.onCreateElement({
                    parent: '#container',
                    target: 'div',
                    id: 'container__modal',
                    classes: 'container:mirror'
                });

                const parent = propertys.doc.getElementById('container__modal');
                parent.classList.add('display:block');
                parent.innerHTML = `<div id="modal__spinner" class="position:fixed shadow:normal shadow:grey-dark"></div>`;

                var aux = [];

                for (let i = 0; i <= Object.keys(props).length - 1; i++) {
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

                function async() { // Suplied with promise -> async function
                    setTimeout(function () {
                        parent.classList.remove('display:block');
                        // parent.removeChild(parent.querySelector('#modal__spinner'));
                        parent.remove('body');
                    }, duration);
                }

                async();
            },
            getDate: function () {
                const name = ['Enero', 'Febrero', 'Marzo', 'Abril', 'May', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

                var date = new Date();
                var day = date.getDate() < 10 ? "0" + date.getDay() + "" : "" + date.getDate();
                var month = date.getMonth() > 0 ? date.getMonth() + 0 : date.getMonth() + 1;
                var year = date.getFullYear();

                return `${day} / ${name[month]} / ${year}`;
            },
            exportToExcel: function (params = { element, fileName, dateFile }) {
                const schema = 'application/vnd.ms-excel' || 'urn:schemas-microsoft-com:office:excel' || 'application/vnd.opennxmlformats-officedocument.spreadsheetml.sheet';
                const encode = 'charset=UTF-8';
                const separator = '%EF%BB%BF';

                var aux = [];

                for (let i = 0; i <= Object.keys(params).length - 1; i++) {
                    aux.push(Object.values(params)[i]);
                }

                const selector = propertys.doc.querySelector(aux[0]);
                selector.setAttribute('border', '1px');
                const temporal = selector.outerHTML.replace(/ /g, '%20'); // Remove space's in url reference
                // temporal.replace(/<A[^>]*>|<\/A>/g, "");
                // temporal.replace(/<img[^>]*>/gi, "");
                // temporal.replace(/<input[^>]*>|<\/input>/gi, "");

                var file = String(aux[1]).concat(`_${aux[2]}.xls`);
                var direction = propertys.doc.createElement('a');

                propertys.doc.body.appendChild(direction);

                if (propertys.win.navigator.msSaveOrOpenBlob) {
                    // Generate binary in document
                    var blob = new Blob(
                        ['\ufeff', temporal],
                        { type: `${schema};${encode + separator}` }
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
            exportToPDF: function (params = { title, element }) {
                var aux = [];

                for (let i = 0; i <= Object.keys(params).length - 1; i++) {
                    aux.push(Object.values(params)[i]);
                }

                const header = aux[0];
                const selector = propertys.doc.querySelector(aux[1]);
                selector.setAttribute('border', '1px');

                var temporal = selector.outerHTML; // Deploy html data to element selected

                // Options to PDF panel
                var mirror = propertys.win.open('', '', `height=500,width=1000,left=${width / 8},top=${height / 8}`);
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
            prevPage: function () {
                if (page.current > 1) {
                    page.current--;
                }

                this.setPagination(page.current);
            },
            nextPage: function () {
                if (page.current == 0) {
                    page.current = 1;
                }

                page.current++;
                this.setPagination(page.current);
            },
            setPagination: function (pages) {
                page.data.push(json);
                // this.showLoader({
                //     type: 'dashed',
                //     color: 'blue',
                //     time: 500
                // });

                if (pages < 1) {
                    pages = 1;
                }

                if (pages > this.getPages()) { // Returned total number page's count with response json object data
                    pages = this.getPages();
                }

                //return callback = function () {
                //document.getElementById('div__table').innerHTML = '';

                var table = '';

                for (let i = (pages - 1) * page.record; i < (pages * page.record) && i < page.data.length; i++) {
                    console.log(page.data);
                    // document.getElementById('div__table').innerHTML += `
                    //     <span>${jsonTest[i].test}</span>
                    // `;

                    // table += `
                    //     <tr>
                    //         <td>${jsonTest[i].id}</td>
                    //         <td>${jsonTest[i].name}</td>
                    //         <td>${jsonTest[i].location}</td>
                    //     </tr>
                    // `;
                }

                //document.getElementById('table').innerHTML = table;
            },

            getPageData: function (json) {
                return page.data.push(json);
            },

            getPages: function () {
                let calc = (page.data.length / page.record);
                return Math.ceil(calc);
            }
        };

        return options;
    });

    if (typeof _ === 'function' && _ != 'undefined') {
        return _();
    } else if (namespace.VERSION <= '1.0') {
        throw (`This Version Not Compatible:${namespace.VERSION}, by:${namespace.AUTHOR}.`);
    } else {
        throw (`This Version Not Support With Navigator:${namespace.AGENT}.`);
    }
})));
