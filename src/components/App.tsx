import { useState } from "react"
import classes from "./App.module.scss"
import { Outlet } from "react-router"

export default () => {
	const [data, setData] = useState(0)
	return (
		<>
			<div className={classes.container}>
				<button onClick={() => setData((prev) => prev - 1)} className={classes.button}>
					-
				</button>
				<div className={classes.value}>{data}</div>
				<button onClick={() => setData((prev) => prev + 1)} className={classes.button}>
					+
				</button>
			</div>
			<Outlet />
		</>
	)
}
