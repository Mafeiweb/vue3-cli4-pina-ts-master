import axios from "../api"; // 导入接口配置
/**
 * 登录
 * @param params
 * @returns
 */
export const UserLogin = async (params: any) => {
  return await axios.post("User/UserLogin", params);
};
/**
 * 获取用户信息
 * @param params
 * @returns
 */
export const UserInfo = async (params: any) => {
  return await axios.get("User/UserInfo", params);
};
