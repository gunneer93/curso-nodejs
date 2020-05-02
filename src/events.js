import fs from 'fs'
import readline from 'readline'

export default file => {
    console.log('Eventos')

    let lines = 0

    console.log(`fichero seleccionado: ${file}\n`)

    const rl = readline.createInterface({
        input: fs.createReadStream(file),
        crlfDelay: Infinity
    })

    rl.on('line', line => {
        ++lines
        console.log(`numero total de caracteres por linea: ${line.length}`)
    })

    rl.on('close', () => console.log(`numero total de lineas: ${lines}`))
}