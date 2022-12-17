const copy = async (from, to) => {
  if (!(await exists(from)) || (await exists(to)))
    throw Error("FS operation failed")

  await fs.mkdir(to)
  const dir = await fs.opendir(from)
  await applyToAllFiles(
    dir,
    async entry =>
      await fs.copyFile(join(from, entry.name), join(to, entry.name))
  )
}
