const host = process.env.MYSQL_HOST || "localhost";

module.exports = {
  username: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "",
  database: process.env.MYSQL_DATABASE || "sustaintracker",
  host,
  dialect: "mysql",
  dialectOptions:
    host !== "localhost" && host !== "database"
      ? {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        }
      : {},
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

const runType = {
  development: {
    username: "root",
    password: null,
    database: "sustaintracker",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "sustaintracker",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "sustaintracker",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
