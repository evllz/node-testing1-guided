// Test away!
const Car = require("./car");

describe("car class", () => {
  let prius;
  beforeEach(() => {
    prius = new Car("toyota", "prius", 0);
  });

  test("car class exists", () => {
    expect(Car).toBeDefined();
  });
  test("creates instances of Car", () => {
    const prius = new Car("toyota", "prius");
    expect(prius).toBeInstanceOf(Car);
  });
  test.todo("Cars should have a make property");
  //AAA - Arrange, Act, Assess
  test("Test", () => {
    //arrange
    const expected = "toyota";
    //act
    const actual = new Car(expected, "prius").make;
    //assess
    expect(actual).toBe(expected);
  });
  test("model", () => {
    expect(prius.model).toBe("prius");
  });

  test("driven increases the odometer by distance", () => {
    prius.drive(5);
    expect(prius.odometer).toBe(5);
  });

  test("drive supports coma-separated leg distances", () => {
    expect(prius.drive(1, 2, 3)).toBe(6);
  });
  test("async drive works well", async () => {
    let distance = await prius.asyncDrive(1, 2, 3);
    expect(prius.odometer).toBe(6);
  });
});
