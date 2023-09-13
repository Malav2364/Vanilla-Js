function mlutiplyBy5(num) {
    this.num =  num
    return num*5
}

mlutiplyBy5.power = 2

console.log(mlutiplyBy5(5));
console.log(mlutiplyBy5.power);
console.log(mlutiplyBy5.prototype);

function createUser(username, score) {
    this.username  = username
    this.score  = score
}

createUser.prototype.increment = function () {
    this.score++
}
createUser.prototype.printMe = function () {
    console.log(`score is ${this.score}`);
}

const malav = new createUser('Chai', 25)
const tea = new createUser('tea', 250)

tea.printMe()