//console.log($("#main"));
class Detail{
	constructor(options){
		this.main = options.main;
		this.url = options.url;
		
        this.load()
		
	}
	// load(){
    //     var that = this;
    //     $.ajax({
    //         url:this.url,
    //         success:function(res){
	// 			that.res = JSON.parse(res);
	// 			// console.log(that.res)
    //             that.getCookie();
                
    //         }
    //     })
    // }
	//  getCookie(){
    //     this.goodsInf = JSON.parse($.cookie("goodsInf"));
    //     console.log(this.goodsInf)
    //     // 3.渲染页面
    //     this.display()
	// }
	load(){
		var goods=window.location.href.split('?')[1]
		console.log(window.location.href);
		var that = this;
		var obj = {
			name:goods  
		};
		$.ajax({
			type: "POST",
			url: this.url,
			data: obj,
			dataType: "json",
			success: function (msg) {
				that.res = msg;
				// 2.拿cookie的数据
				// that.getCookie()
				console.log(msg)
				this.good = msg;
					// 3.渲染页面
					console.log(this.good)
					that.display()
			}
		});
	}
	display(){
		var str = "";
		for(var i = 0;i<this.res.length;i++){
			// for(var j=0;j<this.goodsInf.length;j++){
			// if(this.goodsInf[this.goodsInf.length-1].id  == this.res[i].goodsId){
				str =`<div class="left" indexid="${this.res[i].goodsId}">
				<img src="${this.res[i].src}"/>
				<span></span>
			    <p></p>
			</div>
			<div class="bbox">
			    <img src="${this.res[i].src}" />
		   </div>
			<div class="right">
				<div class="title">
					<div class="title-l">
						<h1>${this.res[i].name}</h1>
						<span>${this.res[i].Ename}</span>
						<p>${this.res[i].describe}</p>
					</div>
					<div class="title-r">
						<img src="${this.res[i].src1}"/>
					</div>
				</div>
				<div class="price">
					<span>价格</span>
					<span class="money">${this.res[i].price}</span>
				</div>
				<div class="fourButton">
					<div class="num">
						<div class="numbox">
							<input class="txt" type="text" value="1">
						</div>
						<div class="numleft">
							<div class="ttop"><img src="imgs/top.png"/></div>
							<div class="bottom"><img src="imgs/bottom.png"/></div>
						</div>
					</div>
					<em>加入购物车</em>
				</div>
			</div>`;
			//     }
	        // }
        }
		this.main.html(str);
    }
}
new Detail({
	main:$("#main"),
    url:"/admin/details?dataName=data"
    })
