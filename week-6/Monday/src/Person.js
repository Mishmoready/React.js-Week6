export default function Person(props) {
  console.log(props);
  return (
    <h1>
      Hi I'm {props.name}, I am {props.age} years old.
    </h1>
  );
}
