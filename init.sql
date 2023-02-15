CREATE DATABASE fullcycle;
USE fullcycle;
CREATE TABLE if not exists people (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255),
    primary key (id)
);