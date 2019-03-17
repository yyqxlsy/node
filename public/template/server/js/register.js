class Register{
        constructor(){
            this.url = "http://www.liyangyf.com/ctrl/register.php";

            this.init();
        }
        init(){
        	var that = this;
        	$("#btn").click(function(){
        		that.load();
        	})
        }
        load(){
        	$.ajax({
        		url:this.url,
        		data:{
        			tel:$("#user").val(),
        			pass:$("#pass").val()
        		},
        		success:function(res){
        			switch(res){
        				case "0":$("#msg").html("重名");break;
        				case "1":$("#msg").html("注册成功，3秒后跳转登录界面");
        				         setTimeout(()=>{
        				         	location.href = "login.html";
        				         },3000);break;
        				case "2":$("#msg").html("不允许为空");break;
        				                           
        			}
        		},
        		beforeSend:function(){
        			$("#msg").html("<img src='loading.gif'>");
        		}
        	})
        }
    }

    new Register()