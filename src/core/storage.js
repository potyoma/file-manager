import { getHomedir } from "./os/index.js"
import { join, relative } from "path"
import { exists, isFile } from "./fileSystem/utils.js"

const positionStorage = () => {
  const home = getHomedir()
  let current = home

  const move = async path => {
    const difference = relative(home, path)

    current =
      difference.startsWith("..") ||
      !(await exists(path)) ||
      (await isFile(path))
        ? current
        : path

    return current
  }

  const goUp = async () => await move(current, "..")

  const traverse = async path => await move(join(current, path))

  const getCurrent = () => current

  return { home, getCurrent, traverse, goUp }
}

export default positionStorage
