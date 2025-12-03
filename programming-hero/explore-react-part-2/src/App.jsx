import Counter from "./Counter";
import Users from "./Users";
import { Suspense } from "react";
import Friends from "./Friends";
import "./App.css";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

function App() {
  const friendsPromise = fetchFriends();

  function handleClick() {
    alert("I am clicked");
  }

  const handleClick2 = () => {
    alert("Clicked 2");
  };

  const handleAdd5 = (num) => {
    num = num + 5;
    alert(`Your result is ${num}`);
  };

  return (
    <>
      <h2>Vite + React</h2>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h3>Friends are coming for the treat...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={() => handleAdd5(5)}>5 + 5</button>
    </>
  );
}

export default App;
