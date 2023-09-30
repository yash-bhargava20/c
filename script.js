const messagebar=document.querySelector(".bar input");
const sendBtn=document.querySelector(".bar button");
const messagebox=document.querySelector(".message");

let Api_URL="https://api.openai.com/v1/chat/completions";
let Api_Key="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";


sendBtn.onclick=function(){
    if(messagebar.value.length >0){
        //console.log("send message");
        const userTypeMessage=messagebar.value;
        messagebar.value="";

        let message=
        `<div class="chatmessage">
        <img src="C:\Users\bharg\OneDrive\Pictures\Screenshots\Screenshot 2023-09-29 212112.png" >
        <span>${userTypeMessage}</span>
    </div>`;

    let response=`<div class="chatresponse">
    <img src="C:\Users\bharg\OneDrive\Pictures\Screenshots\Screenshot 2023-09-28 222636.png">
    <p class="new">...</p>
</div>`

    messagebox.insertAdjacentHTML("beforeend",message);
       
    setTimeout(() => {
        messagebox.insertAdjacentHTML("beforeend",response);

        const request={
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${Api_Key}`
            },
            body:JSON.stringify({
                "model":"gpt-3.5-turbo",
                
                "messages":[{"role": "user", "content": userTypeMessage}]
            })
        }
        
        fetch(Api_URL,request).then(res => res.json()).then(data => {

            

            //const ChatbotResponse = document.querySelector(".response .new");
            //ChatbotResponse.innerHTML=data.choices[0].message.content;
            //ChatbotResponse.classList.remove("new");
            console.log(data);
        }).catch((error) => {
            //ChatbotResponse.innerHTML="Opps! An error occured. Please try again"
            console.log(error);
        })
    },100);

    }
}