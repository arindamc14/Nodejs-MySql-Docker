/***CREATING ALL TABLES*/
CREATE TABLE users (
  PRIMARY KEY  (id),
  username     VARCHAR(40)                    NULL,
  firstName    VARCHAR(40)                    NULL,
  lastName     VARCHAR(40)                    NULL
)

/* INSERT DATA */
INSERT INTO users (username, firstName, lastName)
VALUES ('johns', 'john', 'smith');
