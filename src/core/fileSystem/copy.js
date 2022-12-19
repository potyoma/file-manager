import { createReadStream, createWriteStream } from "fs"
import { pipeline } from "stream/promises"
import { exists } from "./utils.js"

const copy = async (from, to) => {
  if (!(await exists(from)) || (await exists(to)))
    throw Error("FS operation failed")

  const read = createReadStream(from)
  const write = createWriteStream(to)
  await pipeline(read, write)
}

export default copy
