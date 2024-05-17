import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore('appStore', () => {
	const userInfo = ref({});

	function setUserInfo(data: {}) {
		userInfo.value = data;
	}

	return { userInfo, setUserInfo }
})