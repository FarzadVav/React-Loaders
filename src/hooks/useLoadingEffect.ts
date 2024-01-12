import { useContext, useEffect } from "react";
import LoadingContext from "../contexts/Loading";

const useLoadingEffect = (callBack: (calncelLoading: Function) => void) => {
  const loading = useContext(LoadingContext)

  useEffect(() => {
    callBack(() => {
      loading.removeKey(`/${location.href.split("://")[1].split("/").slice(1).join("/")}`)
    })
  }, [])
};

export default useLoadingEffect;
