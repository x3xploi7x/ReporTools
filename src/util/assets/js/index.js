/* Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/> Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed. */

/**
 * @parameter <string> Name
 */

import Card from './components/card.js';
import PopUp from './components/popup.js';
import Spinner from './components/spinner.js';
import ToolTip from './components/tooltip.js';

class ReporTools {
    
    toggle(selector, options={}) {
        const parent = document.querySelector(selector);
        options = {}
    }

    date(selector, period) {
        const day = 0;
        const month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        const year = [2015, 2016, 2017, 2018, 2019, 2020, 2021];

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
        }
    }
}
