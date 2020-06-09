if(typeof(Storage)!=="undefined")
{

localStorage.setItem("lastName","");
document.getElementById("Result").innerHTML=localStorage.getItem("lastname");
}
else{

    document.getElementById("result").innerHTML="Sorry, your browser does not support web storage...";
}