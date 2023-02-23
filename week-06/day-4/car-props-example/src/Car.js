// props => A list of attributes passed to the component from wherever it was called
function Car(props) {
  console.log(props);
  return (
    <div>
      <h1>This is a {props.carName}</h1>
      <h3>This car is {props.carColor}</h3>
    </div>
  );
}

export default Car;
