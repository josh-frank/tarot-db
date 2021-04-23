# tarot-db

This is a very simple static tarot API, created to test and demonstrate the creation of a web API with Express.

Run `npm install` and then `npm run start` to use. All routes are `GET` routes. Errors will result in a `404` and JSON response of `{ "error": "Not found" }`.

## Endpoints

### `/deck`
- **Response:** the full 78-card tarot deck
-- **Optional query:** `shuffled=[ true ]` responds with a shuffled/randomly-ordered deck - omitting it or passing anything other than `true` responds with an ordered unshuffled deck

### `/cards/:id`
- **Response:** a single card corresponding to the `id` parameter
- **Errors:** a card ID not between 1 and 78 results in a `400` and a `{ "error": "Invalid card ID" }` JSON response

### `/draw/:handSize`
- **Response:** a random hand/spread of 'n' cards where 'n == handSize'
- **Errors:** passing a `handSize` which is `undefined` or greater than 78 results in a `400` and a `{ "error": "Invalid hand size" }` JSON response
