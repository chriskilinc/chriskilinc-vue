import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import redirect from './util/redirect';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	created: () => {
		console.log('created');
		redirect('www.chriskilinc.com');
	},
	render: (h) => h(App),
}).$mount('#app');
