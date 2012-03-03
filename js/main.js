$(document).ready(function() {
	//disable the context menu
	$(document).bind("contextmenu", function(event) {
		event.preventDefault();
	});
	
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
});
