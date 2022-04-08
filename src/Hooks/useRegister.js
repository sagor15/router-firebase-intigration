import { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase.init.js";

const auth = getAuth(app);
const googlProvider = new GoogleAuthProvider();
const useRegister = () => {
  const [user, setUser] = useState({});

  const signInWithGoogle = () => {
    signInWithPopup(auth, googlProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  return { user, signInWithGoogle };
};
export default useRegister;
