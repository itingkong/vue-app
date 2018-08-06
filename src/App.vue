<template>
    <div id="app">
			<div class="common main">
        <Sidebar></Sidebar>
				<new-form></new-form>
			</div>
    </div>
</template>

<script>
    // import HelloWorld from '@/components/HelloWorld'
    import Sidebar from 'components/sidebar/sidebar'
    import newForm from 'components/newForm/newForm'

    export default {
        name: 'App',
        components: { 
					Sidebar,
					newForm
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
