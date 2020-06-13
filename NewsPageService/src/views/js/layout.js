$(document).ready(function(){
    $("#button").click(function(){
      var subEmail = document.querySelector("#email").value;
      let subLabel=document.querySelector("#subId");
      let endpoint ="https://newsletter.microapi.dev/newspage/sendsubscription";
      fetch(endpoint,{
        method:"POST",
        body:JSON.stringify({email:subEmail}),
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }
      })
      .then(res=>{
        subLabel.innerText="Your subscription was added";
        console.log(res);
      }).catch(err=>{
        console.log(err);
        subLabel.innerText=res.message;
        console.log(res);
      })
    });
  });