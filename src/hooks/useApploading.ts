import { useContext, useEffect } from "react";
import LoadingContext from "../contexts/Loading";

const useAppLoading = (callBack: (calncelLoading: Function) => void) => {
  const loading = useContext(LoadingContext)

  useEffect(() => {
    callBack(() => {
      loading.removeKey("APP")
    })
  }, [])
};

export default useAppLoading;
