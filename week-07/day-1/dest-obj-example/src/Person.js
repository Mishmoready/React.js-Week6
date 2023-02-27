function Person({ name, age, carImage }) {
  return (
    <h1>
      {/* Hi, I am {props.name} and I am {props.age} years old */}
      Hi, I am {name} and I am {age} years old
      <img src={carImage} width="50%" alt="a cool car" />
    </h1>
  );
}

export default Person;
