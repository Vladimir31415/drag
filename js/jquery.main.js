// page init
//popup
jQuery(function(){
	initTabs();
});
$(document).ready(function(){
	if ($('.click-map').on("click", function(show){
			$('.popup1').show();
			 return false;
		}));
		 $('.close').on("click", function(show){
			 $('.popup1').hide();
			  return false;
		 });
		  $(document).mouseup(function (e){
		var div = $("#popup1");
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			$(".popup1").css('display', 'none');
		}
	});
		/* $('.long').on('click',function(show){
		console.log('click');
		if(!$('#sidebar').hasClass('narrow') ){
			console.log('opened');
			$('#sidebar').addClass('tabOpened2');
		}else{

	 		$('#rev-tab').slideUp().removeClass('tabOpened2');
		}
		return false
	});
		$('#link-fr-mb').on('click',function(show){
		console.log('click');
		if(!$('#form-mob').hasClass('frOpened') ){
			console.log('opened');
			$('#form-mob').slideDown().addClass('frOpened');
		}else{

	 		$('#form-mob').slideUp().removeClass('frOpened');
		}
		return false
		
	});*/
	$(".long").click(function(){
	$(".long").addClass('active');
	$(".short").removeClass('active');
	  $("#sidebar").animate({
	    width: "210",
	  }, 500 );
	  $("#sidebar").removeClass('narrow');
	  $(".tx-base").text('Выбирите город и базу');
	  $(".offic").text('По всей компании')
	});
	$(".short").click(function(){
	$(".short").addClass('active');
	$(".long").removeClass('active');
	  $("#sidebar").animate({
	    width: "80",
	  }, 1500 );
	  $("#sidebar").addClass('narrow');
	   $(".tx-base").text('База');
	  $(".offic").text('Офис');
	    $(".tooltip").css({'margin-left': '+200'});
	    $(".tooltip").css({'left': '+=200'});
	});
	/*$('.as-col').on('click',function(show){
		console.log('click');
		if(!$('.as-col').hasClass('drop-active') ){
			console.log('opened');
			$('.hidd-block').slideDown().addClass('block-active');
		}else{

	 		$('.hidd-block').slideUp().removeClass('block-active');
		}
		return false
	});*/
	if ($('.as-col').on("click", function(){
		if(!$(this).hasClass('drop-active')){
			$(this).addClass('drop-active');
			$(this).find('.hidd-block').slideDown();
		}else{
			$(this).removeClass('drop-active');
	 		$(this).find('.hidd-block').slideUp();
		}
		return false;
	}));
	if ($('.problem a').on("click", function(){
		if(!$(this).hasClass('problem-active')){
			$(this).addClass('problem-active');
			$(this).siblings('.hidd-probl').show();
		}else{
			$(this).removeClass('problem-active');
	 		$(this).siblings('.hidd-probl').hide();
		}
		return false;
	}));
	/*$('.problem').on("click", function(show){	
	  if ($('.problem').on("click", function(show){
			$('.hidd-probl').show();
		}));
		 $('.hidd-probl').on("click", function(show){
			 $('.hidd-probl').hide();
	 });*/
		/*$('select').on('focus',function(){
			$(this).trigger('click');
			$('.jq-selectbox__dropdown').show();
		});
*/
	if ($('.menu-box').on("click", function(){
		if(!$(this).hasClass('op-links')){
			$(this).addClass('op-links');
			$(this).siblings('.drop-links').show().removeClass('dl');
			console.log('drop');
		}else{
			
			$(this).removeClass('op-links');
	 		$(this).siblings('.drop-links').hide().addClass('dl');
	 		console.log('drop2');
		}
		return false;
	}));
		$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".drop-links"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.hide().removeClass('dl'); // скрываем его
		}
	});
		if ($('.comm').on("click", function(){
		if(!$(this).hasClass('op-dr')){
			$(this).addClass('op-dr');
			$(this).siblings('.drop-comm').show().removeClass('dc');
			console.log('drop');
		}else{
			
			$(this).removeClass('op-dr');
	 		$(this).siblings('.drop-comm').hide().addClass('dc');
	 		console.log('drop2');
		}
		return false;
	}));
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".drop-comm"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.hide().removeClass('dc'); // скрываем его
			$(".comm").removeClass('op-dr');
		}

	});
		if ($('.comm.op-dr').on("click", function(){
		if($(this).hasClass('op-dr')){
			$(this).removeClass('op-dr');
			console.log('drop3');
		}
	}));
	if ($('.wr-comm').on("click", function(){
		if(!$(this).hasClass('wr-act')){
			$(this).addClass('wr-act');
			$(this).siblings('.text-wr').slideDown();
			$(this).text('Отправить комментарий')
		}else{
			$(this).removeClass('wr-act');
	 		$(this).siblings('.text-wr').slideUp();
		}
		return false;
	}));
		if ($('.err-red').on("click", function(){
		if(!$(this).hasClass('err-dr')){
			$(this).addClass('err-dr');
			$(this).siblings('.drop-comm').show().removeClass('dc');
			console.log('drop');
		}else{
			
			$(this).removeClass('err-dr');
	 		$(this).siblings('.drop-comm').hide().addClass('dc');
	 		console.log('drop2');
		}
		return false;
	}));
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".drop-comm"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.hide().removeClass('dc'); // скрываем его
			$(".comm").removeClass('op-dr');
		}

	});
	if ($('.err-green').on("click", function(){
		if(!$(this).hasClass('err-dr')){
			$(this).addClass('err-dr');
			$(this).siblings('.drop-comm').show().removeClass('dc');
			console.log('drop');
		}else{
			
			$(this).removeClass('err-dr');
	 		$(this).siblings('.drop-comm').hide().addClass('dc');
	 		console.log('drop2');
		}
		return false;
	}));
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".drop-comm"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.hide().removeClass('dc'); // скрываем его
			$(".comm").removeClass('op-dr');
		}

	});

});	
	
// tultip
$(document).ready(function(){
		 var showingTooltip;

    document.onmouseover = function(e) {
      var target = e.target;

      var tooltip = target.getAttribute('data-tooltip');
      if (!tooltip) return;

      var tooltipElem = document.createElement('div');
      tooltipElem.className = 'tooltip';
      tooltipElem.innerHTML = tooltip;
      document.body.appendChild(tooltipElem);

      var coords = target.getBoundingClientRect();

      var left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
      if (left < 0) left = 0; // не вылезать за левую границу окна

      var top = coords.top - tooltipElem.offsetHeight - 5;
      if (top < 0) { // не вылезать за верхнюю границу окна
        top = coords.top + target.offsetHeight + 5;
      }

      tooltipElem.style.left = left + 'px';
      tooltipElem.style.top = top + 'px';

      showingTooltip = tooltipElem;
    };

    document.onmouseout = function(e) {

      if (showingTooltip) {
        document.body.removeChild(showingTooltip);
        showingTooltip = null;
      }

    };
 });
//validate number
$(document).ready(function(){
	$('.jq-number').on("click",".jq-number__spin", function(){
		var $this = $(this);
		var input_val = $(this).siblings('.jq-number__field').find('input').val();
		if($this.hasClass('minus')){
			if(input_val == 1){
				$this.addClass('disabled');
			}
		} else if($this.hasClass('plus')){
			$this.siblings('.minus').removeClass('disabled');
		}
	});
});
// content tabs init
function initTabs() {
	jQuery('ul.tabset').contentTabs({
		tabLinks: 'a'
	});
}

/*
 * jQuery Tabs plugin
 */
;(function($){
	$.fn.contentTabs = function(o){
		// default options
		var options = $.extend({
			activeClass:'active',
			addToParent:false,
			autoHeight:false,
			autoRotate:false,
			checkHash:false,
			animSpeed:400,
			switchTime:3000,
			effect: 'none', // "fade", "slide"
			tabLinks:'a',
			attrib:'href',
			event:'click'
		},o);

		return this.each(function(){
			var tabset = $(this), tabs = $();
			var tabLinks = tabset.find(options.tabLinks);
			var tabLinksParents = tabLinks.parent();
			var prevActiveLink = tabLinks.eq(0), currentTab, animating;
			var tabHolder;

			// handle location hash
			if(options.checkHash && tabLinks.filter('[' + options.attrib + '="' + location.hash + '"]').length) {
				(options.addToParent ? tabLinksParents : tabLinks).removeClass(options.activeClass);
				setTimeout(function() {
					window.scrollTo(0,0);
				},1);
			}

			// init tabLinks
			tabLinks.each(function(){
				var link = $(this);
				var href = link.attr(options.attrib);
				var parent = link.parent();
				href = href.substr(href.lastIndexOf('#'));

				// get elements
				var tab = $(href).hide();
				tabs = tabs.add(tab);
				link.data('cparent', parent);
				link.data('ctab', tab);

				// find tab holder
				if(!tabHolder && tab.length) {
					tabHolder = tab.parent();
				}

				// show only active tab
				var classOwner = options.addToParent ? parent : link;
				if(classOwner.hasClass(options.activeClass) || (options.checkHash && location.hash === href)) {
					classOwner.addClass(options.activeClass);
					prevActiveLink = link; currentTab = tab;
					tab.removeClass(tabHiddenClass).width('');
					contentTabsEffect[options.effect].show({tab:tab, fast:true});
				} else {
					var tabWidth = tab.width();
					if(tabWidth) {
						tab.width(tabWidth);
					}
					tab.addClass(tabHiddenClass);
				}

				// event handler
				link.bind(options.event, function(e){
					if(link != prevActiveLink && !animating) {
						switchTab(prevActiveLink, link);
						prevActiveLink = link;
					}
				});
				if(options.attrib === 'href') {
					link.bind('click', function(e){
						e.preventDefault();
					});
				}
			});

			// tab switch function
			function switchTab(oldLink, newLink) {
				animating = true;
				var oldTab = oldLink.data('ctab');
				var newTab = newLink.data('ctab');
				prevActiveLink = newLink;
				currentTab = newTab;

				// refresh pagination links
				(options.addToParent ? tabLinksParents : tabLinks).removeClass(options.activeClass);
				(options.addToParent ? newLink.data('cparent') : newLink).addClass(options.activeClass);

				// hide old tab
				resizeHolder(oldTab, true);
				contentTabsEffect[options.effect].hide({
					speed: options.animSpeed,
					tab:oldTab,
					complete: function() {
						// show current tab
						resizeHolder(newTab.removeClass(tabHiddenClass).width(''));
						contentTabsEffect[options.effect].show({
							speed: options.animSpeed,
							tab:newTab,
							complete: function() {
								if(!oldTab.is(newTab)) {
									oldTab.width(oldTab.width()).addClass(tabHiddenClass);
								}
								animating = false;
								resizeHolder(newTab, false);
								autoRotate();
							}
						});
					}
				});
			}

			// holder auto height
			function resizeHolder(block, state) {
				var curBlock = block && block.length ? block : currentTab;
				if(options.autoHeight && curBlock) {
					tabHolder.stop();
					if(state === false) {
						tabHolder.css({height:''});
					} else {
						var origStyles = curBlock.attr('style');
						curBlock.show().css({width:curBlock.width()});
						var tabHeight = curBlock.outerHeight(true);
						if(!origStyles) curBlock.removeAttr('style'); else curBlock.attr('style', origStyles);
						if(state === true) {
							tabHolder.css({height: tabHeight});
						} else {
							tabHolder.animate({height: tabHeight}, {duration: options.animSpeed});
						}
					}
				}
			}
			if(options.autoHeight) {
				$(window).bind('resize orientationchange', function(){
					tabs.not(currentTab).removeClass(tabHiddenClass).show().each(function(){
						var tab = jQuery(this), tabWidth = tab.css({width:''}).width();
						if(tabWidth) {
							tab.width(tabWidth);
						}
					}).hide().addClass(tabHiddenClass);

					resizeHolder(currentTab, false);
				});
			}

			// autorotation handling
			var rotationTimer;
			function nextTab() {
				var activeItem = (options.addToParent ? tabLinksParents : tabLinks).filter('.' + options.activeClass);
				var activeIndex = (options.addToParent ? tabLinksParents : tabLinks).index(activeItem);
				var newLink = tabLinks.eq(activeIndex < tabLinks.length - 1 ? activeIndex + 1 : 0);
				prevActiveLink = tabLinks.eq(activeIndex);
				switchTab(prevActiveLink, newLink);
			}
			function autoRotate() {
				if(options.autoRotate && tabLinks.length > 1) {
					clearTimeout(rotationTimer);
					rotationTimer = setTimeout(function() {
						if(!animating) {
							nextTab();
						} else {
							autoRotate();
						}
					}, options.switchTime);
				}
			}
			autoRotate();
		});
	};

	// add stylesheet for tabs on DOMReady
	var tabHiddenClass = 'js-tab-hidden';
	$(function() {
		var tabStyleSheet = $('<style type="text/css">')[0];
		var tabStyleRule = '.'+tabHiddenClass;
		tabStyleRule += '{position:absolute !important;left:-9999px !important;top:-9999px !important;display:block !important}';
		if (tabStyleSheet.styleSheet) {
			tabStyleSheet.styleSheet.cssText = tabStyleRule;
		} else {
			tabStyleSheet.appendChild(document.createTextNode(tabStyleRule));
		}
		$('head').append(tabStyleSheet);
	});

	// tab switch effects
	var contentTabsEffect = {
		none: {
			show: function(o) {
				o.tab.css({display:'block'});
				if(o.complete) o.complete();
			},
			hide: function(o) {
				o.tab.css({display:'none'});
				if(o.complete) o.complete();
			}
		},
		fade: {
			show: function(o) {
				if(o.fast) o.speed = 1;
				o.tab.fadeIn(o.speed);
				if(o.complete) setTimeout(o.complete, o.speed);
			},
			hide: function(o) {
				if(o.fast) o.speed = 1;
				o.tab.fadeOut(o.speed);
				if(o.complete) setTimeout(o.complete, o.speed);
			}
		},
		slide: {
			show: function(o) {
				var tabHeight = o.tab.show().css({width:o.tab.width()}).outerHeight(true);
				var tmpWrap = $('<div class="effect-div">').insertBefore(o.tab).append(o.tab);
				tmpWrap.css({width:'100%', overflow:'hidden', position:'relative'}); o.tab.css({marginTop:-tabHeight,display:'block'});
				if(o.fast) o.speed = 1;
				o.tab.animate({marginTop: 0}, {duration: o.speed, complete: function(){
					o.tab.css({marginTop: '', width: ''}).insertBefore(tmpWrap);
					tmpWrap.remove();
					if(o.complete) o.complete();
				}});
			},
			hide: function(o) {
				var tabHeight = o.tab.show().css({width:o.tab.width()}).outerHeight(true);
				var tmpWrap = $('<div class="effect-div">').insertBefore(o.tab).append(o.tab);
				tmpWrap.css({width:'100%', overflow:'hidden', position:'relative'});

				if(o.fast) o.speed = 1;
				o.tab.animate({marginTop: -tabHeight}, {duration: o.speed, complete: function(){
					o.tab.css({display:'none', marginTop:'', width:''}).insertBefore(tmpWrap);
					tmpWrap.remove();
					if(o.complete) o.complete();
				}});
			}
		}
	};
}(jQuery));
