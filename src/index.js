import mongoose from 'mongoose'

const host = 'mongodb://127.0.0.1:27017/films'

mongoose.set('debug', true)
mongoose.Promise = global.Promise

const conn = mongoose.createConnection(host, {poolSize: 200})

conn.on('error', err => {
    console.log('Error', err)
    return process.exit()
})

conn.on('connected', () => console.log('Conectado a mongo'))

const filmSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        title: { type: String, trim: true, required: true },
        poster: { type: String, trim: true, required: true}
    },
    {
        strict: false
    }
)

const Film = conn.model('Film', filmSchema)
const newDocument = new Film({
    _id: new mongoose.Types.ObjectId(),
    title: 'Star Wars: The last Jedi',
    poster: "https://i.pinimg.com/736x/59/b9/52/59b952a23b0fd474a15af76af7e71bfb.jpg"
})

newDocument.save(err => {
    if(err){
        throw err
    }
    console.log('Almacenado')
})
// import http from 'http'
// import fs, { readFile } from 'fs'
// import path from 'path'

// const file = './src/index.html'

// const server = http.createServer((request, response) => {
//     let filePath = request.url
//     if(filePath === '/') {
//         filePath = 'index.html'
//     }
//     filePath = `./src/${filePath}`

//     const extname= path.extname(filePath)

//     let contentType
//     switch (extname) {
//         case '.css':
//             contentType = 'text/css'
//             break;
//         case '.html':
//             contentType = 'text/html'
//     }

//     response.writeHead(200, {'Content-Type': `${contentType}; charset=UTF-8`})
//     fs.readFile(filePath, (err, content) => {
//         if(err) {
//             return console.log(err)
//         }
//         response.write(content)
//         return response.end()
//     })
    // response.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'})
    // readFile(file, (err, content) => {
    //     if(err) {
    //         return console.log(err)
    //     }

    //     response.write(content)
    //     response.end()
    // })
    // // response. writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'})
    // if(request.method === 'GET') {
    //     response.write('<h1>Metodo no permitido</h1>')
    //     return response.end()
    // }
    // response.write('<h1>Curso de node de openwebinars!<h1>')
    // return response.end()
// })

// server.listen(8000, 'localhost', err => {
//     if(err) {
//         return console.log('error: ', err)
//     }

//     console.log('server abierto en localhost:8000')
// })

// console.log('Hola')

// process.on('unhandledRejection', (err, p) => {
//     console.log(`custom unhandleRejection ${err}`)
// })

// process.on('uncaughtException', (err) => {
//     console.log(`custom uncaughtException ${err}`)
// })

// Promise(resolve => JSON.parse({color: 'blue'}))


// import net from 'net'

// const server = net.createServer(socket => {
//     socket.on('data', data => {
//         console.log(data.toString())
//         socket.write('Mundo?')
//     })
// })

// server.on('error', () => console.log('se ha producido un error'))

// server.listen( {
//     host: 'localhost',
//     port: 8000,
//     exclusive: true
// }, () => console.log(`servidor socket abierto en ${server.address()}`))

// import readline from 'readline'
// import async from './async'
// import events from './events'

// const file = process.argv[2]

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question(
//     `como quieres leer el fichero?
//     1. de forma asyncrona (default)
//     2. con eventos
//     seleccione una opción: `,
//     value => {
//         console.log(`selecciono ${value}\n\n`)

//         switch(value) {
//             case '2':
//                 events(file)
//                 break;
//             case '1':
//             default:
//                 async(file)
//         }

//         rl.close()
//     }
// )