import { db } from "@/configs/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

// Định nghĩa kiểu cho dữ liệu trả về
interface DataResponse {
  id: string;
  [key: string]: any; // Cho phép các thuộc tính khác với kiểu bất kỳ
}

// Hàm lấy dữ liệu từ Firestore
const getData = async (nameCollection: string): Promise<DataResponse[]> => {
  const col = collection(db, nameCollection);
  const schoolSnapShot = await getDocs(col);

  const response: DataResponse[] = schoolSnapShot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() } as DataResponse; // Destructuring và ép kiểu
  });

  return response;
};

export default getData;
