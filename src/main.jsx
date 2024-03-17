import React from "react";
import ReactDOM from "react-dom/client";
import { registerSW } from "virtual:pwa-register";
import App from "./App.jsx";
import "./index.css";

const updateSW = registerSW({
	onNeedRefresh() {
		if (confirm("New content available. Wanna Reload?")) {
			updateSW(true);
		}
	},
	onOfflineReady() {
		if (
			confirm(
				'App is offline ready.\nYou can install it by clicking on the "Install app" option on the 3 dot menu at the top right corner.'
			)
		) {
		}
	}
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
