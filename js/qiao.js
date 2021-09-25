// JavaScript Document
var Dianji=0;
window.onload=function(){
	var buhao = document.getElementById("buhao");
	var hao = document.getElementById("hao");
	buhao.onclick=function(){
		Dianji++;
		if(Dianji==1){
	   			alert("Бәлкім тағы да ойланып көрерсің");
	   }else if(Dianji==2){
		   		alert("Сен мен кездестірген ең сұлу жансың");
		   		
	   }else if(Dianji==3){
		   		alert("Тамақты өзім жасап беремін");
		   		
	   }else if(Dianji==4){
		   		alert("Жұмыстан ерте қайтамын");
		   		
	  }else if(Dianji==5){
		   		alert("Үйді сенің атыңа жазамын");
	  }else if(Dianji==6){
		   		alert("Зарплатамды толығымен саған беремін");
		  		Dianji=1;
	  }

	}
	hao.onclick=function(){
		alert("Иә дейтініңді білгем, Мен сені жақсы көрем");
	}
	

}