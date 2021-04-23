const express = require( "express" );
const app = express();

const { cards } = require( "./cards.json" );
const shuffle = require("./shuffle");

app.listen( 3000, () => console.log( "Listening: port 3000" ) );

// Endpoints
app.get( "/deck", ( request, response ) => {
    response.json( request.query.shuffled === "true" ? shuffle( cards ) : cards );
} );

app.get( "/cards/:id", ( request, response ) => {
    const cardId = parseInt( request.params.id );
    if ( cardId < 1 || cardId > 78 ) {
        response.status( 400 ).json( { "error": "Invalid card ID" } );
        return;
    }
    response.json( cards.find( card => card.id == request.params.id ) );
} );

app.get( "/draw/:handSize", ( request, response ) => {
    const handSize = parseInt( request.params.handSize );
    if ( !handSize || handSize > 78 ) {
        response.status( 400 ).json( { "error": "Invalid hand size" } );
        return;
    }
    response.json( shuffle( cards ).slice( 0, handSize ) );
} );

// 404 not found response
app.use( ( request, response ) => response.status( 404 ).json( { "error": "Not found" } ) );
