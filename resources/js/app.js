import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import store from './store';
import { createPinia } from "pinia";

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Duka e-commerce';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(store)
            .use(createPinia())
            .use(ZiggyVue, Ziggy)
            .mount(el);
    },
    progress: {
        color: '#f59e0b',
        showSpinner: true
    },
});
