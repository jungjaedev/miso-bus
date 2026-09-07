module.exports = {
  apps: [
    {
      name: "miso-bus",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: "3000",
      },
    },
  ],
};
