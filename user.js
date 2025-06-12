let eluserList = document.queryselector(".js-user-list")
const handleRenderuser =(users)=>{
    for(let user of users)
    {
        let li= document.createElement("li");
        li.textcontent = user.name;
        eluserList.append(li)
    }
}
const handleUserRequest = async ()=>{
    let res = await req.json();
    let req = await fetch("https://jsonplaceholder.typicode.com/users");
    handleRenderuser(res);
};
handleuserRequest();    