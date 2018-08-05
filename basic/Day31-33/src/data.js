	//根据选择条件筛选数据
	function filterItems() {
		var items = [];

		//获取选择条件
		var filterRegion = document.querySelectorAll("#region-select [checkbox-type='item']:checked");
		var filterProduct = document.querySelectorAll("#product-select [checkbox-type='item']:checked");
		var regionCondition=[], productCondition=[];
		
		filterRegion.forEach(e => {regionCondition.push(e.value);});
		filterProduct.forEach(e => {productCondition.push(e.value);});

		//筛选数据
		for(var e of sourceData) {
			if(regionCondition.indexOf(e.region)>=0 && 
				productCondition.indexOf(e.product)>=0) {
				items.push(e);
			}
		}
		return items;
	}
	
	//获取数据中某一商品（地区）的数量
	function getOneTypeNum(product, items) {
		var num=0;
		for(var i=0; i<items.length; i++) {
			if(items[i].product == product) num++;
		}
		return num;
	}

	//获取数据中商品（地区）的种类数量
	function getTypeNumber(items, type) {
		var types = [];
		items.forEach((ele) => {
			if(types.indexOf(ele[type])<0) {
				types.push(ele[type]);
			}
		})
		console.log(types);
		return types.length;
	}