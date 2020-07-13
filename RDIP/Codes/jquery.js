var english = '{ "con1":[' +'{"a":"John ate an apple before afternoon", "b":"before afternoon John ate an apple", "c":"John before afternoon ate an apple"},' +
       '{"a":"some students like to study in the night", "b":"at night some students like to study" },' +
        '{"a":"John and Mary went to church", "b":"Mary and John went to church" },' +
         '{"a":"John went to church after eating", "b":"after eating John went to church", "c":"John after eating went to church" },' +
        '{"a":"did he go to market", "b":"he did go to market" },' +
      '{"a":"the woman who called my sister sells cosmetics", "b":"the woman who sells cosmetics called my sister", "c":"my sister who sells cosmetics called the woman", "d":"my sister who called the woman sells cosmetics" },' +
      '{"a":"John goes to the library and studies", "b":"John studies and goes to the library" },' +
    '{"a":"John ate an apple so did she", "b":"she ate an apple so did John" },' +
   '{"a":"the teacher returned the book after she noticed the error", "b":"the teacher noticed the error after she returned the book<br>", "c":"after the teacher returned the book she noticed the error", "d":"after the teacher noticed the error she returned the book", "e":"she returned the book after the teacher noticed the error", "f":"she noticed the error after the teacher returned the book", "g":"after she returned the book the teacher noticed the error", "h":"after she noticed the error the teacher returned the book" },' +
     '{"a":"I told her that I bought a book yesterday", "b":"I told her yesterday that I bought a book", "c":"yesterday I told her that I bought a book", "d":"I bought a book that I told her yesterday", "e" :"I bought a book yesterday that I told her", "f" :"yesterday I bought a book that I told her" }]}';
   
      var a=Math.floor(Math.random() * 9);
obj=JSON.parse(english);
var b=obj.con1[a].a;
var c=b.split(" ");
var d=c.length
var g=[];
  var m = 0;
  do {
      var a= Math.floor(Math.random() * d);
      if(g.includes(a)==false){
      g.push(a)
}
m++;
}
while (d!=g.length);
for(var i=0;i<d;i++){
	document.getElementById(i).value=c[g[i]];
    document.getElementById(i).innerHTML="<button>"+c[g[i]]+"</button>"
}
for(var j=d;j<10;j++){
    document.getElementById(j).innerHTML=" "
}

}
else{
 document.getElementById("dis_sen").innerHTML = "Form a sentence(Declarative or Interrogative or any other type)form the given words";
 document.getElementById("dis_sub").innerHTML = "(Select the buttons in proper order)";

var hindi= '{"con2":[' +
         '{"a":"राम और श्याम बाजार गयें", "b":"राम और श्याम गयें बाजार", "c":"बाजार गयें राम और श्याम", "d":"गयें बाजार राम और श्याम "},' +
      
        '{"a":"राम सोया और श्याम भी", "b":"श्याम सोया और राम भी", "c":"सोया श्याम और राम भी", "d":"सोया राम और श्याम भी " },' +

          '{"a":"मैंने उसे बताया कि राम सो रहा है", "b":"मैंने उसे बताया कि सो रहा है राम", "c":"उसे मैंने बताया कि राम सो रहा है", "d":"उसे मैंने बताया कि सो रहा है राम", "e":"मैंने बताया उसे कि राम सो रहा है", "f":"मैंने बताया उसे कि सो रहा है राम", "g":"उसे बताया मैंने कि राम सो रहा है", "h":"उसे बताया मैंने कि सो रहा है राम", "i":"बताया मैंने उसे कि राम सो रहा है", "j":"बताया मैंने उसे कि सो रहा है राम<br>", "k":"बताया उसे मैंने कि राम सो रहा है", "l":"बताया उसे मैंने कि सो रहा है राम " },' +
      
 '{"a":"राम खाकर सोया", "b":"खाकर राम सोया", "c":"राम सोया खाकर", "d":"खाकर सोया राम", "e":"सोया राम खाकर", "f":"सोया खाकर राम " },' +

    '{"a":"बिल्लियों को मारकर कुत्ता सो गया", "b":"मारकर बिल्लियों को कुत्ता सो गया", "c":"बिल्लियों को मारकर सो गया कुत्ता", "d":"मारकर बिल्लियों को सो गया कुत्ता", "e":"कुत्ता सो गया बिल्लियों को मारकर", "f":"कुत्ता सो गया मारकर बिल्लियों को", "g":"सो गया कुत्ता बिल्लियों को मारकर", "h":"सो गया कुत्ता मारकर बिल्लियों को " },' +
      
'{"a":"एक लाल किताब वहाँ है", "b":"एक लाल किताब है वहाँ", "c":"वहाँ है एक लाल किताब", "d":"है वहाँ एक लाल किताब " },' +

            '{"a":"एक बड़ी सी किताब वहाँ है", "b":"एक बड़ी सी किताब है वहाँ", "c":"बड़ी सी एक किताब वहाँ है", "d":" बड़ी सी एक किताब है वहाँ", "e":"वहाँ है एक बड़ी सी किताब", "f":"वहाँ है बड़ी सी एक किताब", "g":" है वहाँ एक बड़ी सी किताब", "h":"है वहाँ बड़ी सी एक किताब " }]}';
var a=Math.floor(Math.random() * 6);
obj=JSON.parse(hindi)
var b=obj.con2[a].a;
var c=b.split(" ");
var d=c.length
var g=[];
  var m = 0;
  do {
      var a= Math.floor(Math.random() * d);
      if(g.includes(a)==false){
      g.push(a)
}
m++;
}
while (d!=g.length);
for(var i=0;i<d;i++){
	document.getElementById(i).value=c[g[i]];
    document.getElementById(i).innerHTML="<button>"+c[g[i]]+"</button>"
}
for(var j=d;j<10;j++){
    document.getElementById(j).innerHTML=" "
}

}
}
function select() {
	clr();
	lang = document.getElementById("dropdown").value;
	if (lang === "english" || lang === "hindi") {
		document.getElementById("display").innerHTML = "<b>Form a sentence(Declarative or Interrogative or any other type) from the given words</b>" + "<br>" + "<i>(select the buttons in proper order)</i>";
		select_sentence(lang);
	} else {
		alert("Select language");
		return false;
	}
}

function select_sentence(lang) {
	document.getElementById("icons").innerHTML = "";
	if (lang === "english") {
		random = Math.floor(Math.random() * 10);
		var eng = english[random][0];
		jumble(eng);
	} else if (lang === "hindi") {
		random = Math.floor(Math.random() * 7);
		var hin = hindi[random][0];
		jumble(hin);
	}
}
function buttons(text) {
	for (var j = 0; j < length; j++) {
		var button = document.createElement("Button");
		button.setAttribute("id", j.toString());
		button.setAttribute("class", "words");
		button.setAttribute("value", text[j]);
		button.innerHTML = text[j];
		document.getElementById("icons").append(button);
		count = 0;
	}
}

function display2(id) {
	if (id === "icons") {
		return;
	}
	document.getElementById("display2").innerHTML = "<b>Formed Sentence </b>" + "<i>(after selecting words):</i>";
}

function press(id) {
	if (id === "icons") {
		return;
	}
	if (count === 0) {
		document.getElementById("formed").innerHTML = String(document.getElementById(id).value);
		document.getElementById("reform_button").style.display = "initial";
	} else {
		document.getElementById("formed").innerHTML = String(document.getElementById("formed").innerHTML) + " " + String(document.getElementById(id).value);
	}
	formed_sentence = document.getElementById("formed").innerHTML;
	document.getElementById(id).style.display = "none";
	count += 1;
	if (count == length) {
		document.getElementById("check").style.display = "initial";
	}
}
function display()
{
 document.getElementById("p4").innerHTML=" "
 var y=document.getElementById("lan").value;
 if(y=="English"){
 document.getElementById("dis_sen").innerHTML = "Form a sentence(Declarative or Interrogative or any other type)form the given words";
 document.getElementById("dis_sub").innerHTML = "(Select the buttons in proper order)"
 }
}

var words_sentence = "";
var formed_sentence = "";
var count = 0;
var random = 0;
var length = 0;
var text = "";
var jumbled_sentence = "";
var lang = "";
var a;
var n;
var newline;

function jumble(line) {
	text = line.split(" "), length = text.length;
	var temp, i, index = length - 1;
	do {
		i = Math.floor(Math.random() * length);
		temp = text[i];
		text[i] = text[index];
		text[index] = temp;
		index--;
	} while (index !== 0);
	jumbled_sentence = text;
	buttons(text);
}

function reform() {
	clr();
	document.getElementById("icons").innerHTML = "";
	buttons(jumbled_sentence);
}
function correct() {
	document.getElementById("word_sentence").style.display = "initial";
	var correct = document.getElementById("correct").innerHTML;
	if (correct === "Get Correct Sentence" || correct === "Get Answers") {
		document.getElementById("correct").innerHTML = "Hide the correct Sentence";
		if (lang === "english") {
			for (a in english[random]) {
				n = document.createTextNode(english[random][a]);
				document.getElementById("words_sentence").appendChild(n);
				newline = document.createElement("br");
				document.getElementById("words_sentence").appendChild(newline);
			}
			return;
		} else {
			for (a in hindi[random]) {
				n = document.createTextNode(hindi[random][a]);
				document.getElementById("words_sentence").appendChild(n);
				newline = document.createElement("br");
				document.getElementById("words_sentence").appendChild(newline);
			}
			return;
		}
	} else {
		document.getElementById("correct").innerHTML = "Get Answers";
		document.getElementById("words_sentence").innerHTML = "";
	}
}
function check() {
	var check = false;
	document.getElementById("correct").style.display = "initial";
	if (lang === "english") {
		for (a in english[random]) {
			if (english[random][a] === formed_sentence) {
				check = true;
				break;
			}
		}
	} else if (lang === "hindi") {
		for (a in hindi[random]) {
			if (hindi[random][a] === formed_sentence) {
				check = true;
				break;
			}
		}
	}
	if (check === true) {
		document.getElementById("right").style.display = "initial";
	} else {
		document.getElementById("wrong").style.display = "initial";
	}
}
function display(style) {
	document.getElementById("display").style.display = style;
	document.getElementById("icons").style.display = style;
	document.getElementById("display2").style.display = style;
	document.getElementById("formed_sentence").style.display = style;
	document.getElementById("reform_button").style.display = style;
	document.getElementById("check").style.display = style;
	document.getElementById("correct").style.display = style;
	document.getElementById("right").style.display = style;
	document.getElementById("wrong").style.display = style;
	document.getElementById("words_sentence").style.display = style;
}

function clr() {
	document.getElementById("formed").innerHTML = "";
	document.getElementById("display2").innerHTML = "";
	document.getElementById("reform_button").style.display = "none";
	document.getElementById("check").style.display = "none";
	document.getElementById("correct").style.display = "none";
	document.getElementById("right").style.display = "none";
	document.getElementById("wrong").style.display = "none";
	document.getElementById("words_sentence").style.display = "none";
}
