import copy from "./copy.js"
import remove from "./delete.js"

const move = async (oldPath, newPath) => {
  await copy(oldPath, newPath)
  await remove(oldPath)
}

export default move
