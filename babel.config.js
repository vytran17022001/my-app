module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./*"], // Thay đổi './src' thành thư mục gốc của bạn nếu cần
          alias: {
            "@/": ["./*"], // Thiết lập alias cho thư mục src
            "@": ["./*"],
          },
        },
      ],
    ],
  };
};
