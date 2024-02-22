import { FormEvent, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";

import { fetchPerson } from "./queries";
import { updatePerson } from "./mutations";
import { Person } from "./types";
import { Input } from "./components/Input";
import { Button } from "./components/Button";

export function App() {
  // initial person pageVariable (with empty values)
  const [person, setPerson] = useState<Person>({ id: "", name: "" });

  // query person
  const { data, isLoading } = useQuery<Person>("person", () =>
    fetchPerson("1")
  );

  // fill person pageVariable when query is done
  useEffect(() => {
    data && setPerson(data);
  }, [data]);

  // setup the mutation function + action response
  const updatePersonMutation = useMutation(updatePerson, {
    onSuccess: (data) => {
      // map response onto page variable
      setPerson(data);
    },
  });

  // interactions (onSubmit => runAction updatePerson, with page state)
  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    updatePersonMutation.mutate(person);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Update form</h1>
      <form onSubmit={onSubmitHandler}>
        <Input
          value={person.name}
          onChange={(newName) => {
            setPerson((prev) => ({ ...prev, name: newName }));
          }}
        />
        <Button>Submit</Button>
      </form>
    </>
  );
}
