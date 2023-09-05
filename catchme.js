const box=document.getElementById("box");
console.log(box);

box.addEventListener("mouseover",()=>{
    // box.style.marginLeft="200px";
    let n=Math.floor(Math.random()*500);
    console.log(n);
   box.style.margin=n+"px";
//    box.style.marginRight=n+"px";
})
