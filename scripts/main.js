//@codekit-prepend "plugins.js"
if(typeof jQuery !== undefined){
(function($){
	var ticker = {
		secondsPassed: 0,
		heartbeat: null,
		init: function(){
			// this.reset();
		},
		start: function(obj){
			var context = this;
			if(obj.pad > 0) {
				context.addTime(obj.pad);
			}
			context.heartbeat = window.setInterval(function(){
				obj.el.trigger("update", {
					elapsed: ++context.secondsPassed
				});
			}, 1000);
		},
		stop: function(){
			var context = this;
			window.clearInterval(context.heartbeat);
		},
		reset: function(){
			this.secondsPassed = 0;
			window.clearInterval(this.heartbeat);
			return true;
		},
		addTime: function(minutes){
			var seconds = minutes * 60;
			this.secondsPassed = this.secondsPassed + seconds;
		}
	};
	// ticker.init();


	$("#overlay").on("hide", function(){
		$(this).hide();
		ticker.stop();
	}).trigger("hide")
	.on("show", function(){
		var $this = $(this).show();
		$('input.control[name="pad"]').val(0);
		// validate form fields

		ticker.start({
			el: $this,
			pad: $('input.control[name="pad"]').val()
		});
	})
	.on("update", function(e, obj){
		var rate = $('input.control[name="attending"]', "#calculator").val();
		var attending = $('input.control[name="rate"]', "#calculator").val();
		var accrued = ((rate * attending) / (60 * 60)) * obj.elapsed;
		$("#accrued").text(accrued.toFixed(2));
		$("#elapsed").text(obj.elapsed.toString().toHHMMSS());
	})
	.on("reset", function(){
		ticker.reset();
		$("input.control").each(function(i, v){
			$(v).val($(v).attr("data-default"));
		});

		$("span", this).each(function(i,v){
			$(v).text($(v).attr("data-default"));
		});
	}).trigger("reset");

	$("#start").on("click", function(e){
		e.preventDefault();
		var errorCount = 0;
		$("input.control", "#calculator").each(function(i,v){
			var $v = $(v);
			var $parent = $(v).parents(".control-group");
			if($v.val() === ""){
				errorCount++;
				$parent.addClass("error");
			} else {
				if($v.val().match($v.attr("pattern"))){
					errorCount++;
					$parent.addClass("error");
				} else {
					$parent.removeClass("error");
				}
			}
		});
		if(errorCount === 0){
			$("#overlay").trigger("show");
		}
	});
	$("#stop").on("click", function(e){
		e.preventDefault();
		$("#overlay").trigger("hide");
	});
	$("#reset").on("click", function(e){
		e.preventDefault();
		$("#overlay").trigger("reset");
	});
})(jQuery);
}
