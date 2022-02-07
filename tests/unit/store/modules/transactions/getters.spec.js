import getters from "../../../../../src/store/modules/transactions/transactions.getters";

describe("Getters test", () => {
  it("Debe retornar el arreglo de ingresos", () => {
    const state = {
      all: [
        {
          id: 1,
          amount: 100,
          description: "test 1",
          gasto: true,
        },
        {
          id: 2,
          amount: 150,
          description: "test 2",
          gasto: false,
        },
      ],
    };
    const trIngresos = getters.ingresos(state);
    expect(trIngresos).toBeInstanceOf(Array);
    expect(trIngresos.length).toBeLessThanOrEqual(state.all.length);
    expect(trIngresos).toMatchObject([150]);
  });
});
