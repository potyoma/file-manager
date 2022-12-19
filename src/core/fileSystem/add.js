import { exists } from "./utils.js"
import fs from "fs/promises"
import { join } from "path"

const add = async (path, fileName) => {
  if (!(await exists(path))) throw Error("Invalid path")

  const filePath = join(path, fileName)

  if (await exists(filePath)) throw Error("File exists")

  await fs.writeFile(filePath, "")
}

export default add
