module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"], // Thay đổi './src' thành thư mục gốc của bạn nếu cần
          alias: {
            "@": "./src", // Thiết lập alias cho thư mục src
          },
        },
      ],
    ],
  };
};
