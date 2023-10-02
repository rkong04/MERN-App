import { useWorkoutContext } from "../hooks/useWorkoutsContext"

const WorkoutDetails = ({workout}) => {
    const {dispatch} = useWorkoutContext()

    const handleClick = async () => {
        const responce = await fetch('/api/workouts/' + workout._id,{
            method: 'DELETE'

        })
        const json = await responce.json()
        if (responce.ok){
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (lbs): </strong></p>
            <p><strong>Reps: </strong></p>
            <p>{workout.createdAt}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    )
}

export default WorkoutDetails