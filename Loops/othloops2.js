const myObject = {
    js: "javascript",
    cpp: "c++",                       //for object destruction for in loop is used
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ["js", "ruby", "cpp", "py"]

for (const [key, value] in programming) {
    console.log(programming[key])
}