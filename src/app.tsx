// 运行时配置

import { message } from 'antd';
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate

export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout = () => {
  return {
    // logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: true,
    },
  };
};
export const request = {
  requestInterceptors: [
    (url: any, options: { headers: any }) => {
      // const currentLanguage = i18next.language;
      return {
        url,
        options: {
          ...options,
          headers: {
            ...options.headers,
            // lang: currentLanguage, // 将语言添加到请求头中
          },
        },
      };
    },
  ],
  responseInterceptors: [
    // 错误处理的拦截器
    [
      (response: any) => {
        return response;
      },
      (error: any) => {
        const { response } = error;

        // 检查错误状态码
        if (response && response.status === 401) {
          // 跳转到登录页
          // history.push('/login');
          return;
        }

        const errorMessage = response?.data?.Msg || '请求失败';

        message.error({
          content: errorMessage,
          key: 'error-message',
        });
        // 抛出服务端的错误信息
        return Promise.reject();
      },
    ],
  ],
};
