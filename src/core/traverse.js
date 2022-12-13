import { join } from "path"

const traverse = path => current => join(current, path)

const traverseUp = traverse("..")

export { traverse, traverseUp }
