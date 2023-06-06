function Car(props) {
  console.log(props.carName);

  return <div> This is a {props.carName}</div>;
}

export default Car;
