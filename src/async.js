import fs from 'fs'

export default file => {
    console.log('Asincrono')

    fs.readFile(file, (err, contents) => {
        if(err) {
            return console.log(err)
        }
    
        const lines = contents.toString().split('\n')
    
        for(let line of lines) {
            console.log(`numero de caracteres por linea: ${line.length}`)
        }
    
        console.log(`numero total de lineas: ${lines.length}`)
    })
    
    console.log(`fichero seleccionado ${file}`)
}