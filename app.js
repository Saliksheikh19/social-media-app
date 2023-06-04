const show = ()=>{
    const shows = document.querySelector("#signupwwwww")
 
    shows.classList.add("show")
    shows.classList.remove("remove")
    
}

// function closeFunc(){
//     const shows = document.querySelector("#signupwwwww")
//     shows.classList.add("remove") 
// }

// let date=document.querySelector("#date")
// let month=document.querySelector("#month")
// let year=document.querySelector("#year")
// let gender;
// console.log(date.value)

const Email = document.querySelector("#email");
const password = document.querySelector("#pass");
 const LoginEmail=document.querySelector("#loginemail")
 const LoginPass=document.querySelector("#loginpass")
 const Fullname=document.querySelector("#fullname")

const users = JSON.parse(localStorage.getItem('users')) || []

console.log(users)

function LoginHandler(){
    
        console.log(LoginEmail.value)
        console.log(LoginPass.value)
    
        if(!LoginEmail.value || !LoginPass.value) return alert("Please write email and password to continue")
    
        const userFound = users.filter((user) => {
            console.log("user email in userFound filter", user.email)
            return user.email === LoginEmail.value
        })
    
        console.log(userFound, "MILGYAA")
    
        if(!userFound.length) return alert("This user is not registered, kindly create an account first")
    
    
        console.log(LoginPass.value, " login password of input")
        console.log(userFound.password, "user password from local storage")
    
        if(userFound[0].password == LoginPass.value) {
            alert("user is logging in")
            
            localStorage.setItem('isLoggedInUser', JSON.stringify(userFound[0]))
    
    
            window.location.href="./main/main.html";
    
    
        } else {
            alert("password is incorrect")
        }
    }



function SignUp(){

    const userFound = users.filter((user)=>{
        return user.email === Email.value
    })
    console.log(userFound)

    if (userFound.length) return alert("Email address already in use, please use another email address")
    if ( Email.value !== "" && password.value !== "" &Fullname.value!=="" ) {
        if (password.value.length < 8) return alert("password should contain 8 characters")

        const userObj = {
            
            password: password.value,
            
            email: Email.value,
            Fullname: Fullname.value,
         
        }
        console.log(userObj)



        users.push(userObj)

        localStorage.setItem('users', JSON.stringify(users))

        alert("User signup successfully")

       
        Email.value = ""
        password.value = ""
        Fullname.value = ""
       





    } else {
        alert("insaan ban k saari fields fill up karlo")
    }
}



function BackHandler(){
    window.location.href="login/login.html"
}