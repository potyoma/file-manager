import { createReadStream, createWriteStream } from "fs"
import { createBrotliCompress, createBrotliDecompress } from "zlib"
import { pipeline } from "stream/promises"

const createStreams = (read, write) => [
  createReadStream(read),
  createWriteStream(write),
]

const compress = async (file, archive) => {
  const [input, output] = createStreams(file, archive)
  const gzip = createBrotliCompress()
  await pipeline(input, gzip, output)
}

const decompress = async (archive, file) => {
  const [input, output] = createStreams(archive, file)
  const decompressStream = createBrotliDecompress()
  await pipeline(input, decompressStream, output)
}

export { compress, decompress }
