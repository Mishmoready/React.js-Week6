import styles from "./Button.Module.css";

export default function Button(props) {
  return (
    <button className={`${props.className} ${styles.button}`}>
      {props.children}
    </button>
  );
}
