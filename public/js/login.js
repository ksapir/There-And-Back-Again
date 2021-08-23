// login/auth js

const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const loginObj={
        username:document.querySelector("#loginUsername").value,
        password:document.querySelector("#loginPassword").value,
    }
    fetch("/api/users/login",{
        method:"POST",
        body:JSON.stringify(loginObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            console.log("success")
            res.json().then(data=>{
                location.assign(`/profile/${data.id}`)
            })
        } else {
            alert("error!")
        }
    })
})