import { createReadStream, createWriteStream } from "fs"
import { createGzip, createGunzip } from "zlib"

const createStreams = (read, write) => [
  createReadStream(read),
  createWriteStream(write),
]

const compress = async (file, archive) => {
  const [input, output] = createStreams(file, archive)
  const gzip = createGzip()
  input.pipe(gzip).pipe(output)
}

const decompress = async (archive, file) => {
  const [input, output] = createStreams(archive, file)
  const decompressStream = createGunzip()
  input.pipe(decompressStream).pipe(output)
}

export { compress, decompress }
