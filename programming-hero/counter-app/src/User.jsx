import "./App.css";

export default function User({ user }) {
  console.log(user);
  return (
    <div className="card">
      <h4>Name: {user.name}</h4>
      <p>Company: {user.company.name}</p>
      <p>Address: {user.address.city}</p>
    </div>
  );
}
