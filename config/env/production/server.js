module.exports = ({ env }) => ({
  url: env("MY_BLUE_OCEAN_URL"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
  },
});
