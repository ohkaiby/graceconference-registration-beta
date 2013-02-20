( function( $ ) {
	$( document ).ready( function() {
		$( '#age .radio' ).on( 'click', function( ev ) {
			var input = $( ev.currentTarget ).children( 'input' ),
				showStatus = input.val() === '18';

			$( '#status' )[ showStatus ? 'slideDown' : 'slideUp' ]( 'slow' );
		} );

		$( '#status .radio' ).on( 'click', function( ev ) {
			var showKidsForStatuses = [ 'single', 'married' ],
				input = $( ev.currentTarget ).children( 'input' ),
				showKids = $.inArray( input.val(), showKidsForStatuses ) > -1;

			$( '#kids' )[ showKids ? 'slideDown' : 'slideUp' ]( 'slow' );
		} );

		$( '#kids .radio' ).on( 'click', function( ev ) {
			var input = $( ev.currentTarget ).children( 'input' ),
				countKids = input.val() === 'yes',
				$kidsEl = $( '#kids' );

			if ( countKids ) {
				$kidsEl.find( '.kids-count' ).fadeIn( 'fast', function() {
					$kidsEl.find( '.kids-count input' ).focus();
				} );
			} else {
				$kidsEl.find( '.kids-count' ).fadeOut( 'fast' );
			}
		} );

		$( '#church .radio' ).on( 'click', function( ev ) {
			var input = $( ev.currentTarget ).children( 'input' ),
				attendsChurch = input.val() === 'yes',
				$churchEl = $( '#church' );

			if ( attendsChurch ) {
				$churchEl.find( '.church-name' ).fadeIn( 'fast', function() {
					$churchEl.find( '.church-name input' ).focus();
				} );
			} else {
				$churchEl.find( '.church-name' ).fadeOut( 'fast' );
			}

			$( '#church .church-name' )[ attendsChurch ? 'fadeIn' : 'fadeOut' ]( 'fast' );
		} );
	} );
} )( jQuery );
