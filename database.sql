
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "daily_pet_todo" (
	"id" SERIAL PRIMARY KEY, 
	"tasks" VARCHAR (1000) NOT NULL,
	"completed" BOOLEAN,
	"user_id" INTEGER NOT NULL REFERENCES "user"
);

CREATE TABLE "long_term_goals" (
	"id" SERIAL PRIMARY KEY,
	"goals" VARCHAR (1000) NOT NULL,
	"user_id" INTEGER NOT NULL REFERENCES "user"
);	