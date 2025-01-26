const EventEmiiter = require("events");

const emitter = new EventEmiiter();

emitter.on("greet", ()=>{
    console.log("hello world")
})

emitter.emit('greet');


// You can also pass argument to the function

emitter.on("Add", (a,b)=>{
    console.log(a+b);
})

emitter.emit("Add",10,20)

emitter.on("printMyName", (name)=>{
    console.log(`hello ${name}`)
})

emitter.emit("printMyName", "soni")


//You can pass arguments as single object as below


emitter.on("Greet", ({name, designation})=>{
    console.log(`Hello am  ${name} . I am ${designation}`)
})

emitter.emit("Greet", {name:"soni", designation:"Software Engineer"})


emitter.on("Greet2", (args)=>{
    console.log(`Hello am  ${args.name} . I am ${args.designation}`)
})

emitter.emit("Greet2", {name:"soni", designation:"Software Engineer"})