import crypto from "crypto"

const calcHash = async buffer => {
  const hashBuffer = await crypto.subtle.digest("SHA-256", buffer)

  const asHex = [...new Uint8Array(hashBuffer)]
    .map(h => h.toString(16).padStart(2, "0"))
    .join("")

  return asHex
}

export default calcHash
