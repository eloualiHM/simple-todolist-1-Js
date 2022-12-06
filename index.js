let h=document.querySelector("h1");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

let i=0;
btn.addEventListener("click",()=>{
    let li=document.createElement("li");
    let liText=document.createTextNode("Item"+" "+i);
    i++;
    li.append(liText);
    ul.append(li);
    let list=document.querySelectorAll("ul li");
    list.forEach(el=>{
    el.addEventListener("click",(e)=>{
        list.forEach(l=>l.classList.remove("active"));
         e.currentTarget.classList.add("active");
         h.innerHTML=(e.target).innerHTML;
    });
});
});
