<template>
	<button type="button" @click="($event) => onClick($event)">Click Me!</button>
</template>

<script setup lang="ts">
	interface Emits {
		(e: "custom-click", event: object): void;
	};

	const emit = defineEmits<Emits>();

	const onClick = (event: object) => {
		emit("custom-click", event);
	};
</script>

<style scoped>
button {
	color: red;
	border: 1px solid red;
}
</style>
