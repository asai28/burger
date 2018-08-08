CREATE DATABASE burgers_db;
use burgers_db;

CREATE TABLE burgers(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(100),
    devoured BOOLEAN DEFAULT FALSE
);