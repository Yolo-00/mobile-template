
const devApi = "http://192.168.0.112:8080";

const prodApi = "http://myapt.cn:8080";

export const imgUrl = "/static/image";

// 关注公众号
export const weChatUrl = "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzg4MDkzMzg3OQ==#wechat_redirect";

// 小程序
// export const { miniProgram: envData } = uni.getAccountInfoSync();

// export function getEnv() : string {
// 	switch (envData.envVersion) {
// 		case "develop":
// 			return devApi
// 		default:
// 			return devApi
// 	}
// }
const CONFIG = {
	// 开发环境配置
	development: {
		assetsPath: '/static/image', // 静态资源路径
		baseUrl: devApi, // 后台接口请求地址
		hostUrl: 'http://192.168.0.116:5173', // H5地址(前端运行地址)
		websocketUrl: 'ws://192.168.0.112:8085', // websocket服务端地址
		weixinAppId: 'wxe97a8851be004a5f' // 微信公众号appid
	},
	// 生产环境配置
	production: {
		assetsPath: '/static/image', // 静态资源路径 https://aliyun.oss*******
		baseUrl: prodApi, // 后台接口请求地址
		hostUrl: 'http://myapt.cn', // H5地址(前端运行地址)
		websocketUrl: 'ws://35.77.86.77:8085', // websocket服务端地址
		weixinAppId: 'wx8e28372caabacac6' // 微信公众号appid
	}
};
export const configData = CONFIG[process.env.NODE_ENV];