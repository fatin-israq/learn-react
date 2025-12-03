export default function Friend({ friend }) {
  return (
    <div className="card">
      <h4>Name: {friend.name}</h4>
      <p>Email: {friend.email}</p>
    </div>
  );
}
