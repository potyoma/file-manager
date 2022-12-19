import fs from "fs/promises"

import EntryType from "../../enums/entryType.js"
import { exists, applyToAllFiles } from "./utils.js"

const sortEntries = files => {
  const sortAlphabeticallyByName = arr =>
    [...arr].sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
  const directories = files.filter(f => f.type === EntryType.directory)
  const filesSelection = files.filter(f => f.type === EntryType.file)
  return [
    ...sortAlphabeticallyByName(directories),
    ...sortAlphabeticallyByName(filesSelection),
  ]
}

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

  return sortEntries(entries)
}

export default list
