$(function() {
	 $('#new-todo').hammer().on('tap', function(event) {
        	var color=["red","blue","green","orange","purple","black"];
         	var num = Math.floor((Math.random()*color.length)+1);
         	var col = color[num];
        	document.getElementById('new-todo').style.color=col;
		document.getElementsByTagName("label")[0].style.color="red";
        });
});
