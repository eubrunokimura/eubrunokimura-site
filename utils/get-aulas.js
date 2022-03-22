import fs from 'fs'

const getAulas = (dirPath, arrayOfFiles) => {

    const cursos = fs.readdirSync(dirPath)
    const paths_files = arrayOfFiles || []

    cursos.forEach((file) => {
        if (fs.statSync(dirPath + '/' + file).isDirectory()) {
            arrayOfFiles = getAulas(dirPath + '/' + file, paths_files)
        } else {
            // console.log(dirPath)
            const slug = dirPath.split('/').slice(-1)[0]
            // console.log(slug)
            const obj = {
                params: {
                    slug: slug,
                    aula: file.replace('.md', '')
                }
            }
            arrayOfFiles.push(obj)
        }
    })

    // console.log(arrayOfFiles)
    // [{ params: { slug: 'html-basico', aula: 'aula-1' } }]
    return arrayOfFiles
}

export default getAulas