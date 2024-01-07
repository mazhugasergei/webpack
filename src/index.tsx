import { createRoot } from "react-dom/client"
import App from "./components/App"
import "./index.scss"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import React, { Suspense } from "react"
import About from "@/components/about/About.lazy"

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/about",
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<About />
					</Suspense>
				)
			}
		]
	}
])

createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
