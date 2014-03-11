findNodes(document.body);
function findNodes(n) {
	var a,b;
	if (n.nodeType==11 || n.nodeType==1 || n.nodeType==9) {
		a = n.firstChild;
		while (a) {
			b = a.nextSibling;
			findNodes(a);
			a = b;
		}
	} else if (n.nodeType==3) {
		replaceWithButt(n);
	}
}
function replaceWithButt(text)  {
	var a = text.nodeValue;
	a = a.replace(/\bCloud Computing\b/g, "My Butt");
	a = a.replace(/\bcloud computing\b/g, "my butt");
	a = a.replace(/\bCloud computing\b/g, "My butt");
    a = a.replace(/\bCloud\b/g, "Butt");
	a = a.replace(/\bcloud\b/g, "butt");
    a = a.replace(/\bCLOUD\b/g, "BUTT");
    a = a.replace(/\biCloud\b/g, "iButt");
    a = a.replace(/\bSteve Jobs\b/g, "Henry Pitcairn");
	text.nodeValue = a;
}
