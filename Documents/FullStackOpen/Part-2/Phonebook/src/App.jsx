import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')


const addPerson = (event) => {
  event.preventDefault()

  const trimmednewName = newName.trim()

  const isDuplicate = persons.some(
    (persons) => persons.name.trim().toLowerCase() === trimmednewName.toLowerCase()
  )
  if(isDuplicate) {
    alert(`${trimmednewName} is already added to phonebook`)
    return;
  } else {
    const nameObject = {
    name: newName
  }
    setPersons(persons.concat(nameObject))
    setNewName('')
  }
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
      <div>
        {persons.map(person => 
          <li key={person.name}>{person.name}</li>
        )}
      </div>
    </div>
  )
}

export default App