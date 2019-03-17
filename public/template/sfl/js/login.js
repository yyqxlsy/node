class Login{
        constructor(){
            this.url = "http://www.liyangyf.com/ctrl/login.php";
            this.init()
        }
        init(){
        	var that = this;
        	$("#btn").click(function(){
        		that.load();
        	})
        }
        load(){
        	var that = this;
        	$.ajax({
        		url:this.url,
        		data:{
        			user:$("#user").val(),
        			pass:$("#pass").val()
        		},
        		success:function(res){
        			switch(res){
        				case "0":$("#msg").html("用户名密码不符");break;
        				case "1":$("#msg").html("请重新登录");break;
        				default:that.res = JSON.parse(res);
        				         $("#msg").html("登录成功");
        				         setTimeout(()=>{
        				         	location.href = "car.html";
        				         },1000);
        				         break;
        				         that.display();
        			}
        		},
        		beforeSend:function(){
        			$("#msg").html("<img src='loading.gif'>");
        		}
        	})
        }
        display(){
        	console.log(this.res);
        }
      }


    new Login()