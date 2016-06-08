'use strict';
$(function() {
/*	function moveAt(e,obj) {
	    obj.style.left = e.pageX - obj.offsetWidth / 2 + 'px';
	    obj.style.top = e.pageY - obj.offsetHeight / 2 + 'px';
	}*/
	// $('.br-white-row').disableSelection();
	$('.br-white-row[data-interaction="order-draggable"]').draggable({
		// helper:"clone",
		cursorAt:{
		    top: 5,
		    left: 5
		},
		helper: (e) => {
			var dragDiv;
			if ($(e.target).hasClass('br-white-row')) dragDiv = $(e.target);
			else var dragDiv = $(e.target).parents(".br-white-row");

			return $('<div></div>').addClass('drag-helper')
				.height(dragDiv.height())
				.text(dragDiv.find('.tr-fon:first').text().trim().slice(1))
				.appendTo($('body')).css({
					left: e.pageX,
					top: e.pageY
				});
		},
	});

	var ordersStorage = {};
	$('.test-div').droppable({
		hoverClass: "ui-state-hover",
		accept: ".br-white-row",
		drop: (e,ui) => {
			var orderNum = drawSmallOrders(e,ui);
			if(ui.draggable.data('interaction') == 'order-draggable') {
				ordersStorage[orderNum] = ui.draggable;
				ui.draggable.detach();
			} 
		}
	});
	$('.test-div').sortable({
		connectWith:$('.test-div')
	});
	$('.test-div').on('click',".closeBtn",(e) => {
		restoreFullOrder(e);
	});

	function restoreFullOrder(e){
		let orderNum = $(e.target).data('order-num');
		$(e.target).parent().detach();
		$('#orders-list').append(ordersStorage[orderNum]);
	}
});

function drawSmallOrders(e,ui) {
	let orderNum = +ui.draggable.find('.tr-fon:first').text().trim().slice(1);
	let order = $('<div>'+orderNum+'</div>').addClass('courier-order-sm').appendTo($(e.target));
	let closeBtn = $('<span data-order-num='+orderNum+'>x</span>').addClass('closeBtn').appendTo(order);
	return orderNum;
}



