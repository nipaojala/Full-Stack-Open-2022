interface CourseName {
  courseName: string
}

interface Parts {
  name: string,
  exerciseCount: number
}

interface ContentProps {
  courseParts: Array<Parts>
}

const Content = ({ courseParts }: ContentProps) => {
  return (
    <div>
    {courseParts.map(element =>
      <p key={element.name}>{element.name} {element.exerciseCount}</p>
    )}
    </div>
  )
}

const Total = (props:ContentProps) => {
  let count = 0;
  props.courseParts.map( element => 
    count = count + element.exerciseCount
    )
  return (
    <div>Number of exercises: {count}</div>
  )
}

const Header = (props: CourseName) => {
  return (
    <>
    {props.courseName}
    </>
  )
};

const App = () => {
  const courseName = "Half Stack application development";
  const courseParts: Array<Parts> = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
    }
  ];


  return (
    <div>
      <Header courseName={courseName}/>
      <Content courseParts={courseParts}/>
      <Total courseParts={courseParts}/>
    </div>
  );
};

export default App;