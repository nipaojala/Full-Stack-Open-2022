interface CourseName {
  courseName: string
}

// new types
interface CoursePartBase {
  name: string;
  exerciseCount: number;
  type: string;
}

interface CourseDescription extends CoursePartBase {
  description: string;
}

interface CourseNormalPart extends CourseDescription {
  type: "normal";
}

interface CourseProjectPart extends CoursePartBase {
  type: "groupProject";
  groupProjectCount: number;
}

interface CourseSubmissionPart extends CourseDescription {
  type: "submission";
  exerciseSubmissionLink: string;
}

interface Special extends CourseDescription {
  requirements: Array<string>,
  type: 'special'
}
type CoursePart = CourseNormalPart | CourseProjectPart | CourseSubmissionPart | Special;

interface CoursePartTypes {
  parts: CoursePart[]
}

type TypeProps = {
  parts: CoursePart
}

const Part = ({ parts }: TypeProps ) => {
    switch (parts.type) {
      case "normal":
        return(
          <div>
            <h2>{parts.name} {parts.exerciseCount}</h2> {parts.description}
          </div>
        )
      case "groupProject":
        return(
          <div>
            <h2>{parts.name} {parts.exerciseCount}</h2> {parts.groupProjectCount}
          </div>
        ) 
      case "submission":
        return (
          <div>
            <h2>{parts.name} {parts.exerciseCount}</h2>  {parts.description} {parts.exerciseSubmissionLink}
          </div>
        )
        case "special":
          return (
            <div>
              <h2>{parts.name} {parts.exerciseCount} </h2>{parts.description} {parts.requirements.map( item => item ).join(', ')}
            </div>
          )
        default:
          return assertNever(parts);
    }
}

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const Content = ({ parts }: CoursePartTypes) => {
  return (
    <div>
    {parts.map( e => (
        <Part key = {e.name} parts = {e} />
    ))  
    }
    </div>
    
  );
}

const Total = ({parts}:CoursePartTypes) => {
  let count = 0;
  parts.map(element => 
    count = count + element.exerciseCount
    )
  return (
    <div>Number of exercises: {count}</div>
  )
}

const Header = (props: CourseName) => {
  return (
    <h1>
    {props.courseName}
    </h1>
  )
};

const App = () => {
  const courseName = "Half Stack application development";
  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is the easy course part",
      type: "normal"
    },
    {
      name: "Advanced",
      exerciseCount: 7,
      description: "This is the hard course part",
      type: "normal"
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
      type: "groupProject"
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev",
      type: "submission"
    },
    {
    name: "Backend development",
    exerciseCount: 21,
    description: "Typing the backend",
    requirements: ["nodejs", "jest"],
    type: "special"
    }
  ]

  return (
    <div>
      <Header courseName={courseName}/>
      <Content parts={courseParts}/>
      <br></br>
      <h2>
      <Total parts={courseParts}/>
      </h2>
    </div>
  );
};

export default App;