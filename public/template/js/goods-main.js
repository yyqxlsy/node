
import {ajaxGet} from "../libs/ajax.3.0.js";
import {setCookie,getCookie} from "../libs/cookie.js";
import {Goods} from "../module/goods.js";


new Goods({
    cont:document.getElementById("cont"),
    url:"/api/product?dataName=data",
    // url:"/admin/details/get_list",
    method:{
        ajaxGet:ajaxGet,
        setCookie:setCookie,
        getCookie:getCookie
    }
})