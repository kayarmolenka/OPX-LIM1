console.log("MAIN JS FILE");

const inputExample = [
  {
    category: "personal",
    value: 14,
  },
  {
    category: "personal",
    value: 22,
  },
  {
    category: "business",
    value: 13,
  },
  {
    category: "business",
    value: 41,
  },
  {
    category: "business",
    value: 25,
  },
  {
    category: "public",
    value: 14,
  },
];

const outputExample = [
  {
    category: "personal",
    groupItems: [
      {
        category: "personal",
        value: 14,
      },
      {
        category: "personal",
        value: 22,
      },
    ],
  },
  {
    category: "business",
    groupItems: [
      {
        category: "business",
        value: 13,
      },
      {
        category: "business",
        value: 41,
      },
      {
        category: "business",
        value: 25,
      },
    ],
  },
  {
    category: "public",
    groupItems: [
      {
        category: "public",
        age: 14,
      },
    ],
  },
];

function groupByField(items, fieldName = "category") {
  const existingValue = [];

  return items.reduce((accumulator, currentValue) => {
    const key = currentValue[fieldName];

    if (existingValue.includes(currentValue[fieldName])) {
      accumulator.map((el) => {
        if (el[fieldName] === currentValue[fieldName]) {
          el.groupItems.push(currentValue);
        }
      });
    } else {
      accumulator.push({
        [fieldName]: key,
        groupItems: [currentValue],
      });
      existingValue.push(currentValue[fieldName]);
    }

    return accumulator;
  }, []);
}

console.log(groupByField(inputExample, "category"));
console.log(groupByField(inputExample, "value"));
