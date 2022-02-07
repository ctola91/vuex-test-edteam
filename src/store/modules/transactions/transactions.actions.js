import TransactionService from "../../../services/TransactionService";
import {
  CREATE_TRANSACTION_ERROR,
  CREATE_TRANSACTION_REQUEST,
  CREATE_TRANSACTION_SUCCESS,
  GET_TRANSACTIONS_ERROR,
  GET_TRANSACTIONS_REQUEST,
  GET_TRANSACTIONS_SUCCESS,
} from "./transactions.types";

const createTransaction = async (
  { commit },
  { description, amount, gasto, category, date }
) => {
  try {
    commit(CREATE_TRANSACTION_REQUEST);
    let transaction = await TransactionService.addTransaction({
      description,
      amount,
      gasto,
      category,
      date,
    });
    commit(CREATE_TRANSACTION_SUCCESS, transaction);
  } catch (e) {
    commit(CREATE_TRANSACTION_ERROR, e.message);
    console.log(e);
  }
};

const fetchTransactions = async ({ commit }) => {
  try {
    commit(GET_TRANSACTIONS_REQUEST);
    let transactions = await TransactionService.getTransactions();
    commit(GET_TRANSACTIONS_SUCCESS, transactions);
  } catch (e) {
    commit(GET_TRANSACTIONS_ERROR, e.message);
    console.log(e);
  }
};

export default {
  createTransaction,
  fetchTransactions,
};
