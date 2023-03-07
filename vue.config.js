module.exports = {
  lintOnSave: process.env.NODE_ENV === "development",
  transpileDependencies: ["uview-ui", "luch-request"], // 需要babel-loader转义的第三方依赖
}