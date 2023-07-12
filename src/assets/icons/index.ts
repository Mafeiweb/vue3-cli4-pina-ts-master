// 获取当前目录所有为.svg的文件
const req = require.context("./svg", false, /\.svg$/);

// 解析获取的.svg文件的文件名称并返回
const requireAll = (requireContext: any) => {
  return requireContext.keys().map(requireContext);
};
requireAll(req);
