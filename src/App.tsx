import { useEffect } from "react";
import axios from "axios";
import { CsrfToken } from './types/types';
import { useAppSelector } from "./app/hooks";
import { selectCsrfState } from "./slices/appSlice";

function App() {
  const csrf = useAppSelector(selectCsrfState);
  useEffect(() => {
    // csrf-tokenを取得してHeaderにセット
    const getCsrfToken = async () => {
      const res = await axios.get<CsrfToken>(
        `${process.env.REACT_APP_API_URL}/csrftoken`
      );
      axios.defaults.headers.common['X-CSRF-Token'] = res.data.csrf_token;
    };
    getCsrfToken();
  }, [csrf]);
  return (
    <div>
    </div>
  );
}

export default App;
