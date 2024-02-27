import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { setPerson } from "../slices/personSlice";
import { RootState } from "../store";
import { useGetPersonQuery, useUpdatePersonMutation } from "../slices/apiSlice";

export function usePerson() {
  const dispatch = useDispatch();
  const personId = "1";
  const { data, isError, isFetching, isSuccess } = useGetPersonQuery(personId);

  useEffect(() => {
    if (data) {
      dispatch(setPerson(data));
    }
  }, [data, dispatch]);

  const person = useSelector((state: RootState) => state.person);

  const setPersonWithDispatch = (args: { name: string }) =>
    dispatch(setPerson({ ...args, id: personId }));

  const [updatePersonMutation] = useUpdatePersonMutation();

  return {
    person,
    setPerson: setPersonWithDispatch,
    updatePersonMutation,
    statusProperties: { isError, isFetching, isSuccess },
  };
}
