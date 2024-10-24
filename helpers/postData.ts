import { db } from "@/configs/firebase";
import { collection, addDoc, doc } from "firebase/firestore/lite";
import { v4 as uuidv4 } from "uuid";

interface dataTypes {
  [key: string]: any; // attribute other than any type
}

function postData(nameCollection: string, data: dataTypes) {}

export default postData;
