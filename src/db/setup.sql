/***CREATING ALL TABLES*/

DROP TABLE IF EXISTS `users`;

CREATE TABLE users (
  user_id      INT AUTO_INCREMENT PRIMARY KEY,
  username     VARCHAR(40),
  firstName    VARCHAR(40),
  lastName     VARCHAR(40)
)

ENGINE=InnoDB;

/* INSERT DATA */
INSERT INTO users (username, firstName, lastName)
VALUES ('johns', 'john', 'smith');
