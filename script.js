let name=document.getElementById("Name");
let major=document.getElementById("major");


name.addEventListener("mouseover" ,(change)=>{
    name.innerHTML="<span>This's</span> my name";
    change.target.style.color="";
});

name.addEventListener("mouseleave" ,(change)=>{
    name.innerHTML="Mahmoud <span>Galal</span>";
    change.target.style.color="";
    
});

name.addEventListener("click" ,(change)=>{
    name.innerHTML="Dude! Don't punch";
    change.target.style.color="red";
    
});
