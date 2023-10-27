import React from "react";
import {
  NETFLIX_LOGO,
  SIGNOUT_LOGO,
  SUPPORTED_LANGUAGES,
} from "../utils/constant";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { toogleGptSearchView } from "../utils/gptSlice";
import {changeLanguage} from "../utils/configSlice"

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)

  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when compoenet unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toogleGptSearchView());
  };

  const handleLanguageChange = (e) => {
      // console.log(e.target.value);
      dispatch(changeLanguage(e.target.value))
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex items-center justify-between">
      <img className="w-44" src={NETFLIX_LOGO} alt="" />
      {user && (
        <div className="flex items-center gap-2">
          {showGptSearch &&
          <select className="p-2 bg-black text-white cursor-pointer "
          onChange={handleLanguageChange}
          >

            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
}
          <button
            className="text-white font-bold bg-purple-700 px-4 py-1 rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img src={SIGNOUT_LOGO} alt="" />
          <button
            onClick={handleSignOut}
            className="text-lg text-white font-bold "
          >
            {/* {user.email} */} Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
