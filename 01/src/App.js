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
      Number of exercises {props.excercise[0].excercise+props.excercise[1].excercise+props.excercise[2].excercise}</p>
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
      <Part name={props.name[0].name} excercise={props.excercise[0].excercise}/>
      <Part name={props.name[1].name} excercise={props.excercise[1].excercise}/>
      <Part name={props.name[2].name} excercise={props.excercise[2].excercise}/>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const total = [
    {
    name: "Fundamentals of React",
    excercise: 10,
  },
  {
    name: "Using props to pass data",
    excercise: 7,
  },
  {
    name: "State of a component",
    excercise: 14,
  }
];

  return (
    <div>
      <Header course={course} />
      <Content name={total} excercise={total}/>
      <Total excercise={total}/>
    </div>
  )
}

export default App