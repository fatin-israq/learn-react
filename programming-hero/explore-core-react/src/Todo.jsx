// export default function ToDo({ task, isDone }) {
//   return <li>Task: {task}</li>;
// }

export default function ToDo({ task, isDone }) {
  return isDone ? <li>Task Done: {task}</li> : <li>To be done: {task}</li>;
}

// conditioning rendering: &&
