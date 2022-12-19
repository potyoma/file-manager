import { rm } from "fs/promises"

import { exists } from "./utils.js"

const remove = async path => {
  if (!(await exists(path))) throw Error("FS operation failed")
  await rm(path)
}

export default remove
