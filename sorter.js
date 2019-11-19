function getCmp(index,ascending){
	return function(a,b){
		return ($(a).find("td:nth-child("+index+")").text()>$(b).find("td:nth-child("+index+")").text()?1:-1)*ascending;
	}
}
function tableSorter(tbody,index){
	return function(){
		$(this).siblings().removeClass("ascending descending");
		if ($(this).hasClass("ascending")){
			$(this).attr("class","descending");
			$(tbody).append($(tbody).find("tr").sort(getCmp(index+1,-1)));
		}else{
			$(this).attr("class","ascending");
			$(tbody).append($(tbody).find("tr").sort(getCmp(index+1,1)));
		}
	}
}
function createTableSorter(){
	$("table").each(function(){
		var tableBody=$(this).children("tbody");
		$(this).find("th").each(function(index){
			$(this).click(tableSorter(tableBody,index));
		});
	});
}
window.onload=function(){
	createTableSorter();
}
