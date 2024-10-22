import { FIREBASE_APP } from "../configs/firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const db = getFirestore(FIREBASE_APP);

const getData = async (nameCollection) => {
  const col = collection(db, nameCollection);
  const schoolSnapShot = await getDocs(col); // getdata col
  const response = schoolSnapShot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() }; // Destructuring
  }); // Map du~ lieu thanh json

  return response;
};

export default getData;
