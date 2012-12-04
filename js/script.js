( function( $ ) {
	$( function() {
		var loading = $( '.loading' ),
			list = $( '#presentation-list' );

		// AJAX request
		$.getJSON( './files/public.json', function( data ) {
			var items = [];

			// Content check
			if ( $.isEmptyObject( data.presentations ) )
				loading.html( '<span class="error">ERROR #1: Please try to load the page again.</span>' );

			// Go through each item
			$.each( data.presentations, function( path, val ) {
				var authors = '';

				// Any authors?
				if ( ! $.isEmptyObject( val.authors ) )
					authors = ' (' + val.authors.join(', ') + ')';

				items.push( '<li><a href="files/' + path + '" target="_blank">' + val.title + authors + '</li>' );
			} );

			// Add to list
			list.html( items );

		} ).error( function( a, b, c ) {
			// A bit error handling
			if ( 'unexpected_token' == c.type )
				loading.html( '<span class="error">ERROR #3: Wrong syntax. A comma too much?</span>' );
			else
				loading.html( '<span class="error">ERROR #2: Please try to load the page again.</span>' );
		} );
	} );
}( jQuery ) );
