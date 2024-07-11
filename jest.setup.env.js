const env = require('./.env.dev.json')

for (const v in env) {
  process.env[v] = env[v]
}
