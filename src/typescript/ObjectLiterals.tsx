interface Person {
    firstName: string
    lastName: string
    age: number
    isActive?: boolean
    address: {
        country: string
        houseNo: number
    }
}

export const ObjectLiterals = () => {
    const person: Person = {
        firstName: 'Pedro',
        age: 30,
        address: {
            country: 'United States',
            houseNo: 123
        },
        lastName: "Perez"
    }
  return (
    <div> 
      <h3>
        Objetos literales
        </h3>
        <pre>
      {JSON.stringify(person, null, 2)}
        </pre>
    </div>
  )
}

