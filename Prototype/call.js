function setUsrname(username) {
    //db calls complex
    this.username =  username
    console.log("called")
}

function createUser(username, email, password) {
    setUsrname.call(this, username)

    this.email = email
    this.password = password
}

const ms = new createUser('malav', 'malav@123', '123')
console.log(ms);