var oli = $(".main").children(".nav1").children("ul").children("li");
var oul = $(".main").children(".nav1").children("ul");
var op = $(".main").children(".main-r").children(".navboxs").children(".navbox");
		for(let i=0;i<oli.length;i++){
			oli.eq(i).mousemove(function(){
				for(var j=0;j<oli.length;j++){
					op.eq(j).css({display:"none"});
				}
				op.eq(i).css({display:"block"});
			})
			oul.mouseout(function(){
				op.eq(i).mousemove(function(){
				op.eq(i).css({display:"block"});
					op.eq(i).mouseout(function(){
				    op.eq(i).css({display:"none"});
					
				})
				})
				op.eq(i).css({display:"none"});
			})
		}