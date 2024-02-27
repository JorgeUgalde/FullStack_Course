// Sin utilizar [props]

// const Hello = () => {
//   return (
//     <div>
//       <p>Hello world</p>
//     </div>
//   )
// }



// Utilizando Props

const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

// Se pueden pasar valores directamente o se pueden pasar valores de variables
// se utilizan {} para pasar los valores de las variables a props
// Los nombres de componentes deben comenzar con mayúsculas
const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}











export default App