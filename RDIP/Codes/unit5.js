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
window.selectLanguage = selectLanguage
window.selectSentence = selectSentence
window.showValueInTable = showValueInTable
