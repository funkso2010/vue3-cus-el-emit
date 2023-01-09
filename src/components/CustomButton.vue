<template>
	<button
		type="button"
		:style="props.bgColorRed ? `background-color: red;` : undefined "
		@click="($event) => onClick($event)">
		{{ props.text }}
	</button>
</template>

<script setup lang="ts">
	interface Props {
		text?: string;
		bgColorRed?: boolean;
	}
	const props = withDefaults(defineProps<Props>(), {
		text: 'button',
		bgColorRed: true,
	});

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
	display: inline-block;
	color: white;
	background-color: black;
	border-radius: 16px;
	border: 1px solid white;
	padding: 8px 16px;
}
</style>
