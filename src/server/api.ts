import axios, {
  AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
//导入状态管理数据
import { useAppStore } from "@/store/modules/user";
const store = useAppStore();
// 数据返回的接口
// 定义请求响应参数，不含data 可根据后台数据结构修改
interface Result {
  code: number;
  msg: string;
}
// 请求响应参数，包含data
interface ResultData<T = any> extends Result {
  data?: T;
}

// const URL = process.env.VUE_APP_API_HOST; //根据运行环境动态获取请求地址地，注意：地址后面不需要加 / ，axios会自动添加
const URL = "/api"; //api为代理模式，解决开发环境接口请求跨域问题
enum RequestEnums {
  TIMEOUT = 20000,
  OVERDUE = 401, // 登录失效
  SUCCESS = 200, // 请求成功
}
const config = {
  // 默认地址
  baseURL: URL as string,
  // 设置超时时间
  timeout: RequestEnums.TIMEOUT as number,
  // 跨域时候允许携带凭证
  withCredentials: true,
};

class RequestHttp {
  // 定义成员变量并指定类型
  service: AxiosInstance;
  public constructor(config: AxiosRequestConfig) {
    // 实例化axios
    this.service = axios.create(config);
    /**
     * 请求拦截器
     * 客户端发送请求 -> [请求拦截器] -> 服务器
     * token校验(JWT) : 接受服务器返回的token,存储到vuex/pinia/本地储存当中
     */
    this.service.interceptors.request.use(
      (config: any) => {
        const token = store.token || "";
        return {
          ...config,
          headers: {
            AccessKey: token, // 请求头中携带token信息
          },
        };
      },
      (error: AxiosError) => {
        // 请求报错
        Promise.reject(error);
      }
    );
    /**
     * 响应拦截器
     * 服务器换返回信息 -> [拦截统一处理] -> 客户端JS获取到信息
     */
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data } = response; // 解构返回数据结构状态
        if (data.code === RequestEnums.OVERDUE) {
          // 登录信息失效，应跳转到登录页面，并清空本地的token
          store.setToken(""); //清空状态管理的token
          localStorage.setItem("token", "");
          // router.replace({  path: '/login' }) 有需要的可以在这里跳转登录页面
          return Promise.reject(data);
        } // 全局错误信息拦截（防止下载文件得时候返回数据流，没有code，直接报错）
        if (data.code && data.code !== RequestEnums.SUCCESS) {
          return Promise.reject(data);
        }
        return data;
      },
      (error: AxiosError) => {
        const { response } = error;
        if (response) {
          this.handleCode(response.status);
        }
        if (!window.navigator.onLine) {
          console.log("网络连接失败");
        }
      }
    );
  }
  handleCode(code: number): void {
    switch (code) {
      case 401:
        console.log("登录状态失效，请重新登录");
        break;
      default:
        console.log("请求失败");
        break;
    }
  }
  // 常用方法封装
  get<T>(url: string, params?: object): Promise<ResultData<T>> {
    return this.service.get(url, { params });
  }
  post<T>(url: string, params?: object): Promise<ResultData<T>> {
    return this.service.post(url, params);
  }
  put<T>(url: string, params?: object): Promise<ResultData<T>> {
    return this.service.put(url, params);
  }
  delete<T>(url: string, params?: object): Promise<ResultData<T>> {
    return this.service.delete(url, { params });
  }
}

// 导出一个实例对象
export default new RequestHttp(config);
