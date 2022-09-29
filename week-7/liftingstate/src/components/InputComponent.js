export default function InputComponent({ handleChange }) {
  // We extract the handleChange prop
  return (
    <div style={{ border: "6px solid orange" }}>
      {/* When an onChange event happens, handleChange which is linked to handleChangeMethodInApp, is triggered */}

      <input type="text" onChange={handleChange} />
    </div>
  );
}
