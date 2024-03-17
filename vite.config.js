import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			manifest: {
				name: "Password Generator",
				short_name: "Pass Generator",
				description: "Teri maa ki chut... 💀💀😘😘",
				scope: "/",
				theme_color: "#f59e0b",
				background_color: "#f59e0b",
				icons: [
					{
						src: "/icon.svg",
						sizes: "192x192",
						type: "image/svg+xml"
					},
					{
						src: "/icon.svg",
						sizes: "512x512",
						type: "image/svg+xml"
					},
					{
						src: "/icon.svg",
						sizes: "any",
						type: "image/svg+xml",
						purpose: "any"
					}
				]
			},
			registerType: "prompt",
			workbox: {
				clientsClaim: true,
				skipWaiting: true,
				cleanupOutdatedCaches: true,
				globPatterns: ["**/*.{js,css,html,ico,png,svg}"]
			},
			includeAssets: ["**/*"],
			devOptions: {
				enabled: true
			}
		})
	]
});
