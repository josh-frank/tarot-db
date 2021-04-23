const shuffle = deck => {
    const result = [ ...deck ];
    for ( let i = result.length - 1; i > 0; i-- ) {
        const j = Math.floor( Math.random() * ( i + 1 ) );
        [ result[ i ], result[ j ] ] = [ result[ j ], result[ i ] ];
    }
    return result;
}

module.exports = shuffle;
