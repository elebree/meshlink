import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const importMetaUrlPolyfill = '__import_meta_url__';

export default defineConfig({
	build: {
		rolldownOptions: {
			transform: {
				define: {
					'import.meta.url': importMetaUrlPolyfill
				}
			},
			output: {
				intro:
					"var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;" +
					`var ${importMetaUrlPolyfill} = (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || (typeof document !== 'undefined' ? document.baseURI : typeof location !== 'undefined' ? location.href : ''));`
			}
		}
	},
	plugins: [sveltekit()]
});
