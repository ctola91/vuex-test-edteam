const transactions = (state) => state.all;
const ingresos = (state) => {
  let result = [];
  state.all.forEach((t) => {
    if (!t.gasto) {
      result.push(t.amount);
    }
  });
  return result;
};

const totalIngresos = (state) => {
  let result = 0;
  state.all.forEach((t) => {
    result += !t.gasto ? t.amount : 0;
  });
  return result;
};

const gastos = (state) => {
  let result = [];
  state.all.forEach((t) => {
    if (t.gasto) {
      result.push(t.amount);
    }
  });

  return result;
};

const totalGastos = (state) => {
  let result = 0;
  state.all.forEach((t) => {
    result += t.gasto ? t.amount : 0;
  });
  return result;
};

const transaction = (state) => state.transaction;
const saldo = (state) => {
  let result = 0;
  state.all.forEach((t) => (result += t.gasto ? t.amount * -1 : t.amount));
  return result;
};

export default {
  transactions,
  transaction,
  ingresos,
  saldo,
  gastos,
  totalIngresos,
  totalGastos,
};
