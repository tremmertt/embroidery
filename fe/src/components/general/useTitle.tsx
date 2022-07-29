import { useEffect } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../redux/configStore";

const useTitle = (title: string): void => {
  const { lang } = useSelector((state: IRootState) => state.LanguageReducer);

  useEffect(() => {
    document.title = `${process.env.REACT_APP_NAME} - ${title}`;
    console.log("document.title", document.title);
    return () => {
      document.title = `${process.env.REACT_APP_NAME} - ${title}`;
    };
  }, [lang, title]);
};

export default useTitle;
