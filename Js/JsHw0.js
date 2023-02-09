function chengeImage(){
    var element=document.getElementById('JSimg01')
    if(element.src.match("gold")){
        element.src="PNG/home_work_black_24dp.png";
    }

    else{
        element.src="PNG/goldmedal.png";
    }
}

function myFunction(){
	document.getElementById("click01").innerHTML="Click the icon below the practice";
}


// 修改时注意大小写敏感！！！！！！
// // Uncaught ReferenceError ReferenceError: chengeImage is not defined
// at onclick (c:\Users\felix\Desktop\light house\2021.1\2023.2.5\A23_2_5Hw\index_2_5_Hw0.html:15:152)
