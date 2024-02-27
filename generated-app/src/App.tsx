import { usePerson } from "./hooks/usePerson";
import { usePersonResponse } from "./hooks/usePersonResponse";

export function App() {
  // Generated pageVariables
  const { person, setPerson, updatePersonMutation } = usePerson();
  const { personResponse, setPersonResponse } = usePersonResponse();

  // Generated interactions
  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    updatePersonMutation(person).then((response) => {
      if ("data" in response) {
        setPersonResponse(response.data);
      }
    });
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
      <p>response name: {personResponse?.name}</p>
    </div>
  );
}
