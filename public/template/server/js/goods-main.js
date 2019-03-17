
import {ajaxGet} from "../libs/ajax.3.0.js";
import {setCookie,getCookie} from "../libs/cookie.js";
import {Goods} from "../module/goods.js";


new Goods({
    cont:document.getElementById("cont"),
    url:"js/data.js",
    method:{
        ajaxGet:ajaxGet,
        setCookie:setCookie,
        getCookie:getCookie
    }
})