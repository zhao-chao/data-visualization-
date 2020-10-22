;(function () {
	// 1. 准备数据
	var data = {
		day365: { orders: '20,301,987', amount: '99834' },
		day90: { orders: '301,987', amount: '9834' },
		day30: { orders: '1,987', amount: '3834' },
		day1: { orders: '987', amount: '834' },
	}
	var index = 0
	$('.order .filter').on('click', 'a', function () {
		index = $(this).index()
		$(this).addClass('active').siblings().removeClass('active')

		var obj = $(this).attr('data-type')
		var orders = data[obj]['orders']
		var amount = data[obj]['amount']

		$('.order h4:eq(0)').html(orders)
		$('.order h4:eq(1)').html(amount)
	})

	var timer1 = setInterval(function () {
		index++
		if (index >= 4) {
			index = 0
		}
		$('.order .filter a').eq(index).click()
	}, 100)

	$('.order').hover(
		function () {
			clearInterval(timer1)
		},
		function () {
			clearInterval(timer1)
			timer1 = setInterval(function () {
				index++
				if (index >= 4) {
					index = 0
				}
				$('.order .filter a').eq(index).click()
			}, 100)
		}
	)
})()
