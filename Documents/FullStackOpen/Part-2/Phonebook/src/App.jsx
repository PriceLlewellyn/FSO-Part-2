import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')//controls the form input element

const addPerson = (event) => {
  event.preventDefualt()
  const nameObject = {
    name: newName,
    id: String(persons.length + 1)
  }
  setPersons(persons.concat(nameObject))
  setNewName('')
}

const handlePersonUpdate = (event) => {
  console.log(event.target.value)
  setNewName(event.target.value)
}

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
          value={newName}
          onChange={handlePersonUpdate}
          />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>debug: {newName}</div>
      ...
    </div>
  )
}

export default App