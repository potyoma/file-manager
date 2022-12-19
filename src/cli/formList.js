import list from "../core/fileSystem/list.js"

const formList = async path => {
    const filesList = await list(path)
    return console.table(filesList)
}

export default formList