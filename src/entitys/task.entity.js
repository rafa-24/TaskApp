const EntitySchema = require("typeorm").EntitySchema;
const uuid = require("uuid");

module.exports = new EntitySchema({
      name: "Task",
      columns: {

            id: {
                  primary: true, type: "int", generated: false
            },

            title: {
                  type: "varchar"
            },

            description: {
                  type: "text"
            },

            completed: {
                  type: "boolean"
            }
      }
});


