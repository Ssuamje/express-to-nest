import "../../src/utils/array.extension";

describe("Array Extension", () => {
  test("randomOne", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.randomOne();
    console.log(`result: ${result}`);
    expect(arr).toContain(result);
  });

  test("randomWeightedOne", () => {
    const arr = [
      { value: 1, weight: 1 },
      { value: 2, weight: 2 },
      { value: 3, weight: 3 },
      { value: 4, weight: 4 },
      { value: 5, weight: 5 },
    ];
    const result = arr.randomWeightedOne("weight");
    console.log(`result: ${JSON.stringify(result)}`);
    expect(arr).toContain(result);
  });

  test("mapWithWeightByAge", () => {
    const arr = [
      { value: 1, age: new Date("2021-01-01") },
      { value: 2, age: new Date("2021-02-01") },
      { value: 3, age: new Date("2021-03-01") },
      { value: 4, age: new Date("2021-04-01") },
      { value: 5, age: new Date("2021-05-01") },
    ];
    const result = arr.mapWithWeightByAge("age");
    const pickedOne = result.randomWeightedOne("weight");
    console.log(`result: ${JSON.stringify(pickedOne)}`);
    expect(result).toContain(pickedOne);
  });
});
