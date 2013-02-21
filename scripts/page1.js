( function( $ ) {
	$( document ).ready( function() {
		var slideSpeed = 'slow',
			fadeSpeed = 'fast';

		$( '#age .radio' ).on( 'click', function( ev ) {
			var $status = $( '#status' ),
				$status18 = $( '#status-18' ),
				$kids = $( '#kids' );

			$kids.slideUp( slideSpeed );

			if ( $( ev.currentTarget ).children( 'input' ).val() === '18' ) {
				$status.slideUp( slideSpeed );
				$status18.slideDown( slideSpeed );
			} else {
				$status.slideDown( slideSpeed );
				$status18.slideUp( slideSpeed );
			}
		} );

		$( '#status-18 .radio' ).on( 'click', function( ev ) {
			var showKidsForStatuses = [ 'single', 'married' ],
				input = $( ev.currentTarget ).children( 'input' ),
				showKids = $.inArray( input.val(), showKidsForStatuses ) > -1;

			$( '#kids' )[ showKids ? 'slideDown' : 'slideUp' ]( slideSpeed );
		} );

		$( '#kids .radio' ).on( 'click', function( ev ) {
			var input = $( ev.currentTarget ).children( 'input' ),
				countKids = input.val() === 'yes',
				$kidsEl = $( '#kids' );

			if ( countKids ) {
				$kidsEl.find( '.kids-count' ).fadeIn( fadeSpeed, function() {
					$kidsEl.find( '.kids-count input' ).focus();
				} );
			} else {
				$kidsEl.find( '.kids-count' ).fadeOut( fadeSpeed );
			}
		} );

		$( '#church .radio' ).on( 'click', function( ev ) {
			var input = $( ev.currentTarget ).children( 'input' ),
				attendsChurch = input.val() === 'yes',
				$churchEl = $( '#church' );

			if ( attendsChurch ) {
				$churchEl.find( '.church-name' ).fadeIn( fadeSpeed, function() {
					$churchEl.find( '.church-name input' ).focus();
				} );
			} else {
				$churchEl.find( '.church-name' ).fadeOut( fadeSpeed );
			}

			$( '#church .church-name' )[ attendsChurch ? 'fadeIn' : 'fadeOut' ]( fadeSpeed );
		} );
	} );
} )( jQuery );
