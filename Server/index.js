//1> import jsonfile
const jsonServer = require('json-server')

//2> server creation
const mediaplayerServer = jsonServer.create()

//5> Middleware is a function which have ability to break the request response cycle.
//middleare to parse json format
//defaults
const middleare = jsonServer.defaults()

//7>set up path to store data.
const router = jsonServer.router("db.json")

//6> use middleeare

mediaplayerServer.use(middleare)
mediaplayerServer.use(router)


//3> set port for the server
const PORT = 4000 || process.env.PORT

//4> Make the server listen to that port  from front roresolving the request

mediaplayerServer.listen(PORT,()=>{
    console.log(`Server Running successfull at PORT no ${PORT}`)
})

