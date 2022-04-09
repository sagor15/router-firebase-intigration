import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
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

  const handleSingOut = () => {
    signOut(auth).then(() => {
      console.log("logout succesfull");
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return { user, signInWithGoogle, handleSingOut };
};
export default useRegister;
