import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebse.config';



export const Arthcontext = createContext(null)

const auth = getAuth(app);

const ArthProvider = ({ children }) => {


  const [user, setUser] = useState(null)
  const [lodder, setLodder] = useState(true)

  const creatUser = (email, password) => {
    setLodder(true)
    return createUserWithEmailAndPassword(auth, email, password)
  };

  const singIn = (email, password) => {
    setLodder(true);
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logOut = () => {
    setLodder(true);
    return signOut(auth)
  };


  const UpdateProfiledata=(name)=>{
     updateProfile(auth.currentUser, {
    displayName:name ,
  })
  }
 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, curentuser => {
      setUser(curentuser);
      console.log('curentuser', curentuser)
      setLodder(false)
    })
    return () => {
      return unsubscribe()
    }
  }, [])

  const arthinfo = {
    user,
    lodder,
    creatUser,
    singIn,
    logOut,
    UpdateProfiledata
  }

  return (
    <Arthcontext.Provider value={arthinfo}>
      {children}
    </Arthcontext.Provider>
  );
};

export default ArthProvider;