const express = require( "express" );
const app = express();

const { cards } = require( "./cards.json" );
const shuffle = require("./shuffle");

app.listen( 3000, () => console.log( "Listening: port 3000" ) );

// Endpoints
app.get( "/deck", ( request, response ) => {
    response.json( request.query.shuffled === "true" ? shuffle( cards ) : cards );
} );

// 404 not found response
app.use( ( request, response ) => response.status( 404 ) );
