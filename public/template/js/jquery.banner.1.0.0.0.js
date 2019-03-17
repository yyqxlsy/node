;(function($){
	"use strict";
	$.extend($.fn,{
		banner:function(options){
			this.LOCAL = {
				autoPlay : options.autoPlay === false ? false:true,
				moveTime : options.moveTime || 300,
				delayTime : options.delayTime || 3000,
				index : 0,
				iprev:options.items.length - 1,
                listOnoff:false,
				
			};
			//list
			var that = this;
			if(options.list != undefined && options.list.length >0){
				options.list.eq(0).css("background","#fff");
                this.LOCAL.listOnoff = true;
				
				this.LOCAL.listMove = function(i,type){
					options.items.eq(that.LOCAL.index).css({left:0})
					.stop().animate({
						left:-options.items.eq(0).width()*type
						})
						.end().eq(i).css({left:options.items.eq(0).width()*type})
						.stop().animate({left:0});
				}
				options.list.on("click",function(){
					if(that.LOCAL.index < $(this).index()){
						that.LOCAL.listMove($(this).index(),1);
					}
					if(that.LOCAL.index > $(this).index()){
						that.LOCAL.listMove($(this).index(),-1);
					}
//					if(that.LOCAL.index == $(this).index()){
//						console.log("不动");
//					}
					that.LOCAL.index = $(this).index();
					options.list.css("background","").eq(that.LOCAL.index).css("background","#fff");
				})
			}
			
			//btn
			this.LOCAL.btnMove = function(type){
		    		options.items.eq(that.LOCAL.iprev).css({
                        left:0
                    }).stop().animate({
                        left:options.items.eq(0).width() * type
                    },that.LOCAL.moveTime).end().eq(that.LOCAL.index).css({
                        left:-options.items.eq(0).width() * type
                    }).stop().animate({
                        left:0
                    },that.LOCAL.moveTime)
                    if(that.LOCAL.listOnoff){
                        options.list.css("background","none").eq(that.LOCAL.index).css("background","#fff")
                    }
                }
		    this.LOCAL.rightClick = function(){
		    	if(that.LOCAL.index == options.items.length - 1){
		    	   	    that.LOCAL.index = 0;
		    	   	    that.LOCAL.iprev = options.items.length - 1;
		    	     }else{
		    	   	    that.LOCAL.index++;
		    	   	    that.LOCAL.iprev = that.LOCAL.index-1;
		    	     }
                    that.LOCAL.btnMove(-1)
		    }
		    if(options.left != undefined && options.left.length >0 && options.right != undefined && options.right.length >0){
		    	

                  
//		    	}
		    	options.left.on("click",function(){
		    	  if(that.LOCAL.index == 0){
		    	   	    that.LOCAL.index = options.items.length - 1;
		    	   	    that.LOCAL.iprev = 0;
		    	     }else{
		    	   	    that.LOCAL.index--;
		    	   	    that.LOCAL.iprev = that.LOCAL.index+1;
		    	     }
                    that.LOCAL.btnMove(1)
		    	})
		    	options.right.on("click",this.LOCAL.rightClick)
		    }
		
		    
		    //auto
		    if(this.LOCAL.autoPlay){
		    	this.LOCAL.timer = setInterval(this.LOCAL.rightClick,this.LOCAL.delayTime)
		    	 this.hover(function(){
		    	 	clearInterval(that.LOCAL.timer);
		    	 },function(){
		    	 	that.LOCAL.timer = setInterval(that.LOCAL.rightClick,that.LOCAL.delayTime)
		    	 })
		    }
		    
		    
	   }
	})
})(jQuery);
