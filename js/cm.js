yepnope([
  //load styles
  {load: "css/popup.css"},
  {load: "css/shCore.css"},
  {load: "css/shThemeEclipse.css"},
  //load scripts  
  {load: "js/popup.js"},
  {load: "js/shCore.js"},
  {load: "js/shBrushCss.js"},
  {load: "js/shBrushJava.js"},
  {load: "js/shBrushJScript.js"},
  {load: "js/shBrushXml.js"},
  {load: "js/codemonkey.js", callback: function() {
	SyntaxHighlighter.defaults['toolbar'] = false;
	SyntaxHighlighter.defaults['class-name'] = "code-wrapper";
	SyntaxHighlighter.all();
  }}
]);
