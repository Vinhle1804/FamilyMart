module.exports = {
  apps : [{
    name   : "familymart",
    script : "serve",
    env: {
    PM2_SERVE_PATH: '.',
    PM2_SERVE_PORT: 3000
  }
  }]
}
