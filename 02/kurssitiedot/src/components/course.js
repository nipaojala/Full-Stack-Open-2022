const Course = (props) => {

    const Header = (props) => {
      return (
        <div>
          <h2>{props.header}</h2>
        </div>
      )
    }
  
    const Content  = (props) => {
  
      const Part = (props) => {
        return (
          <div>
            <p>{props.name} {props.exercise}</p>
          </div>
        )
      }
      
      return (
        <div>
          {props.parts.map(part => 
            <Part key={part.id} name={part.name} exercise={part.exercises}/>
          )}
        </div>
      )
    }
    const Total = ({parts}) => {
      const ex = parts.map(part => part.exercises)
      return (
        <div>
          <p>
            <b>Total of {ex.reduce( (s, p) => s + p)} exercises</b>
          </p>
        </div>
      )
    }
      return (
        <div>
          <Header header={props.course.name}/>
          <Content parts={props.course.parts}/>
          <Total parts={props.course.parts}/>
        </div>
      )
    }
    export default Course
  