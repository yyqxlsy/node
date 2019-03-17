export class Goods{
    constructor(options){
        this.cont = options.cont;
        this.url = options.url;
        this.ajaxGet = options.method.ajaxGet;
        this.getCookie = options.method.getCookie;
        this.setCookie = options.method.setCookie;
        this.load()
        this.addEvent()
    }
    load(){
        var that = this;
        this.ajaxGet(this.url).then(function(res){
//          console.log(res);
            that.res = JSON.parse(res);
//          console.log(that.res);
            that.display()
        })
    }
    display(){
        var str = "";
        this.res.forEach(function(value){
            str +=  `<div class="box" index="${value.goodsId}">
					     <a href="detail.html"><img src="${value.src}"></a>
					     <p class="E-name">${value.Ename}</p>
				         <p class="name">${value.name}</p>
				         <span>${value.price}</span>
				         <em>立即抢购</em>
				    </div>`;
                    
        })
        this.cont.innerHTML = str;
    }
    addEvent(){
        var that = this;
        this.cont.addEventListener("click",function(eve){
            var e = eve || window.event;
            var target = e.target || e.srcElement;
            if(target.nodeName == "EM"){
                that.id = target.parentNode.getAttribute("index");
                that.setGoods()
            }
        })
//      this.cont.on("click","img",function(){
////      	console.log(this);
//          that.idd = $(this).parent().parent().attr("index");
//          console.log(that.idd);
//      	that.setGoods2();
//      })
         this.cont.addEventListener("click",function(eve){
            var e = eve || window.event;
            var target = e.target || e.srcElement;
            if(target.nodeName == "IMG"){
                that.idd = target.parentNode.parentNode.getAttribute("index");
                console.log(that.idd);
                that.setGoods2();
            }
        })
        
    }
    setGoods(){
        this.goods = this.getCookie("goods")==="" ? [] : JSON.parse(this.getCookie("goods"));
        if(this.goods.length < 1){
            this.goods.push({
                id:this.id,
                num:1
            })
        }else{
            var onoff = true;
            for(var i=0;i<this.goods.length;i++){
                if(this.goods[i].id === this.id){
                    this.goods[i].num++;
                    onoff = false;
                    break;
                }
            }
            if(onoff){
                this.goods.push({
                    id:this.id,
                    num:1
                })
            }
        }
        this.setCookie("goods",JSON.stringify(this.goods));
    }
    setGoods2(){
    	this.goodsInf = this.getCookie("goodsInf")==="" ? [] : JSON.parse(this.getCookie("goodsInf"));
    	if(this.goodsInf.length < 1){
    		this.goodsInf.push({
    		id:this.idd
    	})
    	}else{
    		this.goodsInf.push({
    		id:this.idd
    	})
    	}
    	
    	this.setCookie("goodsInf",JSON.stringify(this.goodsInf))
    }
}

