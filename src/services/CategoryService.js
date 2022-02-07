import firebaseApp from "./firebase";
import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore";

// inicializamos firestore
const db = getFirestore(firebaseApp);

const addCategory = async ({ title, description, gasto }) => {
  try {
    const docRef = await addDoc(collection(db, "categories"), {
      title,
      description,
      gasto,
    });
    return docRef.id;
  } catch (err) {
    console.log(err);
  }
};

const getCategories = async () => {
  try {
    let categories = [];
    const querySnapshot = await getDocs(collection(db, "categories"));
    querySnapshot.forEach((doc) => {
      categories.push({ id: doc.id, ...doc.data() });
    });
    return categories;
  } catch (err) {
    console.log(err);
  }
};
const getCategory = () => {};

export default {
  addCategory,
  getCategories,
  getCategory,
};
