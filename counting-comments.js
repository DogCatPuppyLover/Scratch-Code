var user = prompt("Enter the username of the person");
var pages = prompt('Enter the amount of pages you want to search')
var occurences = 0;
var count = 0;
var offset = 0;
var link = 'https://api.scratch.mit.edu/studios/5842709/comments/?offset=' + String(offset) + '&limit=40';
(function (next) {
	for (let a = 0; a < pages; a ++) { // number of pages you want to search
		$.getJSON(link, function(data) { // gets all the comments
			offset += 40;
			var link = 'https://api.scratch.mit.edu/studios/5842709/comments/?offset=' + String(offset) + '&limit=40';
			for (let i = 0; i < 40; i++ ) { // for all comments on page
				if (data[i].author.username == user) {
					++occurences; // add one to the tally
						
				}
			}
		});
	}	// return occurences
	next()
}(function() {
	console.log(occurences);
}))
