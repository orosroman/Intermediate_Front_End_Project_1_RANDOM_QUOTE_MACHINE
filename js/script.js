$(document).ready(function() {

	var author;

	var twUrl = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";

  	$("body").css("display","none").fadeIn(2000);

	$.getJSON("http://api.forismatic.com/api/1.0/?format=jsonp&method=getQuote&jsonp=?&lang=en", function(obj) {
		
		$("#quote").html(obj.quoteText);
		
		if (obj.quoteAuthor !== "") {
			author = obj.quoteAuthor;
		} else {
			author = "Unknown author";
		}

		$("#author").html(author);


		$("#twitter").attr("href", twUrl + '"' + obj.quoteText + '"' + " - " + author);


	});


	$("#get-quote").on("click", function() {

		$("#quote-section").fadeOut("slow", function() {

			$.getJSON("http://api.forismatic.com/api/1.0/?format=jsonp&method=getQuote&jsonp=?&lang=en", function(obj) {
			
			$("#quote").html(obj.quoteText);
			
			if (obj.quoteAuthor !== "") {
				author = obj.quoteAuthor;
			} else {
				author = "Unknown author";
			}

			$("#author").html(author);

			$("#twitter").attr("href", twUrl + '"' + obj.quoteText + '"' + " - " + author);

			});

			$("#quote-section").fadeIn("slow");

		});
	
	});

});

