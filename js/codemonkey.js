$(document).ready(function() {
	$(document).bind("contextmenu", function(event) {
		event.preventDefault();
	});
	
	$("#header").load("pages/menu.html", function() {
		$(".menu li").addClass("ui-corner-all");
		$(".menu li ul").hide();
		
		//on hover event
		$(".menu li").hover(function() {
			var subMenu = $("ul", this); 
			$(this).not(subMenu).stop();

			subMenu.parent().removeClass("ui-corner-all");
			subMenu.parent().addClass("ui-corner-top");
			subMenu.addClass("ui-corner-all");
			
			$("li", subMenu).click(function(event) {
				event.stopImmediatePropagation();
				
				subMenu.parent().siblings().removeClass("current");
				subMenu.parent().addClass("current");
				subMenu.slideUp();
				subMenu.parent().addClass("ui-corner-all");
			});
			
			subMenu.slideDown(125);
		}, function() {
			var self = this;
			$("ul", this).slideUp(125, function() {
				$(self).addClass("ui-corner-all");
			});
		});
		
		//on click event
		$(".menu li").click(function() {
			var me = $(this);
			me.siblings().removeClass("current");
			me.addClass("current");
			
			$("ul", this).slideUp();
			me.addClass("ui-corner-all");
			
			$.loadContent(me.data("name"));
		});
	});
	
	$("#content").load("pages/home/home.html", function() {
		SyntaxHighlighter.highlight();
	});
});

(function($) {
	function applyCode() {
		$("#jQBasicButton").myButton({
			click: function() {
				alert("Hello World!");
			}
		});
	};
	
	$.loadContent = function(name) {
		var content = $("#content");
		var left = $("#left");
		var right = $("#right");
		
		left.animate({"width": "50%"}, 1000);
		right.animate({"width": "50%"}, 1000, function() {
			content.empty();
			content.load("pages/" + name + ".html", function() {
				SyntaxHighlighter.highlight();
				applyCode();
				left.animate({"width": "10em"}, 1000);
				right.animate({"width": "10em"}, 1000);
			});
		});
	};
	
	$.widget("djb.myButton", {
		_create: function() {
			var self = this;
			
			this.element.button({label: this.element.text()});
			this.element.click(function(event, ui) {
				self._trigger("click", event, ui);
			});
		}
	});
})(jQuery);
