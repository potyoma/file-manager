import { Transform } from "stream"
import { OPERATION_FAILED } from "../constants.js"
import { handleCommand } from "./handleCommand.js"

const prepareChunk = chunk => chunk.toString().split(" ")

const transformResponse = (append, storage) =>
  new Transform({
    transform: async (chunk, encoding, callback) => {
      const preparedChunk = prepareChunk(chunk)

      try {
        const response = await handleCommand(
          storage,
          preparedChunk[0],
          ...preparedChunk.slice(1)
        )
        callback(null, `${response ?? ""}\n${append()}\n`)
      } catch {
        callback(null, `${OPERATION_FAILED}\n`)
      }
    },
  })

export { transformResponse }
