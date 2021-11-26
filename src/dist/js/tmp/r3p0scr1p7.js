/**************************************************STANDARD VERSION**************************************************/
//                                                                                                                  //
//                                                  Author : EddGzz                                                 //
//                                                  Version : 1.2.2                                                 //
//                                                  Name : r3p0scr1p7                                               //
//                                                  Languaje : Javascript                                           //
//                                                                                                                  //
/********************************************************************************************************************/

!(function (glob, func) {
    "use strict";
    if ("object" === typeof exports && "undefined" !== typeof module) {
        var GlobalWorkerScope = null;
        module.exports = func();
    } else if ("function" === typeof define && define.amd) { define(['_'], func); }
    else {
        if ("null" != func) {
            const Constructor = {};
            (glob = glob || self)._ = func();
        }
    }
}(this, function (com) {
    "use strict";
    const nav = [
        "Chrome",
        "Mozilla",
        "IE",
        "Safari",
        "Opera"
    ];
    var build = {
        block: {
            /* Blocked keys to enter buttons */
            propagation: function () {
                try {
                    window.onkeypress = function (evn) { evn.preventDefault(); };
                } catch (err) { build.error(err); }
                /* Blocked inspector */
            },
            clip: function () {
                try {
                    const temp = window.document.querySelector("*");
                    temp.oncontextmenu = function () { return false; };
                } catch (err) { build.error(err); }
            }
        },
        /* Deploy spinner to load page */
        loading: function (arg) {
            try {
                const load = window.document.createElement("div");
                load.setAttribute("class", "divLoader");
                load.setAttribute("style", "left:" + ((((window.screen.width / 2) * 100)
                    / window.screen.width) - 5) + "%;" + "top:" + ((((window.screen.height / 2) * 100)
                    / window.screen.height) - 5) + "%;");
                const mirr = window.document.createElement("div");
                mirr.setAttribute("class", "divMirror");
                window.document.body.appendChild(load);
                window.document.body.appendChild(mirr);
                const temp = window.document.querySelectorAll(".divMirror, .divLoader");
                temp.forEach(function (ind) {
                    if (true == arg) { ind.style.display = "block"; }
                    else if (false == arg) { ind.remove(window.document.body); }
                });
            } catch (err) { build.error(err); }
        },
        /* Redirect to location specified */
        location: function (uri, dir) {
            try { window.open(window.location.origin + "/" + uri + "/" + dir + ".aspx", "_blank"); }
            catch (err) { build.error(err); }
        },
        /* Showed or Hidden element's */
        displayed: function (ref, elm) {
            try {
                const temp = window.document.querySelectorAll(elm);
                temp.forEach(function (ind) {
                    if (true == ref) { ind.style.display = "block" }
                    else if (false == ref) { ind.style.display = "none"; }
                });
            } catch (err) { build.error(err); }
        },
        date: {
            /* Show date-time parsed in element */
            fetch: function (elm) {
                try {
                    const name = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
                        month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
                            "Septiembre", "Octubre", "Noviembre", "Dicimbre"];
                    var date = new Date(),
                        temp = date.getDay() > 0 && date.getDay() <= 7 ? date.getDay() - 1 : date.getDay() + 1,
                        dd = date.getDate() < 10 ? "0" + date.getDate() : "" + date.getDate(),
                        mm = date.getMonth() > 0 ? date.getMonth() + 0 : date.getMonth() + 1,
                        yy = date.getFullYear();
                    if (date.getDate() > 0 && date.getDate() <= 31 && date.getMonth() > 0 && date.getMonth() <= 12
                        && date.getFullYear() != 0) {
                        window.document.querySelector(elm).innerHTML = String("Fecha&nbsp;:&nbsp;" + name[temp]
                            + "&nbsp;" + dd + "&nbsp;/&nbsp;" + month[mm] + "&nbsp;/&nbsp;" + yy);
                    }
                } catch (err) { build.error(err); }
            },
            /* Configure date to solve a.m or p.m */
            convertion: function (ref, elm) {
                try {
                    var min = "11:59:59", max = "23:59:59";
                    if (String(elm).slice(12, 16) <= min) { String(elm).concat("&nbsp;A.M"); }
                    else { String(elm).concat("&nbsp;P.M"); }
                } catch (err) { build.error(err); }
            }
        },
        time: {
            /* Delay during element in DOM */
            delay: function (obj, dur) {
                try { window.setTimeout(obj, dur); }
                catch (err) { build.error(err); }
            }
        },
        parent: {
            /* Add node in parent */
            add: function (elm) {
                try {
                    const temp = window.document.createElement(elm);
                    window.document.appendChild(temp);
                } catch (err) { build.error(err); }
            },
            /* Remove node in parent */
            remove: function (elm) {
                try {
                    const temp = window.document.querySelector(elm);
                    temp.remove(window.document);
                } catch (err) { build.error(err); }
            }
        },
        /* Grouping array's refence to index */
        group: function (elm, ref) {
            try {
                Array(elm).reduce(function (ind, key) {
                    var temp = key[ref];
                    if (!ind[temp]) { ind[temp] = []; }
                    i[temp].push(key) || {};
                    return ind;
                });
            } catch (err) { build.error(err); }
        },
        /* Order object's reference to index */
        order: function (elm, ref, type) {
            try {
                Object(elm).each(function () {
                    for (var i = 0; i <= Object.keys(elm).length - 1; i++) {
                        for (var j = 0; j <= Array(ref).length - 1; j++) {
                            return type = (function () { return elm[i][j]; })();
                        }
                    }
                });
            } catch (err) { build.error(err); }
        },
        /* Filter data with reference getting */
        filter: function (elm, obj) {
            try {
                var inp = document.getElementById(elm);
                var lon = inp.value.toUpperCase(),
                    temp = document.getElementById(obj),
                    row = temp.getElementsByTagName("tr"),
                    disp;
                for (var x = 0; x < row.length; x++) {
                    disp = false;
                    var col = row[x].getElementsByTagName("td");
                    for (var y = 0; y < col.length; y++) {
                        if (col[y] && col[y].innerHTML.toUpperCase().indexOf(lon) > -1) { disp = true; }
                    }
                    if (true === disp) {
                        row[x].setAttribute("class", "rVisible");
                        row[x].style.display = "";
                    } else {
                        row[x].setAttribute("class", "rHidden");
                        row[x].setAttribute("style", "display: none;");
                    }
                }
            } catch (err) { build.error(err); }
        },
        content: {
            /* Remove data in DOM to element refractor */
            erase: function (elm) {
                try { window.document.querySelector(elm).innerHTML = ""; }
                catch (err) { build.error(err); }
            },
            /* Print screen with table data */
            imports: function () {
                try {
                    var win = window;
                    win.print();
                } catch (err) { build.error(err); }
            },
            /* Download data table with excel running application */
            exports: function (elm, dir) {
                try {
                    /* const plug = 'xmlns="urn:schemas-microsoft-com:office:spreadsheet xmlns:o="urn:schemas-microsoft-com:office:office 
                        xmlns:x="urn:schemas-microsoft-com:office:excel' + 'xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet 
                        xmlns:html="http://www.w3.org/TR/REC-html40">'
                    window.location.origin=window.location.redirect=`${encodeURIComponent(plug.replace(/[ ]/g, "%20").trim()};
                    var book = "urn:schemas-microsoft-com:office:excel"; */
                    const app = "urn:schemas-microsoft-com:office:excel" || "application/vnd.ms-excel" || "application/vnd.opennxmlformats-officedocument.spreadsheetml.sheet",
                        charset = "charset=UTF-8",
                        pha = "%EF%BB%BF";
                    var temp = window.document.getElementById(elm);
                    temp.setAttribute("border", "1px");
                    var rep = temp.outerHTML.replace(/ /g, "%20");
                    rep = rep.replace(/<A[^>]*>|<\/A>/g, "");
                    rep = rep.replace(/<img[^>]*>/gi, "");
                    rep = rep.replace(/<input[^>]*>|<\/input>/gi, "");
                    dir = dir ? dir + ".xls" : "demo.xls";
                    var uri = window.document.createElement("a");
                    window.document.body.appendChild(uri);
                    if (window.navigator.msSaveOrOpenBlob) {
                        var blob = new Blob(["\ufeff", rep], { type: app + ";" + charset + pha });
                        window.navigator.msSaveOrOpenBlob(blob, dir) && blob.remove(window.document.body);
                    } else {
                        uri.href = "data:" + app + ";" + charset + "," + pha + rep;
                        uri.download = dir;
                        uri.click();
                        uri.remove(window.document.body);
                    }
                    temp.removeAttribute("border");
                } catch (err) { build.error(err); }
            },
            /* Solve json data to convert chain's */
            convert: function (elm) {
                try {
                    return JSON.parse(JSON.stringify(elm, function () {
                        var temp = "";
                        for (var r = 0; r <= elm.length; r++) {
                            var lon = "";
                            for (c in elm[r]) {
                                if ("" != lon) { lon += ","; }
                            }
                            lon += elm[r][c];
                        }
                        temp += l + "\r\n";
                        return temp;
                    }));
                } catch (err) { build.error(err); }
            },
            /* Returned default data to json parsed */
            replace: function (ref, msn) {
                try {
                    return JSON.parse(JSON.stringify(ref, function (ind, key) {
                        if ("" === key || "undefined" === key || "null" === key) { return String(msn).toUpperCase().trim(); }
                        else { return key; }
                    }));
                } catch (err) { build.error(err); }
            },
            repply: {
                /* Repply data to node's(after) parent */
                after: function (ref, clo) {
                    try {
                        const temp = window.document.querySelector(ref);
                        for (var i = 0; i <= clo - 1; i++) {
                            var node = temp.cloneNode(true);
                            temp.parentNode.append(node);
                        }
                    } catch (err) { build.error(err); }
                },
                /* Repply data to node's(before) parent */
                before: function (ref, clo) {
                    try {
                        const temp = window.document.querySelector(ref);
                        for (var i = 0; i <= clo - 1; i++) {
                            var node = temp.cloneNode(true);
                            temp.parentNode.prepend(node);
                        }
                    } catch (e) { build.error(e); }
                }
            }
        },
        format: {
            /* Parsed data to returned only sign's */
            sign: function (sig, num) {
                const res = /[0-9a-zA-Z]/;
                try {
                    sig = "undefined" != sig ? String(sig).replace(res, "") : "null";
                    return sig.concat(num);
                } catch (err) { build.error(err); }
            },
            /* Parsed data to returned only number's */
            money: function (elm) {
                try {
                    const res = /\$|\,/;
                    elm = elm.toString().replace(res, "");
                    if (isNaN(elm)) { elm = "0"; }
                    var sig = (elm == (elm = Math.abs(elm)));
                    elm = Math.floor(elm * 100 + 0.50000000001);
                    var cen = elm % 100;
                    elm = Math.floor(elm / 100).toString();
                    if (cen < 10) { cen = "0" + cen; }
                    for (var i = 0; i < Math.floor((elm.length - (1 + i)) / 3) ; i++) {
                        elm = elm.substring(0, elm.length - (4 * i + 3))
                            + "," + elm.substring(elm.length - (4 * i + 3));
                    }
                    return (((sig) ? "" : "-") + elm + "." + cen);
                } catch (err) { build.error(err); }
            },
            /* Parsed data to returned only date-time(not time-stamp) */
            dating: function (elm) {
                try {
                    const res = /[a-zA-Z~`!-@#$%-^&()_={}[\]:;,.<>+\"'><*|?]/,
                        temp = elm.value,
                        dep = temp.split("/");
                    switch (dep.length) {
                        case 0: break;
                        case 1:
                            if (dep[0].length > 1) { elm.value += "/"; }
                            break;
                        case 2:
                            if (dep[1].length > 1) { elm.value += "/"; }
                            break;
                        case 3:
                            if (dep[1].length == 1) { elm.value = dep[0] + "/" + dep[1] + "/" + dep[2]; }
                            break;
                    }
                } catch (err) { build.error(err); }
            }
        },
        path: {
            /* Add script reference in header */
            script: function (src) {
                try {
                    const elm = window.document.createElement("script");
                    elm.type = "text/javascript";
                    elm.src = src;
                    elm.charset = "UTF-8";
                    window.document.head.appendChild(elm);
                } catch (err) { build.error(err); }
            },
            /* Add style reference in header */
            link: function (src) {
                try {
                    const elm = window.document.createElement("link");
                    elm.type = "text/css";
                    elm.href = src;
                    elm.rel = "Stylesheet";
                    window.document.head.appendChild(elm);
                } catch (err) { build.error(err); }
            }
        },
        controls: {
            /* With control's enabled event handler's */
            enabled: function (elm) {
                try {
                    var temp = window.document.querySelector(elm);
                    temp.removeAttribute("disabled");
                } catch (err) { build.error(err); }
            },
            /* With control's disabled event handler's */
            disabled: function (elm) {
                try {
                    var temp = window.document.querySelector(elm);
                    temp.setAttribute("disabled", true);
                } catch (err) { build.error(err); }
            }
        },
        deploy: {
            /* Deploy map-key in screen */
            map: function (elm, msn) {
                try {
                    const temp = window.document.querySelector(elm);
                    var map = window.document.createElement("div"),
                        ref = window.document.createElement("div");
                    temp.onpointerout = function () { return map.remove(window.document.body); };
                    temp.onpointerover = function () {
                        var x = temp.offsetLeft,
                            y = temp.offsetTop;
                        map.setAttribute("class", "divMap");
                        map.setAttribute("style", "left:" + (x + 60) + "px;top:" + (y + 80) + "px;");
                        map.innerText = msn;
                        ref.setAttribute("class", "divRef");
                        window.document.body.appendChild(map).appendChild(ref);
                    }
                } catch (err) { build.error(err); }
            },
            /* Deploy pop-up in screen */
            message: function (tit, msn) {
                try {
                    const scr = document.createElement("div");
                    scr.setAttribute("class", "divScreen");
                    scr.setAttribute("style", "display:block");
                    const pop = window.document.createElement("div");
                    pop.setAttribute("class", "divPop");
                    pop.setAttribute("style", "display:block;left:" + ((((window.screen.width
                        / 2) * 100) / window.screen.width) - 15) + "%;top:" + ((((window.screen.height
                        / 2) * 100) / window.screen.height) - 15) + "%;");
                    const hed = window.document.createElement("div");
                    hed.setAttribute("id", "divHeader");
                    hed.innerHTML = tit;
                    const mss = window.document.createElement("div");
                    mss.setAttribute("id", "divMessage");
                    mss.innerHTML = msn;
                    const cnt = window.document.createElement("div");
                    cnt.setAttribute("id", "divControl");
                    const btn = window.document.createElement("input");
                    btn.setAttribute("id", "btnAccept");
                    btn.type = "button";
                    btn.value = "Aceptar";
                    pop.appendChild(hed);
                    pop.appendChild(mss);
                    cnt.appendChild(btn);
                    pop.appendChild(cnt);
                    window.document.body.appendChild(scr);
                    window.document.body.appendChild(pop);
                    btn.addEventListener("click", function () {
                        scr.remove(window.document.body);
                        pop.remove(window.document.body);
                    }, false);
                } catch (err) { build.error(err); }
            }
        },
        /* Generate exception's to error solve analytic's */
        error: function (err) {
            err = "undefined" != err ? err.toString() : "null";
            switch (err) {
                case "TypeError":
                    throw new TypeError("Error referente con el tipo de dato.").stack;
                    break;
                case "ReferenceError":
                    throw new ReferenceError("Error con la referencia establecida.").stack;
                    break;
                case "SyntaxError":
                    throw new SyntaxError("Error con la syntaxis.").stack;
                    break;
                case "RangeError":
                    throw new RangeError("Error con el rango de tiempo.").stack;
                    break;
                case "EvalError":
                    throw new EvalError("Error relacionado con la evaluacion en la compilacion.").stack;
                    break;
            }
        }
    }
    if (-1 != window.navigator.userAgent.indexOf(nav.length)) { return build; }
}));