var editboxHTML = 
'<html class="expand close">' +
'<head>' +
'<style type="text/css">' +
'.expand { width: 100%; height: 100%; }' +
'.close { border: none; margin: 0px; padding: 0px; }' +
'html,body { overflow: hidden; }' +
'<\/style>' +
'<\/head>' +
'<body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();">' +
'<form class="expand close" name="f">' +
'<textarea class="expand close" style="background: #def;" name="ta" wrap="hard" spellcheck="false">' +
'<\/textarea>' +
'<\/form>' +
'<\/body>' +
'<\/html>';

var defaultStuff = '<h3>Welcome to the real-time HTML editor!<\/h3>\n' +
'<p>Type HTML in the textarea above, and it will magically appear in the frame below.<\/p>';

var extraStuff = '<div style="position:absolute; margin:.3em; bottom:0em; right:0em;"><small>\n  Created by <a href="http://www.bhandaribimal.com.np/" target="_top">Bimal Bhandari<\/a> <\/small><\/div>';

