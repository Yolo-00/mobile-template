import { configData } from "../config/index";

export const $http = (params : any) => {
	const { url, headers, method, data, noLoading } = params;
	if (!noLoading) {
		uni.showLoading({
			title: "加载中",
			mask: true
		})
	}
	return new Promise((resolve, reject) => {
		uni.request({
			url: configData.baseUrl + url,
			method,
			header: {
				'token': uni.getStorageSync("token") || "",
				...headers
			},
			timeout: 30000,
			data,
			success: (res : any) => {
				// 登录失效
				if (res.data.code == 10000) {
					uni.clearStorageSync();
					uni.reLaunch({
						url: "/pages/home/index"
					})
					return
				}
				// 接口报错
				if (res.data.code == 500) {
					uni.showToast({
						title: "请联系管理员",
						icon: "none"
					})
					return
				}
				// 警告提示语
				if (res.data.code == 400) {
					uni.showToast({
						title: res.data.msg,
						icon: "none"
					})
					return
				}
				resolve(res.data);
			},
			fail: (err) => {
				reject(err);
			},
			complete: () => {
				if (!noLoading) {
					uni.hideLoading()
				}
			}
		})
	})
}