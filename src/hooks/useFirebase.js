
import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

import initializeFirebaseAuth from "../firebase/firebase-init";


initializeFirebaseAuth();

const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [error,setError]=useState("");
    const auth=getAuth();
    const GoogleProvider=new GoogleAuthProvider();

    const signInWithGoogle=()=>{
      return signInWithPopup(auth,GoogleProvider)
        
    }

    const logOut=()=>{
        signOut(auth)
        .then(()=>{setUser()})
        .catch(error=>{
            setError(error.message)
        })
    }
    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            }
        })
    } ,[])

    return{
        signInWithGoogle,
        user,
        logOut,
        error
    }

}

export default useFirebase;