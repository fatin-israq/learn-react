import { Suspense } from "react";
import Users from "./Users";

export default function List() {
  const url = "https://jsonplaceholder.typicode.com/users";

  const fetchUsers = fetch(url).then((res) => res.json());

  return (
    <Suspense fallback={<h3>Loading users...</h3>}>
      <Users fetchUsers={fetchUsers}></Users>
    </Suspense>
  );
}
