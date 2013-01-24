;(function( $ ){
  $.fn.uhmshare = function( options ) {
		this.addClass('uhmshare-css');
		
		var settings = $.extend( {
		   'url'         : $(location).attr('href')
		  ,'title'       : $(document).attr('title')
		  ,'facebook'    : true
		  ,'twitter'     : true
		  ,'pinterest'   : true
		  ,'stumbleupon' : true
		  ,'email'       : false // todo
		  ,'lightbox'    : false // todo
		}, options);
        
		var create = {
			// Create the Social element.
			element : function( e, classname, popup_url ){
				var el = $('<a/>', { 'class': 'uhmshare-button uhmshare-'+classname ,html : '&nbsp;' }).appendTo( e );
				
				// add click event to the item.
				// standard ugly window popup is used. ( Lightbox-isch )
				if( false == settings.lightbox ){
					$(el).click(function(ev){
						window.open( popup_url, "popup"+classname, "height=400,width=550,resizable=1,toolbar=0,menubar=0,status=0,location=0" );
						ev.preventDefault();
						return false;
					});
				}else{
					$(el).click(function(ev){
						console.log('lightbox or something else!');
					});
				}
				
				return el;
			},
			
			// Create the counter placeholder
			count : function( count ){
				return $('<div/>', { 'class': 'count', html : '<span>'+count+'</span>' } );
			}
		}
				
		var buttons = {
			facebook : function( e, url ){
				var share_url = 'http://www.facebook.com/sharer.php?u='+url;
				var el_facebook = create.element( e, 'facebook', share_url );
				
				$.get("https://graph.facebook.com/?id="+url+"&callback=?", function(data) {
					var count = ( (data.shares != 0) && (data.shares != undefined) && (data.shares != null) ? data.shares : '0' );
					$(el_facebook).addClass('hascount').after( create.count(count) );
				},'jsonp');
			},
			
			twitter : function( e, url, title ){
				var share_url = 'http://twitter.com/intent/tweet?text='+title+'&amp;url='+url;
				var el_twitter = create.element( e, 'twitter', share_url );
				
				$.get("http://urls.api.twitter.com/1/urls/count.json?url="+url+"&callback=?", function(data) { 
					var count = ( (data.count != 0) && (data.count != undefined) && (data.count != null) ? data.count : '0' );
					$(el_twitter).addClass('hascount').after( create.count(count) );				
				},'jsonp');
			},
			
			pinterest : function( e, url ){
				var share_url = 'http://pinterest.com/pin/create/button/?url='+url;
				var el_pinterest = create.element( e, 'pinterest', share_url );
				
				$.get("http://api.pinterest.com/v1/urls/count.json?url="+url+"&callback=?", function(data) {
					var count = ( (data.count != 0) && (data.count != undefined) && (data.count != null) ? data.count : '0' );
					$(el_pinterest).addClass('hascount').after( create.count(count) );
				},'jsonp');
			},
			
			stumbleupon : function( e, url, title ){
				var share_url = 'http://www.stumbleupon.com/submit?url='+url+'title='+title;
				create.element( e, 'stumbleupon', share_url );
			}
		}
		
		// loop all 'uhmshare' elements and add the buttons that are enabled.
		return this.each(function() { 
			var  e     = $(this)
				,url   = encodeURIComponent( e.data('url') || settings.url )
				,title = ( e.data('title') || settings.title );
		 		  
			if( true === settings.facebook){ buttons.facebook( e, url  ); }
			if( true === settings.twitter){ buttons.twitter( e, url, title ); }
			if( true === settings.pinterest){ buttons.pinterest( e, url ); }
			if( true === settings.stumbleupon ){ buttons.stumbleupon( e, url, title ); }
		});
	};
})( jQuery );
