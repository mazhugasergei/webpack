import path from "path"
import webpack from "webpack"
import { buildWebpack } from "./config/build/buildWebpack"
import { BuildMode } from "./config/build/types/types"

interface EnvVariables {
	mode: BuildMode
	port: number
}

export default (env: EnvVariables): webpack.Configuration => {
	return buildWebpack({
		port: env.port ?? 3000,
		paths: {
			entry: path.resolve(__dirname, "src", "index.tsx"),
			html: path.resolve(__dirname, "public", "index.html"),
			output: path.resolve(__dirname, "build")
		},
		mode: env.mode ?? "development"
	})
}
