import { GQL_ENDPOINT } from "./config";

export const fetchPerson = async (id: string) => {
  const response = await fetch(GQL_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: `{ person(id: "${id}") {id name} }` }),
  });
  const data = await response.json();

  return data.data.person;
};
