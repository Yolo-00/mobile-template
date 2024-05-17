<template>
	<view>
		<van-nav-bar title="消息" left-arrow fixed placeholder @click-left="handleBack" />
		消息
	</view>
</template>

<script setup lang="ts">
	const handleBack = () => {
		uni.navigateBack();
	}
</script>

<style scoped lang="scss">

</style>