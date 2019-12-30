const migrations = [
  {
    from: "1.0",
    to: "1.1",
    up: schema => {
      const newSchema = {
        version: "1.1",
        person: {
          name: schema.person.name
        },
        pets: {
          ...schema.person.pets
        }
      };
      return newSchema;
    },
    down: schema => {
      const newSchema = {
        version: "1.0",
        person: {
          ...schema.person,
          pets: { ...schema.pets }
        }
      };
      return newSchema;
    }
  },
  {
    from: "1.1",
    to: "1.2",
    up: schema => {
      const newSchema = {
        version: "1.2",
        person: schema.person.name,
        pets: [schema.pets]
      };
      return newSchema;
    },
    down: schema => {
      const newSchema = {
        version: "1.1",
        person: {
          name: schema.person
        },
        pets: schema.pets[0]
      };
      return newSchema;
    }
  }
];

module.exports = migrations;
