
export const BasicTypes = () => {
    const name: string = 'Julian';
    const age: number = 30;
    const isActive: boolean = false;
    const hobbies: string[] = ['Gaming', 'Cocinar', 'Leer'];

    hobbies.push('Programar')

  return (
    <div>
    <h3>Tipos Basicos en Typescript</h3>
    
        {name} {age} {isActive}
        <br />
        
        {hobbies.join(', ')}
    
    </div>
  )
}