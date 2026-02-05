module.exports = {
  apps : [{
    name: "practica-cluster",
    script: "./no-cluster.js",
    instances: 0,
    exec_mode: "cluster"
  }]
}
