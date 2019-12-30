const migrate = require("./migrate");
const migrations = require("./migrations");

const schemaA = {
  version: "1.0",
  person: {
    name: "Edgar",
    pets: {
      type: "dog",
      name: "Daffodil"
    }
  }
};

const schemaB = {
  version: "1.1",
  person: {
    name: "Edgar"
  },
  pets: {
    type: "dog",
    name: "Daffodil"
  }
};

const schemaC = {
  version: "1.2",
  person: "Edgar",
  pets: [
    {
      type: "dog",
      name: "Daffodil"
    }
  ]
};

// Migrate from 1.0 to 1.1
console.log(migrate(schemaA, migrations, "1.1"));

// Migrate from 1.1 to 1.0
console.log(migrate(schemaB, migrations, "1.0"));

// Migrate from 1.0 to 1.2
console.log(migrate(schemaA, migrations, "1.2"));

// Migrate from 1.2 to 1.0
console.log(migrate(schemaC, migrations, "1.0"));
