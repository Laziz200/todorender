let elUserList = document.querySelector(".js-user-list");

const handleRenderUser = (users) => {
    for (let user of users) {
        let li = document.createElement("li");
        li.textContent = user.name; 
        elUserList.append(li);
    }
};

const handleUserRequest = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    handleRenderUser(data);
};

handleUserRequest(); 