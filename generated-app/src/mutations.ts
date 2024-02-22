import { GQL_ENDPOINT } from "./config";

export async function updatePerson({ id, name }: { id: string; name: string }) {
  const response = await fetch(GQL_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `mutation { updatePerson(id: "${id}" name: "${name}") { id name } }`,
    }),
  });
  const data = await response.json();

  return data.data.updatePerson;
}
