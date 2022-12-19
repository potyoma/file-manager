import { transformResponse } from "./cli/transformResponse.js"
import { pipeline } from "stream/promises"
import { GOODBYE, HELLO, POSITION } from "./constants.js"
import positionStorage from "./core/storage.js"
import process from "process"

const getName = () => process.argv.at(-1).split("=").at(-1)

const initFileManager = async () => {
  const storage = positionStorage()
  const name = getName()

  console.log(HELLO(name))
  console.log(POSITION(storage.getCurrent()))
  const { stdin, stdout } = process

  process.on("exit", () => console.log(GOODBYE(name)))
  process.on("SIGINT", process.exit)

  await pipeline(
    stdin,
    transformResponse(() => POSITION(storage.getCurrent()), storage),
    stdout
  )
}

initFileManager()
