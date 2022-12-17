import fs from "fs/promises"

import EntryType from "../enums/entryType.js"
import { exists, applyToAllFiles } from "./utils.js"

const list = async path => {
  if (!(await exists(path))) throw Error("Invalid path")

  const entries = []

  const dir = await fs.opendir(path)

  await applyToAllFiles(dir, entry =>
    entries.push({
      name: entry.name,
      type: entry.isDirectory() ? EntryType.directory : EntryType.file,
    })
  )

  return entries
}

export default list
