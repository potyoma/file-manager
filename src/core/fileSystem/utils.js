import { access, readFile } from "fs/promises"

const exists = async path => {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}

const applyToAllFiles = async (dir, fn) => {
  const entry = await dir.read()
  if (!entry) return
  fn?.(entry)
  return await applyToAllFiles(dir, fn)
}

const applyToFile = async (path, fn) => {
  const buffer = await readFile(path)
  return fn?.(buffer)
}

export { exists, applyToAllFiles, applyToFile }
