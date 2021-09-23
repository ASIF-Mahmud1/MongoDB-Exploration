const TaskSchema = {
  // TODO: Define the data model for tasks.
  name: "Task",
  properties: {
    _id: "objectId",
    name: "string",
    owner: "string?",
    status: "string",
  },
  primaryKey: "_id",

};

const UserSchema = {
  // TODO: Define the data model for users.
  name: "User",
  properties: {
    _id: "string",
    memberOf: "Project[]",
    name: "string",
  },
  primaryKey: "_id",
};

const ProjectSchema = {
  // TODO: Define the data model for projects.
  name: "Project",
  embedded: true,
  properties: {
    name: "string?",
    partition: "string?",
  },

};

exports.ProjectSchema = ProjectSchema;
exports.TaskSchema = TaskSchema;
exports.UserSchema = UserSchema;
