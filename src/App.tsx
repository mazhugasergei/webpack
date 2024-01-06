import { useState } from "react"

export default () => {
	const [data, setData] = useState(0)
	return (
		<>
			<div>{data}</div>
			<button onClick={() => setData((prev) => prev + 1)}>+</button>
		</>
	)
}
