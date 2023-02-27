/*
  Create a Person component that takes in a name and an age as props and has an h1 tag with the text
    “Hi I’m {name}, I am {age} years old”.
  where name and age come from the props passed to the component
*/

import Person from './Person';

function App() {
  const carURL1 =
    'https://media.wired.com/photos/63b8d0a771c6b526845f15a6/16:9/w_2400,h_1350,c_limit/CES-2023-PEUGEOT_INCEPTION_CONCEPT_2301CN202.jpg';
  return (
    <>
      <Person name="Sebin" age="25" carImage={carURL1}></Person>;
      <Person name="John" age="15" carImage={carURL1}></Person>;
    </>
  );
}

export default App;
