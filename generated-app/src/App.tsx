import { usePerson } from "./hooks/personHook";

export function App() {
  // Person pageVariable
  const { person, setPerson, updatePersonMutation } = usePerson({
    filter: { id: "1" },
  });

  // onSubmit interaction
  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    updatePersonMutation(person);
  };

  // Components
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
