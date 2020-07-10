var jason = {
    "line_1" : ["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"],
    "line_2"  : ["some students like to study in the night","at night some students like to study"],
    "line_3" : ["John and Mary went to church","Mary and John went to church"],
    "line_4" : ["John went to church after eating","after eating John went to church","John after eating went to church"],
    "line_5" : ["did he go to market","he did go to market"],
    "line_6" : ["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"],
    "line_7" : ["John goes to the library and studies","John studies and goes to the library"],
    "line_8" : ["John ate an apple so did she","she ate an apple so did John"],
    "line_9" : ["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"],
 "line_10" : ["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her","yesterday I bought a book that I told her"],
};
var jason_1 ={
"line_11" : ["राम और श्याम बाजार गयेंराम और श्याम बाजार गयें","राम और श्याम गयें बाजाम और श्याम","गयें बाजार राम और श्याम"],
    "line_12" : ["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भम भी"],ा राम और श्या
    "line_13" : ["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया,"उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"    "line_14" : ["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम" खाकर राम"],ाकर","सोया
    "line_15" : ["बिल्लियों को मारकर कुत्ता सो गया","मारकर बिल्लियों को कुत्ता सो गया"," कुत्ता","मारकर बिल्लियों को सो गया कुत्ता","कुत्ता सो गया बिल्लियों को मारकर","कुत्ता सो गय कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"],
    "line_16" : ["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब",किताब"],क लाल
    "line_17" : ["एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किता एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब"," है वहाँ एक बड़ी  सी एक किताब"]हाँ बड़ी
};
};
function select() {
	let lang = document.getElementById("dropdown").value;
	if (lang === "hindi") {
		document.getElementById("display").innerHTML = "<b>Form a sentence(Declarative or Interrogative or any other type) from the given words</b>" + "<br>" + "<i>(select the buttons in proper order)</i>";
	} else if (lang === "english") {
		document.getElementById("display").innerHTML = "<b>Form a sentence(Declarative or Interrogative or any other type) from the given words</b>" + "<br>" + "<i>(select the buttons in proper order)</i>";
	} else {
		alert("Select language");
	}
} 
