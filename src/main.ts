import { createSSRApp } from "vue";
import App from "./App.vue";
import uviewPlus, {
	setConfig
} from 'uview-plus'
import pinia from "./stores/index";


// 调用setConfig方法，方法内部会进行对象属性深度合并，可以放心嵌套配置
// 需要在app.use(uview-plus)之后执行
setConfig({
	// 修改$u.config对象的属性
	config: {
		// 修改默认单位为rpx，相当于执行 uni.$u.config.unit = 'rpx'
		unit: 'rpx'
	},
})

export function createApp() {
  const app = createSSRApp(App);
	app.use(pinia);
	app.use(uviewPlus);
  return {
    app,
  };
}
