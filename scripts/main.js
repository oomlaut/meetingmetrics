//@codekit-prepend "plugins.js"
if(typeof jQuery !== undefined){
(function($){

	var ticker = new Ticker();

	$("input.control").on("focus", function(){
		$(this).trigger("select");
	});
	// Bind custom events to overlay elements
	$("#overlay").on("hide", function(){
		ticker.stop();
		$(this).fadeOut("fast");
		$('input.control[name="pad"]').val(0);
	}).trigger("hide")
	.on("show", function(){
		var $this = $(this).fadeIn("slow");
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

	// Bind event to start button
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

	// Bind event to stop button
	$("#stop").on("click", function(e){
		e.preventDefault();
		$("#overlay").trigger("hide");
	});

	// Bind event to reset button
	$("#reset").on("click", function(e){
		e.preventDefault();
		$("#overlay").trigger("reset");
	});
})(jQuery);
}
