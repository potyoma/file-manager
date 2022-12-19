import os from "os"

const getEol = () => JSON.stringify(os.EOL)

const getCpus = () => {
  const res = os.cpus()
  const { length: count } = res
  const toGhz = speed => Math.round(speed / 1000)
  const cpusData = res.reduce(
    (acc, curr) => acc + `${curr.model} - ${toGhz(curr.speed)} GHz\n`,
    `Total: ${count}\n`
  )
  return cpusData
}

const getHomedir = () => os.homedir()

const getUsername = () => os.userInfo().username

const getArchitecture = () => os.arch()

export { getEol, getCpus, getHomedir, getUsername, getArchitecture }
