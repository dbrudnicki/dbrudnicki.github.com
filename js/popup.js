(function($) {
	$.widget("djb.popup", {
		options: {
			//default message if not overridden
			message: "Empty Message",
			//default closeButtonLabel
			closeButtonLabel: "Okay",
			//default position values
			position: {
				my: "center",
				at: "center"
			}
		},
		_create: function() {
			var self = this;
			var opts = this.options;
			
			//create the wrapper and the help message
			var popupWrapper = $("<div/>").addClass("ui-widget ui-widget-content popup ui-corner-all");
			popupWrapper.append($("<span/>").css({
				"float": "left",
				"margin-top": ".2em"
				}).addClass("ui-icon ui-icon-info"));
			popupWrapper.append($("<div/>").css("padding-right", "1em").text(opts.message));
			
			//close button
			var buttons = $("<div/>");
			
			var closeBtn = $("<div/>");
			closeBtn.button({label: opts.closeButtonLabel});
			closeBtn.addClass("close-button");
			closeBtn.click(function() {
				popupWrapper.remove();
				$.Widget.prototype.destroy.call(self);
			});
			
			buttons.append(closeBtn).addClass("popup-buttons");
			popupWrapper.append(buttons);
			
			//create the overlay and add the helpWrapper and shadow elements
			var overlay = $("<div/>").css({"display": "inline-block"}).draggable();
			var shadow = $("<div/>").addClass("ui-widget-shadow popup-shadow ui-corner-all");
		
			overlay.append(popupWrapper);
			overlay.append(shadow);
			
			this.element.append(overlay);
			
			opts.position.of = self.element;
			overlay.position(opts.position);
		}
	});
})(jQuery);
