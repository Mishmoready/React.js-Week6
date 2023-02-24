function App() {
  const users = [
    { id: 50, name: 'Sebin Benjamin' },
    { id: 12, name: 'John Doe' },
    { id: 320, name: 'Jane Doe' },
  ];
  return (
    <div>
      {users.map((user) => {
        return <div>{user.name}</div>;
      })}
    </div>
  );
}

export default App;
