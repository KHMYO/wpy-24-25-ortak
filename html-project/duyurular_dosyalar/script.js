var subNavClear = "";
var subNavClear;
$(document).ready(function() {
		$("#mod").each(function() {
		var id = $(this).attr("data-id");
		var cerez = $.cookie(id);

		if (cerez == null) $(this).on('show.bs.modal').modal('show');
	});

	$("div.checkbox").click(function() {
		var dataname = $(this).attr("data-name");
		var datavalue = $(this).attr("data-value");

		if (datavalue == "false")
			{
				$(this).attr("data-value", "true");
				$.cookie(dataname, "true", { expires: 1, path: '/' });
			}
		else
			{
				$(this).attr("data-value", "false");
				$.cookie(dataname, "", { expires: -1, path: '/' });
			}
	});
	$("header.default > div.contain:nth-of-type(2) > nav.default > ul > li > a").hover(function() {
		$("header.default > div.contain:nth-of-type(2) > nav.default > ul > li > ul").hide();
		$(this).next("ul").slideDown(0);
		clearTimeout(subNavClear);
	}, function() {
		var ct = $(this);

		window.clearTimeout(subNavClear);
		subNavClear = window.setTimeout(function() {
			ct.next("ul").slideUp(0);
		}, 200)
	})

	$("header.default > div.contain:nth-of-type(2) > nav.default > ul > li > ul > li > a").hover(function() {
		$("header.default > div.contain:nth-of-type(2) > nav.default > ul > li > ul > li > ul").hide();
		$(this).next("ul").slideDown(0);
		clearTimeout(subNavClear);
	}, function() {
		var ct = $(this);

		window.clearTimeout(subNavClear);
		subNavClear = window.setTimeout(function() {
			ct.next("ul").slideUp(0);
		}, 200)
	})

	$("header.default > div.contain:nth-of-type(2) > nav.default > ul > li > ul > li > ul > li > a").hover(function() {
		$("header.default > div.contain:nth-of-type(2) > nav.default > ul > li > ul > li > ul > li > ul").hide();
		$(this).next("ul").slideDown(0);
		clearTimeout(subNavClear);
	}, function() {
		var ct = $(this);

		window.clearTimeout(subNavClear);
		subNavClear = window.setTimeout(function() {
			ct.next("ul").slideUp(0);
		}, 200)
	})
	$("header.default > div.contain:nth-of-type(2)").mouseleave(function() {
		$("ul ul").slideUp(200);
	});
	

	$(".scroll, .scroll2").niceScroll({
		cursorcolor: "#000",
		cursorborder: 0,
		cursorborderradius: 0,
		cursorwidth: 2,
		cursoropacitymax: .6
	})

	$("article.default img, div.htmlarea img").each(function() {
		$(this).addClass("img-responsive").css({
			"float": "none",
			"margin": "0 auto"
		});
	})

	$("header.default > div.contain:nth-of-type(2) > nav.default > ul > li > ul > li > a").each(function() {
		var html = $(this).next("ul").html();

		if (html != undefined) {
			$(this).append(" <i class=\"fa fa-fw fa-angle-down\"></i>");
		}
	})

	$("header.default > div.contain:nth-of-type(2) > nav.default > ul > li > ul > li > ul > li > a").each(function() {
		var html = $(this).next("ul").html();

		if (html != undefined) {
			$(this).prepend(" <i class=\"fa fa-fw fa-angle-right\"></i>");
		}
	})

$("table").addClass("table").css("width", "100%");
})


