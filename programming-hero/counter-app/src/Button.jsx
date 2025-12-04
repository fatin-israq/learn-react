export default function Button({ name, onClick }) {
  const add = {
    backgroundColor: "green",
    margin: "15px",
  };

  const sub = {
    backgroundColor: "red",
    margin: "15px",
  };

  const reset = {
    backgroundColor: "grey",
    color: "black",
    margin: "15px",
  };

  return (
    <>
      {name === "+1" && (
        <button style={add} onClick={onClick}>
          {name}
        </button>
      )}
      {name === "-1" && (
        <button style={sub} onClick={onClick}>
          {name}
        </button>
      )}
      {name === "Reset" && (
        <button style={reset} onClick={onClick}>
          {name}
        </button>
      )}
      {name === "Hide" && (
        <button style={add} onClick={onClick}>
          {name}
        </button>
      )}
      {name === "Show" && (
        <button style={add} onClick={onClick}>
          {name}
        </button>
      )}
    </>
  );
}
