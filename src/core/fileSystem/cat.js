import { exists } from "./utils.js"
import { createReadStream } from "fs"

const cat = async path => {
  if (!(await exists(path))) throw Error("Invalid path")
  const read = createReadStream(path, "utf-8")
  read.on("data", chunk => console.log(chunk))
}

export default cat
