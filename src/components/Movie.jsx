function Movie(props) {

    return (
        <div>
            <h2>The Lord of the Rings: {props.title}</h2>
            <p>{props.hours}:{props.minutes} min</p>
        </div>
    )
}

export default Movie