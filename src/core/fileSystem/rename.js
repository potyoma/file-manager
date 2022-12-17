import { rename as rn } from "fs/promises"

import { exists } from "./utils.js"

const rename = async (oldPath, newPath) => {
  if (!(await exists(oldPath)) || (await exists(newPath)))
    throw Error("FS operation failed")

  await rn(oldPath, newPath)
}

export default rename
