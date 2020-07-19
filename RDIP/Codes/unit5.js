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
