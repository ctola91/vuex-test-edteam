import mutations from "../../../../../src/store/modules/transactions/transactions.mutations";

describe("Mutations tests", () => {
  it("GET_TRANSACTIONS_REQUEST", () => {
    const state = {
      loading: false,
    };

    mutations.GET_TRANSACTIONS_REQUEST(state);
    expect(state.loading).toBeTruthy();
  });

  it("GET_TRANSACTIONS_SUCCESS", () => {
    const transactions = [
      { id: 1, amount: 150, description: "test", gasto: true },
    ];

    const state = {};

    mutations.GET_TRANSACTIONS_SUCCESS(state, transactions);
    expect(state.loading).toBeFalsy();
    expect(state.all).toBeInstanceOf(Array);
    expect(state.all).toBe(transactions);
  });
});
