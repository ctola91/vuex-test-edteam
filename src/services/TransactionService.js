import firebaseApp from "./firebase";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDocs,
} from "firebase/firestore";

const db = getFirestore(firebaseApp);

const addTransaction = async ({
  description,
  amount,
  gasto,
  category,
  date,
}) => {
  try {
    const docCategoryRef = doc(db, "categories", category);
    const docRef = await addDoc(collection(db, "transactions"), {
      description,
      amount,
      gasto,
      category: docCategoryRef,
      date,
    });
    return docRef.id;
  } catch (e) {
    console.log(e);
  }
};

const getTransactions = async () => {
  try {
    let transactions = [];
    const querySnapshot = await getDocs(collection(db, "transactions"));
    querySnapshot.forEach((doc) => {
      transactions.push({ id: doc.id, ...doc.data() });
    });
    return transactions;
  } catch (e) {
    console.log(e);
  }
};

export default {
  addTransaction,
  getTransactions,
};
