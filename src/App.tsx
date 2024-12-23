import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelect = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup items={items} heading={"Cities"} onSelectItem={handleSelect} />
    </div>
  );
}

export default App;
