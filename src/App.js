import Todos from "./components/Todos"

function App({ darkMode }) {
	return (
		<div
			className={`container my-4 ${darkMode ? "text-white bg-dark" : ""}`}
			darkMode={darkMode}
		>
			<h1 className="text-center">ToDos App</h1>
			<Todos />
		</div>
	)
}

export default App
