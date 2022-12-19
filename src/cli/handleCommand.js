import formList from "./formList.js"
import cat from "../core/fileSystem/cat.js"
import add from "../core/fileSystem/add.js"
import rename from "../core/fileSystem/rename.js"
import { join } from "path"
import { INVALID_INPUT } from "../constants.js"
import copy from "../core/fileSystem/copy.js"
import move from "../core/fileSystem/move.js"
import remove from "../core/fileSystem/delete.js"
import handleOs from "./handleOs.js"
import calcHash from "../core/hash/index.js"
import { compress, decompress } from "../core/compress/index.js"

const handleCommand = async (storage, command, ...params) => {
  const args = params?.map(p => p.trim())
  const toPathArgs = args => args.map(a => join(storage.getCurrent(), a))

  switch (command.trim()) {
    case "up":
      return await storage.goUp()
    case "cd":
      return await storage.traverse(...args)
    case "ls":
      return await formList(storage.getCurrent())
    case "cat":
      return await cat(join(storage.getCurrent(), ...args))
    case "add":
      return await add(storage.getCurrent(), ...args)
    case "rn":
      return await rename(...toPathArgs(args))
    case "cp":
      return await copy(...toPathArgs(args))
    case "mv":
      return await move(...toPathArgs(args))
    case "rm":
      return await remove(...toPathArgs(args))
    case "os":
      return await handleOs(...args)
    case "hash":
      return await calcHash(...toPathArgs(args))
    case "compress":
      return await compress(...toPathArgs(args))
    case "decompress":
      return await decompress(...toPathArgs(args))
    case ".exit":
      process.exit()
    default:
      return INVALID_INPUT
  }
}

export { handleCommand }
