// Sin utilizar [props]

// const Hello = () => {
//   return (
//     <div>
//       <p>Hello world</p>
//     </div>
//   )
// }

// Utilizando Props

// const Hello = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>
//     </div>
//   )
// }

// Se pueden pasar valores directamente o se pueden pasar valores de variables
// se utilizan {} para pasar los valores de las variables a props
// Los nombres de componentes deben comenzar con mayúsculas

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name='Maya' age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }

// ************************************************************************************************************//
// Parte C
// Desestructuración de props, se asignan a constantes, en este caso name y age

// const Hello = ({ name, age }) => {

//   // Otra forma de desestructurar
//   // const name = props.name
//   // const age = props.age

//   // Otra forma de desestructurar
//   // const { name, age } = props

//   const bornYear = () => new Date().getFullYear() - age

//   return (
//     <div>
//       <p>Hello {name}, you are {age} years old</p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }

// ************************************************************************************************************//
// Re-renderizar el componente cuando cambia algo

import { useState } from "react";

// const App = () => {
//   const [ counter, setCounter ] = useState(0)
//   setTimeout(
//     () => setCounter(counter + 1),
//     1000
//   )
//   console.log('rendering...', counter)

//   return (
//     <div>{counter}</div>
//   )
// }

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
      <Button onClick={decreaseByOne} text="minus" />
    </div>
  );
};
const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

export default App;
