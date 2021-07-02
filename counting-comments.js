var user = prompt("Enter the username of the person");
var pages = prompt('Enter the amount of pages you want to search')
var occurences = 0;
var count = 0;
var offset = -40;
var link = 'https://api.scratch.mit.edu/studios/5842709/comments/?offset=' + String(offset) + '&limit=40';
function getPageJSON(a, link) {
	$.getJSON(link, function(data) {
		offset +=40;

		// var link = 'https://api.scratch.mit.edu/studios/5842709/comments/?offset=' + String(offset) + '&limit=40';
		for (let i = 0; i < 40; i ++) {
			console.log(occurences);
			if (data[i].author.username == user) {
				++ occurences
			}
		}
		console.log('comments since ' + String(data[39].datetime_created));
	});
}

(function (next, t) {
	setTimeout(function() {
		for (let a = 0; a < pages; a ++) {
			offset +=40;
			var link = 'https://api.scratch.mit.edu/studios/5842709/comments/?offset=' + String(offset) + '&limit=40';
			getPageJSON(a, link);
		}

	}, t * 5000);
	next() // this part isn't working but whatever
}(function() {
}))
