const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
      Number of exercises {props.parts[0].excercises+props.parts[1].excercises+props.parts[2].excercises}</p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.excercise}</p>
    </div>
  )
}

const Content  = (props) => {
  return (
    <div>
      <Part name={props.parts[0].name} excercise={props.parts[0].excercises}/>
      <Part name={props.parts[1].name} excercise={props.parts[1].excercises}/>
      <Part name={props.parts[2].name} excercise={props.parts[2].excercises}/>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App