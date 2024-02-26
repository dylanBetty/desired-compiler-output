import { usePerson } from "./hooks/personHook";

export function App() {
  // Generated pageVariables
  const { person, setPerson, updatePersonMutation } = usePerson({
    filter: { id: "1" },
  });

  // Generated interactions
  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    updatePersonMutation(person);
  };

  // Generated component structure
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          value={person.name}
          onChange={(e) => {
            setPerson({ name: e.target.value });
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
