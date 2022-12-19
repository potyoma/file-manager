import { INVALID_INPUT } from "../constants.js"
import {
  getEol,
  getCpus,
  getHomedir,
  getUsername,
  getArchitecture,
} from "../core/os/index.js"

const handleOs = async arg => {
  const actualArg = arg.slice(2)

  switch (actualArg) {
    case "EOL":
      return getEol()
    case "cpus":
      return getCpus()
    case "homedir":
      return getHomedir()
    case "username":
      return getUsername()
    case "architecture":
      return getArchitecture()
    default:
      return INVALID_INPUT
  }
}

export default handleOs
