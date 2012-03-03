$(document).ready(function() {
	//disable the context menu
	/*
	$(document).bind("contextmenu", function(event) {
		event.preventDefault();
	});
	*/
	
	//load links and main content
	$("#nav-list").load("pages/links.html", function() {
		//define link mapping
		$(this).find("ul li a").click(function(event) {
			event.preventDefault();
			$("#content").load("pages/" + $(this).attr("href") + ".html", function() {
				SyntaxHighlighter.highlight();
			});
		});
	});
	$("#content").load("pages/main.html");
	
	var msg = outerFunc("The message is");
	console.log(msg("Hello"));
	console.log(msg("World"));
});

function outerFunc(label) {
	function innerFunc(value) {
		return label + ": "+ value;
	};
	
	return innerFunc;
};
