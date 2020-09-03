var userDatabase = [{
        username: "yipwang",
        password: "wyp1999"
    },
    {
        username: "Bob",
        password: "1234"
    },
    {
        username: "Jason",
        password: "wyp6666"
    },
]

function getInfo() {
    var username = document.querySelector("#username").value;
    var password = document.querySelector("#pwd").value;
    // console.log("username: " + username + "password" + password);
    for (const user of userDatabase) {
        if (username === user.username && password === user.password) {
            console.log(username + "is log in!")
        }
    }
}