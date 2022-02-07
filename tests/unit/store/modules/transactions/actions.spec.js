import actions from "../../../../../src/store/modules/transactions/transactions.actions";

describe("Actions tests", () => {
  it("Verificar que la accion createTransaction ejecuta 2 mutations", async () => {
    const mockCommit = jest.fn();
    const mockTransaction = {
      description: "Test 1",
      amount: 150,
      gasto: false,
      category: null,
      date: Date.now(),
    };

    await actions.createTransaction({ commit: mockCommit}, mockTransaction);
    expect(mockCommit).toHaveBeenCalledTimes(2);
  });
});
