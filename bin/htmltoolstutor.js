(function(Main, undefined)
{
	console.log('this is my main js file');

}(window.Main == window.Main || {}));

(function (Contoller, undefined)
{
	console.log('this is a Contoller');
	var a = "Contoller name";
}(Main.Contoller == Main.Contoller ||{}));