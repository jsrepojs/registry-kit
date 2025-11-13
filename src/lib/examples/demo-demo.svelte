<script lang="ts">
	import Add from '$lib/components/add.svelte';
	import * as Demo from '$lib/components/ui/demo';
</script>

<div class="w-full max-w-3xl px-4">
	<Demo.Root>
		<Demo.ActionsGroup class="justify-between">
			<Demo.Tabs />
			<Demo.ActionsGroup>
				<Add item="demo" />
				<Demo.ControlGroup>
					<Demo.ControlSizeMobile />
					<Demo.ControlSizeTablet />
					<Demo.ControlSizeDesktop />
					<Demo.ControlGroupSeparator />
					<Demo.Fullscreen />
					<Demo.ControlGroupSeparator />
					<Demo.ControlRefresh />
				</Demo.ControlGroup>
			</Demo.ActionsGroup>
		</Demo.ActionsGroup>
		<Demo.Preview type="iframe" demo="add-demo" />
		<Demo.Code />
	</Demo.Root>
</div>
