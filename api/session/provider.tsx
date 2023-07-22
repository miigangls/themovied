import { useContext, useEffect, useState } from "react";
import useSecureStore from "../../hooks/useSecureStore";
import SessionContext from '../session/context';
import {  signInWithEmailAndPassword } from "../../utils/sql";

const SessionProvider = (props: any) => {
 
  const [isLoadingApp, setIsLoadingApp] = useState(false);
  const [authSession, setAuthSession, loadingAuth, setLoadingAuth, error, setError] = useSecureStore("auth", {});
  

  const onLogin = async (email: string, password: string) => {
    setLoadingAuth(true);
     const resolve = await signInWithEmailAndPassword(email, password);

     setAuthSession({
        ...resolve,
        jwt: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDdhODRhMTg2MmM3OTlkNTY0MDVmYjc4Yzg0M2Q3OSIsInN1YiI6IjVmMGNiZTQyODFjN2JlMDAzMmZhMmFiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._MLJpf98SHmifCUKLjTJa8BSQeFE0tZd3P4EeGMXIzQ",
        timezone: new Date(),
      });

    setLoadingAuth(false);
    return setLoadingAuth(false);
  };

  const onLogout = async () => {
    setIsLoadingApp(true);
    setAuthSession({});
    setIsLoadingApp(false);
  };

  return (
    <SessionContext.Provider value={{ auth: authSession, onLogin,  onLogout }} >
      {props.children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
