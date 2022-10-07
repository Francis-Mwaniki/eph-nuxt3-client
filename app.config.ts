export default defineAppConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api/user/register": {
        target: "http://localhost:3000",
      },
      "/api/user/login": {
        target: "http://localhost:3000",
      },
    },
  },
});
