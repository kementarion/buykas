#!/usr/bin/env node
import { run } from '../src/cli.js'

run().catch((error) => {
  process.stderr.write(`\nopenpress error:\n${error.stack || error}\n`)
  process.exitCode = 1
})
