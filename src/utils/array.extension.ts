declare global {
  interface Array<T> {
    randomOne(): T;
    randomWeightedOne(key: keyof T): T;
    mapWithWeightByAge<K extends keyof T>(
      key: K,
      now?: Date,
    ): (T & { weight: number })[];
  }
  type Weighted<T> = T & { weight: number };
}

Array.prototype.randomOne = function (): any {
  return this[Math.floor(Math.random() * this.length)];
};

Array.prototype.randomWeightedOne = function <T>(key: keyof T): T {
  if (typeof this[0][key] !== "number") {
    throw new Error("Weight key must be a number");
  }

  const totalWeight = this.reduce(
    (acc, item) => (acc + (item[key] as number)) as unknown as number,
    0,
  );
  const randomNumber = Math.random();
  let cumulativeWeight = 0;

  for (const item of this) {
    cumulativeWeight += (item[key] as unknown as number) / totalWeight;

    if (randomNumber <= cumulativeWeight) {
      return item;
    }
  }

  throw new Error("Weighted item not found");
};

Array.prototype.mapWithWeightByAge = function <T, K extends keyof T>(
  key: K,
  now: Date = new Date(),
): Weighted<T>[] {
  if (!(this[0][key] instanceof Date)) {
    throw new Error("Weight key must be a Date");
  }
  const totalAge = this.reduce(
    (acc, item) => acc + (now.getTime() - (item[key] as Date).getTime()),
    0,
  );

  const itemWeights = this.map((item) => {
    const age = now.getTime() - (item[key] as Date).getTime();
    return 1 - Math.log(age + 1) / Math.log(totalAge + 1);
  });

  const totalWeight = itemWeights.reduce((acc, weight) => acc + weight, 0);
  if (totalWeight === 0) {
    return this.map((item) => ({ ...item, weight: 1 / this.length }));
  }

  return this.map((item, index) => {
    return { ...item, weight: itemWeights[index] / totalWeight };
  });
};

export {};
