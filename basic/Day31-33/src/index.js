	var regionSelect = document.querySelector('#region-select');
	var productSelect = document.querySelector('#product-select');
	var saveBtn = document.querySelector('#save-data-btn');

	//优先显示本地存储的数据，没有则根据筛选条件显示
	var data = localStorage.data;
	if(data) {
		updateTable(JSON.parse(data));
	} else {
		updateTable(filterItems());
	}

	saveBtn.onclick = function() {
		var value = getTableData();
		localStorage.data = JSON.stringify(value);
	}

	//初始化checkbox
	genCheckBox(regionSelect, [{
		value: "华东",
		text: "华东"
	},{
		value: "华南",
		text: "华南"
	},{
		value: "华北",
		text: "华北"
	}]);

	genCheckBox(productSelect, [{
		value: "手机",
		text: "手机"
	},{
		value: "笔记本",
		text: "笔记本"
	},{
		value: "智能音箱",
		text: "智能音箱"
	}]);

//	lineChart.clearLine();
//	barChart.clearLine();