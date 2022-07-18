
import { auth, db } from "../firebase";

   export  const signUp = async (email, password,) => {
    await createUserWithEmailAndPassword(auth, email, password)


   }


