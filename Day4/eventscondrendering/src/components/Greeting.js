import styles from "./Greeting.Module.css";

function Greeting() {
  return (
    <>
      <h1 className={`${styles.header} button`}>Good Morninq</h1>
    </>
  );
}

export default Greeting;
