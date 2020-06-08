

 let page=document.getElementById("page");
 let submit=document.getElementById("submit-btn");
 let txtarea=document.getElementById("txt-area");
 
 submit.addEventListener("click",onClick);
 function onClick(){
     page.innerHTML =`<p>${txtarea.value}</p>`;
     // save content to data base
     // call email service to send out the newsletter to all subscribers
 }
   