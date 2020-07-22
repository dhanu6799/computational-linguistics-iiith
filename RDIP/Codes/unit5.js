let englishSentences = ["The child liked the chocolate.",
                      "She was stopped by the bravest knight.",
                      "Mary baked a cake for his birthday",
                      "She decorated the cake carefully",
                      "Mary wore a dress with polka dots."
                     ]

let hindiSentences = ["राम ने सीता के लिए फल तोड़ा।",
                      "छोटे बच्चे पाठशाला जल्दी आयेंगे।",
                      "मेहनत का फल मीठा होता है।",
                      "वाह! वह खूबसूरत है।",
                      "पेड़ से पत्ते गिर गए।"
                     ]
var pos = require('pos');
var words = new pos.Lexer().lex('This is some sample text. This text can contain multiple sentences.'); 
var tagger = new pos.Tagger();
var taggedWords = tagger.tag(words);
for (i in taggedWords) {
    var taggedWord = taggedWords[i];
    var word = taggedWord[0];
    var tag = taggedWord[1];
    console.log(word + " /" + tag);
}



$("english").hide()
$("hindi").hide()
$("sub").hide()
document.getElementById("msg").innerHTML = ""
document.getElementById("tbl").innerHTML = " "

let selectLng = document.getElementById("choose-lang")
function selectLanguage() {
    if (selectLng.value === "eng") {
        $("hindi").hide()
        $('sub").hide()
        $("english").show()
        document.getElementById("msg").innerHTML = ""
        document.getElementById("tbl").innerHTML = " "
        document.getElementById("english").value = "default"
        document.getElementById("hindi").value = "default"
    }
    else if (selectLng.value === "hnd") {
        $("english").hide()
        $("hindi").show()
        $("sub").hide()
        document.getElementById("msg").innerHTML = ""
        document.getElementById("tbl").innerHTML = " "
        document.getElementById("english").value = "default"
        document.getElementById("hindi").value = "default"
    }
    else {
        alert("Select Language")
        $("english").hide()
        $("hindi").hide()
        $("sub").hide()
        document.getElementById("msg").innerHTML = ""
        document.getElementById("tbl").innerHTML = " "
        document.getElementById("english").value = "default"
        document.getElementById("hindi").value = "default"
    }
}
function selectSentence(){
    document.getElementById("msg").innerHTML = "Select the POS tag for corresponding words"
    $("sub").show()
    if(selectLng.value === "eng"){
        let engSent = document.getElementById("english").value
        if(engSent == "firstEng"){
            showValueInTable(englishSentences[0])
            
        }
        if(engSent == "secondEng"){
            showValueInTable(englishSentences[1])
           
        }
        if(engSent == "thirdEng"){
            showValueInTable(englishSentences[2])
            
        }
        if(engSent == "fourthEng"){
            showValueInTable(englishSentences[3])
           
        }
        if(engSent == "fifthEng"){
            showValueInTable(englishSentences[4])
           
        }
        if(engSent =="default"){
            alert("Select a sentence")
            $("sub").hide()
            document.getElementById("msg").innerHTML = ""
            document.getElementById("tbl").innerHTML = ""
        }
    }
    else if(selectLng.value === "hnd"){

        let hndSent = document.getElementById("hindi").value
        if(hndSent == "firstHnd"){
            showValueInTable(hindiSentences[0])
           
        }
        if(hndSent == "secondHnd"){
            showValueInTable(hindiSentences[1])
           
        }
        if(hndSent == "thirdHnd"){
            showValueInTable(hindiSentences[2])
            
        }
        if(hndSent == "fourthHnd"){
            showValueInTable(hindiSentences[3])
           
        }
        if(hndSent == "fifthHnd"){
            showValueInTable(hindiSentences[4])
          
        }
        if(hndSent =="default"){
            alert("Select a sentence")
            $("sub").hide()
            document.getElementById("msg").innerHTML = ""
            document.getElementById("tbl").innerHTML = " "
        }
    }

}

let createRowsInTable = ""
let splitSen = ""
function showValueInTable(sentence){
    document.getElementById("tbl").innerHTML = " "
    splitSen = sentence.split(" ")
    if(selectLng.value === "eng")
    {
	  var words = new pos.Lexer().lex(sentence); 
            var tagger = new pos.Tagger();
            var taggedWords = tagger.tag(words);
            for (i in taggedWords) {
                var taggedWord = taggedWords[i];
                var word = taggedWord[0];
                var tag = taggedWord[1];
                console.log(word + " /" + tag);
              
                createRowsInTable += "<tr><td>"+word+"</td><td><select><option value = 'Noun'>Noun</option><option value = 'Pronoun'>Pronoun</option><option value = 'Verb'>Verb</option><option value = 'Adjective'>Adjective</option><option value = 'Adverb'>Adverb</option><option value = 'Determiner'>Determiner</option><option value = 'Preposition'>Preposition</option><option value = 'Conjunction'>Conjunction</option><option value = 'Interjection'>Interjection</option></select></td><td></td><td></td></tr>";
            }}
	else if(selectLng.value === "hnd")
    {	createRowsInTable = ""

    var words = new pos.Lexer().lex(sentence); 
    var tagger = new pos.Tagger();
    var taggedWords = tagger.tag(words);
    for (i in taggedWords) {
        var taggedWord = taggedWords[i];
        var word = taggedWord[0];
        var tag = taggedWord[1];
        console.log(word + " /" + tag);
    }

		for(i = 0 ; i<splitSen.length ; i++){
            // added dropdown consiting of 8 POS tags for hindi
            createRowsInTable += "<tr><td>"+splitSen[i]+"</td><td><select><option value = 'Noun'>Noun</option><option value = 'Pronoun'>Pronoun</option><option value = 'Verb'>Verb</option><option value = 'Adjective'>Adjective</option><option value = 'Adverb'>Adverb</option><option value = 'Postposition'>Postposition</option><option value = 'Conjunction'>Conjunction</option><option value = 'Interjection'>Interjection</option></select></td><td></td><td></td></tr>";
		}
	}
    document.getElementById("tbl").innerHTML = "<tr><th>LEXICON</th><th>POS</th><th></th><th></th></tr><tr></td></tr>" + createRowsInTable 
    
}
function submitButton(sentence){
    document.getElementById("tbl").innerHTML = " "
    if(selectLng.value === "eng")
    {	createRowsInTable = ""
            var words = new pos.Lexer().lex(sentence); 
            var tagger = new pos.Tagger();
            var taggedWords = tagger.tag(words);
            for (i in taggedWords) {
                var taggedWord = taggedWords[i];
                var word = taggedWord[0];
                var tag = taggedWord[1];
                console.log(word + " /" + tag);
                if(tag=="NN" || tag=="NNP" || tag=="NNS"){
                    tag="Noun";
                }
                else if(tag=="VBN" || tag=="VBD"){
                    tag="Verb";
                }
                else if(tag=="JJ" || tag=="JJS"){
                    tag="Adjective";
                }
                else if(tag=="PRP" || tag=="PRP$"){
                    tag="Pronoun";
                }
                else if(tag=="IN"){
                    tag="Preposition";
                }
                else if(tag=="RB"){
                    tag="Adverb";
                }
                else if(tag=="DT"){
                    tag="Determiner";
                }
                createRowsInTable += "<tr><td>"+word+"</td><td><select><option value = 'Noun'>Noun</option><option value = 'Pronoun'>Pronoun</option><option value = 'Verb'>Verb</option><option value = 'Adjective'>Adjective</option><option value = 'Adverb'>Adverb</option><option value = 'Determiner'>Determiner</option><option value = 'Preposition'>Preposition</option><option value = 'Conjunction'>Conjunction</option><option value = 'Interjection'>Interjection</option></select></td><td></td><td>"+tag+"</td></tr>";
            }}
}
 document.getElementById("ans").onclick = function(){
            createRowsInTable = ""
            for (i in taggedWords) {
                var taggedWord = taggedWords[i];
                var word = taggedWord[0];
                var tag = taggedWord[1];
                console.log(word + " /" + tag);
            if(word=="राम" || word=="सीता" || word=="फल" || word=="बच्चे" || word=="पाठशाला" || word=="मेहनत" || word=="पेड़" || word=="पत्ते"){
                tag="Noun"
            }
            else if(word=="ने" || word=="के" || word=="लिए" || word=="का" || word=="से"){
                tag="Postposition"
            }
            else if(word=="तोड़ा" || word=="आयेंगे" || word=="होता" || word=="है" || word=="गिर" || word=="गए"){
                tag="Verb"
            }
            else if(word=="छोटे" || word=="मीठा" || word=="खूबसूरत"){
                tag="Adjective"
            }
            else if(word=="जल्दी"){
                tag="Adverb"
            }
            else if(word=="वाह"){
                tag="Interjection"
            }
            else if(word=="वह"){
                tag="Pronoun"
            }
            createRowsInTable += "<tr><td>"+word+"</td><td><select><option value = 'Noun'>Noun</option><option value = 'Pronoun'>Pronoun</option><option value = 'Verb'>Verb</option><option value = 'Adjective'>Adjective</option><option value = 'Adverb'>Adverb</option><option value = 'Postposition'>Postposition</option><option value = 'Conjunction'>Conjunction</option><option value = 'Interjection'>Interjection</option></select></td><td></td><td>"+tag+"</td></tr>";
        }document.getElementById("tbl").innerHTML = "<tr><th>LEXICON</th><th>POS</th><th></th><th>Answers</th></tr><tr></td></tr>" + createRowsInTable 
        }
        createRowsInTable += "<tr><td>"+word+"</td><td><select><option value = 'Noun'>Noun</option><option value = 'Pronoun'>Pronoun</option><option value = 'Verb'>Verb</option><option value = 'Adjective'>Adjective</option><option value = 'Adverb'>Adverb</option><option value = 'Postposition'>Postposition</option><option value = 'Conjunction'>Conjunction</option><option value = 'Interjection'>Interjection</option></select></td><td></td><td></td></tr>";
        }
	}
    document.getElementById("tbl").innerHTML = "<tr><th>LEXICON</th><th>POS</th><th></th><th></th></tr><tr></td></tr>" + createRowsInTable 
window.selectLanguage = selectLanguage
window.selectSentence = selectSentence
window.showValueInTable = showValueInTable


function introshow(){
	description.style.fontSize = "15px";
	subheading.innerHTML = "Introduction";
	description.innerHTML = "Part-of-speech tagging is the process of assigning a part-of-speech (lexical class marker) to each word in a corpus. The basic parts of speech are : Noun, Verb, Determiner, Adjective, Adverb, Preposition (in English), Postposition (in Hindi).<br><br>";
	document.getElementById('image1').style.display = "";
}
function theoryshow(){
	subheading.innerHTML = "Theory";
	document.getElementById('image1').style.display = "none";
	var extra = '"Parts of speech" are the basic lexical categories of the words present in a language. It is very important to understand these, in order to understand the grammar and use of the language concerned.<br><br>Eg:<ul><li>Ram(Noun) ate(Verb) an(Determiner) apple(Noun) with(Preposition) a(Article) fork(Noun).</li><li>राम(Noun) ने(Postposition) चम्मच(Noun) से(Postposition) मिठाई(Noun) खाई(Verb).</li></ul><br>Each part of speech explains how the word is used. In fact, the same word can act as different parts of speechs depending on the context.<br><br>Eg: A noun in one sentence and an adjective in the next.<ul><li>The glass was broken(Verb).</li><li>The broken(Adjective) glass pierced her flesh.</li><br><br>Part-of-speech tagging is the process of assigning a part-of-speech (lexical class marker) to each word in a corpus.<br><br>';
	description.innerHTML = extra + '<table id="table1"><tr><th>POS</th><th>FUNCTION</th><th>EXAMPLE</th></tr><tr><td>Verb</td><td>action or state</td><td>take, eat, है, सोना, गया</td></tr><tr><td>Noun</td><td>naming word; person or thing</td><td>table, John, honesty, राम, कुर्सी, हिम्मत</td></tr><tr><td>Pronoun</td><td>replaces noun</td><td>he, she, you, मैं, वह</td></tr><tr><td>Determiner</td><td>occurs before noun or noun phrase</td><td>the, many, all</td></tr><tr><td>Adjective</td><td>describes noun</td><td>green, big, छोटा, सुन्दर, काला</td></tr><tr><td>Adverb</td><td>describes verb</td><td>naturally, slowly,धीरे, जल्दी</td></tr><tr><td>Preposition</td><td>joins noun to other POS</td><td>in,of, about</td></tr><tr><td>Postposition</td><td>joins noun to other POS</td><td>में, से, के लिए</td></tr><tr><td>Conjunction</td><td>joins two words, phrases, sentences</td><td>but, so, और, या</td></tr><tr><td>Interjection</td><td>express emotion or surprise followed by exclamation marks</td><td>Hello!, Hurray!, वाह!</td></tr></table></ul>';
}
function objectiveshow(){
	description.style.fontSize = "16px";
	subheading.innerHTML = "Objective";
	document.getElementById('image1').style.display = "none";
	description.innerHTML = "<br><hr><br>The objective of this experiment is to test the knowledge of basic part of speech of words as they appear in a sentence.<br><br><hr>"
}
function experimentshow(){
	subheading.innerHTML = "Experiment";
	document.getElementById('image1').style.display = "none";
	description.innerHTML = "<center><select id='lang' onchange = 'dropdownchange()'><option value='select'>---Select Language---</option><option value='english'>English</option><option value='hindi'>Hindi</option></select></center>";
}
function quizzesshow(){
	description.style.fontSize = "16px";
	subheading.innerHTML = "Quizzes";
	document.getElementById('image1').style.display = "none";
	description.innerHTML = "<b>Assign POS tag to each word in the following sentences</b><ol><li>Heat water in a large vessel.</li><li>The dog is happy.</li><li>The happy dog.</li><li>Park the car near the park.</li><li>The dog is sitting just at the gate.</li></ol><br><ol><li>बहार जाओ</li><li>गाड़ी उद्द्यान में खड़ी करो</li><li>राम खाना खाकर सो गया</li><li>राम खाते खाते सो गया</li><li>राम ने खाते खाते खाता खुलवाया</li></ol>"
}
function procedureshow(){
	subheading.innerHTML = "Procedure";
	document.getElementById('image1').style.display = "none";
	description.innerHTML = "<b><u>STEP1 :</u></b> Select a language from the drop down menu.<br><b><u>STEP2 :</u></b> Select a sentence from the drop down menu.<br><b><u>STEP3 :</u></b> Select corresponding POS for each word in the sentence and and click the <button>Submit</button> button<br><b><u>OUTPUT1 :</u></b> The submitted answer will be checked.<br><b><u>STEP4 :</u></b> If incorrect, click on <button>Get Answer</button> button for the correct answer or repeat STEP3.<br><br><br><hr>"
}
function furtherreadingsshow(){
	description.style.fontSize = "16px";
	subheading.innerHTML = "Further Reading";
	document.getElementById('image1').style.display = "none";
	description.innerHTML = "<center><b>Hindi</b><br>-Yamuna Kachru<br><i>Chapter 6</i><br><br><b>A Student's Introduction To English Grammar</b><br>- Rodney D. Huddleston<br><i>Chapter 6</i></center>"

}
