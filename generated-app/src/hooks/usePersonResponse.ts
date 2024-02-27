import { useState } from "react";
import { Person } from "../slices/personSlice";

export function usePersonResponse() {
  const [personResponse, setPersonResponse] = useState<Person | null>(null);
  return { personResponse, setPersonResponse };
}
