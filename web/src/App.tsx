import Habit from "./components/Habit"

function App() {
  return (
    <div className="App">
      <Habit completed={3} />
      <Habit completed={2} />
      <Habit completed={1} />
      <Habit completed={5} />
      <Habit completed={10} />
      <Habit completed={2} />
      <Habit completed={4} />
      <Habit completed={9} />
      <Habit completed={5} />
    </div>
  )
}

export default App
