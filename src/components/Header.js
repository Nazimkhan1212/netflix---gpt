import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../slices/userSlice";
import { AVATAR_URL, LOGO_URL } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store?.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscibe when components
    return () => unsuscribe();
  }, []);

  return (
    <div className="absolute pl-20 pr-10 py-3 bg-gradient-to-b from-black w-full z-10 flex items-center justify-between">
      <img src={LOGO_URL} className="w-44" alt="logo" />
      {user && (
        <div className="flex items-center justify-center text-white">
          <img src={AVATAR_URL} alt="loading" className="h-8 w-12 px-2" />
          <button onClick={handleSignOut}>SignOut</button>
        </div>
      )}
    </div>
  );
};

export default Header;
