import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";

// export const loginRequest = (email, password) => {
//   signInWithEmailAndPassword(auth, email, password);
//   console.log(
//     "from service: ",
//     signInWithEmailAndPassword(auth, email, password)
//   );
// };

export const loginRequest = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("User credential:", userCredential); // Check if this logs the user credentials
    return userCredential.user; // Return the user object
  } catch (error) {
    console.error("Error signing in:", error.code);
    throw error.code; // Rethrow the error to handle it in the UI
  }
};
