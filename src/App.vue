<template>
	<div id="app">
		<div class="common main">
			<Sidebar></Sidebar>
			<new-form></new-form>
			<Editor></Editor>
		</div>
	</div>
</template>

<script>
import Sidebar from 'components/sidebar/sidebar'
import newForm from 'components/newForm/newForm'
import Editor from 'components/editor/editor'

export default {
		name: 'App',
		components: { 
			Sidebar,
			newForm,
			Editor
		}
}
</script>

<style lang="scss" scoped>
    @import 'assets/common.scss';
    #app {
			width: 100%;
			height: 100%;
			font-family: 'Avenir', Helvetica, Arial, sans-serif;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			.main {
				padding: 20px;
				@include flex-sb-fs;
					
			}
    }
</style>
