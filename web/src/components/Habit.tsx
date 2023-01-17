interface HabitProps {
    completed: number
}

function Habit(props: HabitProps) {
    const { completed } = props
    return (
        <p className="bg-zinc-900 w-10 h10 text-white rounded m-2 flex items-center justify-center">{completed}</p>
    )
}

export default Habit