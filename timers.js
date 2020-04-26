var a=document.getElementById("btn");
var b=document.getElementById('content')
a.onclick=function(){
  if(b.className=="show"){
    b.className="";
    a.innerText="Show"
  }else{
    b.className="show";
    a.innerText="Don not Show"
  }

};
