import { join } from "path"

const move = path => current => join(current, path)

const moveUp = move("..")

export { move, moveUp }
