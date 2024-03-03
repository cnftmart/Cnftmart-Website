import { Loading } from "../loadingtype";
import LoadingContext from "./LoadingProvider";
import React from 'react';

const useLoading: any = () => {
  const { loading, setLoading } =
  React.useContext<Loading>(LoadingContext);
  return { loading, setLoading};
};

export default useLoading;