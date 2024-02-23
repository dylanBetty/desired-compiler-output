import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { setPerson } from "../slices/personSlice";
import { RootState } from "../store";
import { useGetPersonQuery, useUpdatePersonMutation } from "../slices/apiSlice";

export function usePerson({ filter: { id } }: { filter: { id: string } }) {
  const dispatch = useDispatch();
  const { data, isError, isFetching, isSuccess } = useGetPersonQuery(id);

  useEffect(() => {
    if (data) {
      dispatch(setPerson(data));
    }
  }, [data, dispatch]);

  const person = useSelector((state: RootState) => state.person);

  const setPersonWithDispatch = (args: { name: string }) =>
    dispatch(setPerson({ ...args, id }));

  const [updatePersonMutation] = useUpdatePersonMutation();

  return {
    person,
    setPerson: setPersonWithDispatch,
    updatePersonMutation,
    statusProperties: { isError, isFetching, isSuccess },
  };
}
