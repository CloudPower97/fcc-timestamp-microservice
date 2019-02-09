# API Micro Service: Timestamp microservice

## Description

This project is part of the **FCC Apis And Microservices Certification**.

## User stories

1. The **API** endpoint is `GET https://fcc-timestamp-api-project.herokuapp.com/api/timestamp/:date_string?`
2. A date string is valid if can be successfully parsed by new Date(date*string).
   Note that the unix timestamp needs to be an **integer** (not a string) specifying **milliseconds**.
   In our test we will use date strings compliant with \_ISO-8601* (e.g. _"2016-11-20"_) because this will ensure an _UTC_ timestamp.
3. If the date string is **empty** it should be equivalent to trigger `new Date()`, i.e. the service uses the current timestamp.
4. If the date string is **valid** the api returns a _JSON_ having the structure
   `{"unix": <date.getTime()>, "utc" : <date.toUTCString()> }`
   e.g. `{"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}`
5. If the date string is **invalid** the api returns a _JSON_ having the structure
   `{"error" : "Invalid Date" }`.

## Example Usage

- <https://fcc-timestamp-api-project.herokuapp.com/api/timestamp/1997-01-18>
- <https://fcc-timestamp-api-project.herokuapp.com/api/timestamp/853545600000>

_Example Output:_
`{ "unix": 853545600000, "utc": "Sat, 18 Jan 1997 00:00:00 GMT" }`

Coded with music, coffe and love by _Claudio Cortese_
