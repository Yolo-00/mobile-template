import { $http } from "../index";

// 获取用户信息
export const getUserInfo = (data) => {
	return $http({
		url: "/user/info",
		method: "GET",
		data,
	})
};

// 支付
export const getPppletPay = (data) => {
	return $http({
		url: "/user/rechargepaymentorder_applet",
		headers: {
			'content-type': "application/x-www-form-urlencoded",
		},
		method: "POST",
		data,
	})
};
