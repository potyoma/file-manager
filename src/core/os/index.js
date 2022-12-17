import os from "os"

const getEol = () => JSON.stringify(os.EOL)

const getCpus = () => os.cpus()

const getHomedir = () => os.homedir()

const getUsername = () => os.userInfo().username

const getArchitecture = () => os.arch()

const funcs = [getEol, getCpus, getHomedir, getUsername, getArchitecture]

funcs.forEach(f => console.log(f?.()))
