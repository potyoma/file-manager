import { exists } from "./utils.js"

const cat = async path => {
  if (!(await exists(path))) throw Error("Invalid path")
  return await fs.readFile(fileToRead, "utf8")
}

export default cat
