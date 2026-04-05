import Parts from "./Parts"

const Content = ({parts}) => {
  return (
    <div>
        {parts.map(part => 
        <Parts key={part.id} name={part.name} exercies={part.exercises}/>)}
    </div>
  )
}
export default Content