import { useEffect } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../redux/configStore";

const useTitle = (title: string): void => {
  const { lang } = useSelector((state: IRootState) => state.LanguageReducer);

  useEffect(() => {
    document.title = `${title} - ${process.env.REACT_APP_NAME}`;
    return () => {
      document.title = `${title} - ${process.env.REACT_APP_NAME}`;
    };
  }, [lang, title]);
};

export default useTitle;
