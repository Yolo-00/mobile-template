import { imgUrl } from "../config/index";

/**
 * 解决图片内容过多，导致包体积过大，方便后期优化
 * 除tabbar以外所有image目录下的静态资源，均可采用路径导入的方式使用，方便后期上传图片至 oss 采用网络路径的方式使用
 */

export const logo = imgUrl + "/logo.png";

