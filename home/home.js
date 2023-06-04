const isLoggedInUser = JSON.parse(localStorage.getItem('isLoggedInUser'))

console.log(isLoggedInUser, "==>>isLoggedInUser")

const emailAddress = document.getElementById("emailAddress")
const userName = document.getElementById("userName")
emailAddress.innerText = isLoggedInUser.email
userName.innerText = isLoggedInUser.Fullname
const postInputBox = document.getElementById("postInputBox")
const postArea = document.getElementById("postAreaId")
const postdes = document.getElementById("des")
const users = JSON.parse(localStorage.getItem('posting-data')) 

const inputfile = document.getElementById("input-pic")
const Fullname =  isLoggedInUser.Fullname
const date = new Date()
const c = date.getHours()
console.log(c)
const show = ()=>{
    const shows = document.querySelector("#signupwwwww")
 
    shows.classList.add("show")
    shows.classList.remove("remove")

    
}

function closeFunc(){
    const shows = document.querySelector("#signupwwwww")
    shows.classList.add("remove") 
}





function uploadHandler(){
    console.log(postArea)
    console.log(postInputBox)
    console.log(postdes.value)
    
    var div = document.createElement('div')
    div.setAttribute('class', 'post my-5 bg-light rounded')

    div.innerHTML = ` <div class="authorDetails d-flex ">
    <img src="../assets/png-transparent-login-computer-icons-avatar-icon-monochrome-black-silhouette.png" alt="" class="profilePicture">
    <div>
        <h4 style="font-size: 15px; padding-top:16px;padding-left:6px; color:black;">${Fullname}</h4>
        
        <h6 style="font-size: 10px; padding-left:6px ; color:black;" >Uploaded at ${c}pm</h6>
    </div>
</div>
<div class="postData">
    <h4  style="color:black"; font-weight:bold; >
        ${des.value}
    </h4>
    <img src="${URL.createObjectURL(inputfile.files[0])}" alt="" id="post-pic"  class="img-fluid">
</div>`

const userObj = {
    username: Fullname,
    postdes:  postdes.value
}
console.log(userObj)



users.push(userObj)

localStorage.setItem('posting-data', JSON.stringify(users))



    postArea.appendChild(div)
    closeFunc()
    postdes.value=""
    inputfile.value=""


}


// ${postpic.src=URL.createObjectURL(inputfile.files[0])}

