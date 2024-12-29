let btn=document.querySelector("#bt");
btn.addEventListener("click",()=>{
    let uC="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let num="0123456789";
    let symb="@$_!~^&";
    let lC="abcdefghijklmnopqrstuvwxyz";
    allChar=uC+num+symb+lC;
    let length=8;
    let pass="";
    pass+=uC[Math.floor(Math.random()*uC.length)];
    pass+=lC[Math.floor(Math.random()*lC.length)];
    pass+=num[Math.floor(Math.random()*num.length)];
    pass+=symb[Math.floor(Math.random()*symb.length)];

    while(length>pass.length)
    {
        pass+=allChar[Math.floor(Math.random()*allChar.length)];
    }
    document.querySelector("#password").value=pass;
});
let copy=document.querySelector("#c");
function l(){
    let i=document.querySelector("password");
    
    
}