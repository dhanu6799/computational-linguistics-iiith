var stemmer = new Snowball('English');
// stemmer.setCurrent('abbreviations');
// stemmer.stem();
// console.log(stemmer.getCurrent())





var corp1 = ["A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. \"How shall I climb out?\" said the mouse. \"oh, how shall I climb out?\" Just then a rat came along, and he heard the mouse. \"Mouse,\" said the rat, \"if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.\""];
var corp2 = ["A wolf carried off a lamb. The lamb said, \" I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself.\" The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock."];
var corp3 = ["A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. \"Why does he not make a pet of me?\" said the donkey. \"It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master\'s knee. It is not fair.\" Then the donkey said to himself, \"If I do what the dog does, he may make a pet of me.\" So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master\'s knee. The master thought the donkey was mad, and he shouted, \"Help! Help!\" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. \"I only did what the dog does,\" said the donkey,\" and yet they make a pet of the dog, and they beat me with sticks. It is not fair."];
$("table").hide()
$("sub").hide()
$("sub1").hide()
$("cont").hide()
$("lst").hide()
document.getElementById("disAns").innerText = ""
document.getElementById("msg").innerText = ""
document.getElementById("finalMsg").innerText = ""




let selection = document.getElementById("choose-corpus")

run = function () {
    if (selection.value === 'corp1') {
        document.getElementById("msg").innerText = ""
        document.getElementById("finalMsg").innerText = ""
        document.getElementById("disAns").innerHTML = ""
        document.getElementById("token").value = ""
        document.getElementById("newtypes").value = ""
        document.getElementById("token").style.background = "white"
        document.getElementById("types").style.background = "white"
        document.getElementById("newtypes").style.background = "white"
        document.getElementById("types").value = ""
        document.getElementById("f1").innerHTML = firstCorpus
        document.getElementById("f2").innerHTML = "Enter the correct number of tokens and types from the above corpus:"
        $("table").show()
        $("sub").show()
        $("cont").hide()
        $("lst").hide()
        $("sub1").hide()

    }
    else if (selection.value === 'corp2') {
        document.getElementById("msg").innerHTML = ""
        document.getElementById("finalMsg").innerHTML = ""
        document.getElementById("disAns").innerHTML = ""
        document.getElementById("token").value = ""
        document.getElementById("newtypes").value = ""
        document.getElementById("token").style.background = "white"
        document.getElementById("types").style.background = "white"
        document.getElementById("newtypes").style.background = "white"
        document.getElementById("types").value = ""
        document.getElementById("f1").innerHTML = secondCorpus
        document.getElementById("f2").innerHTML = "Enter the correct number of tokens and types from the above corpus:"
        $("table").show()
        $("sub").show()
        $("cont").hide()
        $("lst").hide()
        $("sub1").hide()
    }
    else if (selection.value === 'corp3') {
        document.getElementById("msg").innerHTML = ""
        document.getElementById("finalMsg").innerHTML = ""
        document.getElementById("disAns").innerHTML = ""
        document.getElementById("token").value = ""
        document.getElementById("newtypes").value = ""

        document.getElementById("token").style.background = "white"
        document.getElementById("types").style.background = "white"
        document.getElementById("newtypes").style.background = "white"
        document.getElementById("types").value = ""
        document.getElementById("f1").innerHTML = thirdCorpus
        document.getElementById("f2").innerHTML = "Enter the correct number of tokens and types from the above corpus:"
        $("table").show()
        $("sub").show()
        $("cont").hide()
        $("lst").hide()
        $("sub1").hide()
    }
    else {
        alert("Select a corpus")
        document.getElementById("f1").innerHTML = ""
        document.getElementById("f2").innerHTML = ""
        document.getElementById("disAns").innerHTML = ""
        document.getElementById("msg").innerHTML = ""
        document.getElementById("finalMsg").innerHTML = ""
        $("table").hide()
        $("sub").hide()
        $("cont").hide()
        $("lst").hide()
        $("sub1").hide()
        document.getElementById("token").value = ""
        document.getElementById("types").value = ""
        document.getElementById("newtypes").value = ""
    }

}

function checkAns() {
    if (selection.value === 'corp1') {
        let token = 'A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. "How shall I climb out?" said the mouse. "oh, how shall I climb out?" Just then a rat came along, and he heard the mouse. "Mouse," said the rat, "if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in."'

        // exclude start and end white-space
        token = token.replace(/(^\s*)|(\s*$)/gi, "");

        //convert two or more spaces to one space
        token = token.replace(/[ ]{2,}/gi, " ");

        //excluding newline with a start spacing
        token = token.replace(/\n /, "\n");

        //checking no of tokens
        if (document.getElementById("token").value == token.split(' ').length) {

            document.getElementById("token").style.background = "green"

        }
        else {
            document.getElementById("token").style.background = "red"


        }

        // count unique words

        const countUniqueWords = s => new Set(s.toLowerCase().match(/\w+/g)).size
        
        // validating input field to that it takes only numeric value

        var k = /^[0-9]+$/
        if(document.getElementById("types").value=="" || document.getElementById("token").value=="" )
        {
            alert("Enter number of tokens and types")
        }
        
        else if ( (!document.getElementById("types").value.match(k) ) || (!document.getElementById("token").value.match(k) ) )
        {
            alert("please enter numeric value only.")
        }

        // alert(`A has ${countUniqueWords(a)} unique words`);
        if (document.getElementById("types").value == countUniqueWords(token)) {

            document.getElementById("types").style.background = "green"
        }
        else {
            document.getElementById("types").style.background = "red"
        }

        // cheking answer

        if ((document.getElementById("token").value == token.split(' ').length) && (document.getElementById("types").value == countUniqueWords(token))) {
            document.getElementById("disAns").innerHTML = "Right Answer"
            document.getElementById("disAns").style.color = "green"
            $("#cont").show()
        }
        else {
            document.getElementById("disAns").innerHTML = "Wrong Answer"
            document.getElementById("disAns").style.color = "red"
            $("#cont").hide()
        }

    }
    else if (selection.value === 'corp2') {

        let token = 'A wolf carried off a lamb. The lamb said, "I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself." The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.'

        // exclude start and end white-space
        token = token.replace(/(^\s*)|(\s*$)/gi, "");

        //convert two or more spaces to one space
        token = token.replace(/[ ]{2,}/gi, " ");

        //excluding newline with a start spacing
        token = token.replace(/\n /, "\n");

        // checking no of tokens
        if (document.getElementById("token").value == token.split(' ').length) {

            document.getElementById("token").style.background = "green"
        }
        else {
            document.getElementById("token").style.background = "red"


        }

        // count unique words

        const countUniqueWords = s => new Set(s.toLowerCase().match(/\w+/g)).size

         // validating input field to that it takes only numeric value
        
         var k = /^[0-9]+$/
         if(document.getElementById("types").value=="" || document.getElementById("token").value=="" )
         {
             alert("Enter number of tokens and types")
         }
         
         else if ( (!document.getElementById("types").value.match(k) ) || (!document.getElementById("token").value.match(k) ) )
         {
             alert("please enter numeric value only.")
         }

        // alert(`A has ${countUniqueWords(a)} unique words`);
        if (document.getElementById("types").value == countUniqueWords(token)) {

            document.getElementById("types").style.background = "green"

        }
        else {
            document.getElementById("types").style.background = "red"

        }

        // cheking answer

        if ((document.getElementById("token").value == token.split(' ').length) && (document.getElementById("types").value == countUniqueWords(token))) {
            document.getElementById("disAns").innerHTML = "Right Answer"
            document.getElementById("disAns").style.color = "green"
            $("#cont").show()
        }
        else {
            document.getElementById("disAns").innerHTML = "Wrong Answer"
            document.getElementById("disAns").style.color = "red"
            $("#cont").hide()
        }
    }
    else if (selection.value === 'corp3') {

        let token = 'A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. "Why does he not make a pet of me?" said the donkey. "It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master\'s knee. It is not fair." Then the donkey said to himself, "If I do what the dog does, he may make a pet of me." So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master\'s knee. The master thought the donkey was mad, and he shouted, "Help! Help!" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. "I only did what the dog does," said the donkey," and yet they make a pet of the dog, and they beat me with sticks. It is not fair.'

        // exclude start and end white-space
        token = token.replace(/(^\s*)|(\s*$)/gi, "");

        //convert two or more spaces to one space
        token = token.replace(/[ ]{2,}/gi, " ");

        //excluding newline with a start spacing
        token = token.replace(/\n /, "\n");

        // checking no of tokens

        if (document.getElementById("token").value == token.split(' ').length) {

            document.getElementById("token").style.background = "green"
        }
        else {
            document.getElementById("token").style.background = "red"
        }

        // count unique words

        const countUniqueWords = s => new Set(s.toLowerCase().match(/\w+/g)).size

         // validating input field to that it takes only numeric value
        
         var k = /^[0-9]+$/
         if(document.getElementById("types").value=="" || document.getElementById("token").value=="" )
         {
             alert("Enter number of tokens and types")
         }
         
         else if ( (!document.getElementById("types").value.match(k) ) || (!document.getElementById("token").value.match(k) ) )
         {
             alert("please enter numeric value only.")
         }

        // alert(`A has ${countUniqueWords(a)} unique words`);
        if (document.getElementById("types").value == countUniqueWords(token)) {

            document.getElementById("types").style.background = "green"

        }
        else {
            document.getElementById("types").style.background = "red"

        }

        // checking answer

        if ((document.getElementById("token").value == token.split(' ').length) && (document.getElementById("types").value == countUniqueWords(token))) {
            document.getElementById("disAns").innerHTML = "Right Answer"
            document.getElementById("disAns").style.color = "green"
            $("#cont").show()
        }
        else {
            document.getElementById("disAns").innerHTML = "Wrong Answer"
            document.getElementById("disAns").style.color = "red"
            $("#cont").hide()
        }
    }
}

function rootWord() {
    document.getElementById("disAns").innerHTML = ""
    $("sub").hide()
    $("cont").hide()
    $("lst").show()
    $("sub1").show()
    document.getElementById("msg").innerText = "Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types."
}
//checking Unique words for new corpus tokens
function uniqueWordForStemmedCorpus(word, position, self) { 
    return self.indexOf(word) === position;
}
function againCheckTypes() {
    if (selection.value === 'corp1') {
        let token = 'A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. "How shall I climb out?" said the mouse. "oh, how shall I climb out?" Just then a rat came along, and he heard the mouse. "Mouse," said the rat, "if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in."'
        token=token.replace(/[^a-zA-Z ]/g, "");
        token = token.replace(/(^\s*)|(\s*$)/gi, "");
        token = token.replace(/[ ]{2,}/gi, " ");
        token = token.replace(/\n /, "\n");
        token = token.toLowerCase();
        token = token.split(" ");
        let types = [];
        for (let i = 0; i <token.length; i++) {
            
            //fixing stemwords
            if(token[i]=='find' || token[i]=='grew' || token[i]=='found' || token[i]=='eat' || token[i]=='ate'  || token[i]=='grown'){
                continue;
            }else{
            stemmer.setCurrent(token[i]);
            stemmer.stem();
            types.push(stemmer.getCurrent());
            
            }
        }
        
        let finalTypes = types.filter(uniqueWordForStemmedCorpus);

         // validating input field to that it takes only numeric value
        
         var k = /^[0-9]+$/
         if(document.getElementById("newtypes").value=="")
         {
             alert("Enter number of new types")
         }
         
         else if ( (!document.getElementById("newtypes").value.match(k) ))
         {
             alert("please enter numeric value only.")
         }

        if(document.getElementById("newtypes").value == finalTypes.length){
            document.getElementById("newtypes").style.background = "green"
            compairFinalAns()
        }else{
            document.getElementById("newtypes").style.background = "red"
            document.getElementById("finalMsg").innerHTML = "Wrong Answer"
            document.getElementById("finalMsg").style.color = "red"
        }
        
        
    }
    else if (selection.value === 'corp2') {
        let token = 'A wolf carried off a lamb. The lamb said, "I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself." The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.'
        token=token.replace(/[^a-zA-Z ]/g, "");
        token = token.replace(/(^\s*)|(\s*$)/gi, "");
        token = token.replace(/[ ]{2,}/gi, " ");
        token = token.replace(/\n /, "\n");
        token = token.toLowerCase();
        token = token.split(" ");
        let types = [];
        for (let i = 0; i <token.length; i++) {

            // fixing stemwords
            if(token[i]=='heard' || token[i]=='took' || token[i]=='you' || token[i]=='the' || token[i]=='up' || token[i]=='can' || token[i]=='than' || token[i]=='they'){
                continue;
            }else{
            stemmer.setCurrent(token[i]);
            stemmer.stem();
            types.push(stemmer.getCurrent());
            }
        }
        
        let finalTypes = types.filter(uniqueWordForStemmedCorpus);

        // validating input field to that it takes only numeric value
        
        var k = /^[0-9]+$/
        if(document.getElementById("newtypes").value=="")
        {
            alert("Enter number of new types")
        }
        
        else if ( (!document.getElementById("newtypes").value.match(k) ))
        {
            alert("please enter numeric value only.")
        }

        if(document.getElementById("newtypes").value == finalTypes.length){
            document.getElementById("newtypes").style.background = "green"
            compairFinalAns()
        }else{
            document.getElementById("newtypes").style.background = "red"
            document.getElementById("finalMsg").innerHTML = "Wrong Answer"
            document.getElementById("finalMsg").style.color = "red"
        }
        
    }
    else if (selection.value === 'corp3') {
        var token = 'A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. "Why does he not make a pet of me?" said the donkey. "It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master\'s knee. It is not fair." Then the donkey said to himself, "If I do what the dog does, he may make a pet of me." So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master\'s knee. The master thought the donkey was mad, and he shouted, "Help! Help!" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. "I only did what the dog does," said the donkey," and yet they make a pet of the dog, and they beat me with sticks. It is not fair.'
        token=token.replace(/[^a-zA-Z ]/g, "");
        token = token.replace(/(^\s*)|(\s*$)/gi, "");
        token = token.replace(/[ ]{2,}/gi, " ");
        token = token.replace(/\n /, "\n");
        token = token.toLowerCase();
        token = token.split(" ");
        let types = [];
        for (let i = 0; i <token.length; i++) {

            //fixing stemwords
            if(token[i]=='saw' || token[i]=='ran' || token[i]=='of' || token[i]=='to' || token[i]=='came' || token[i]=='me' || token[i]=='run' || token[i]=='than' || token[i]=='they'){
                continue;
            }else{
            stemmer.setCurrent(token[i]);
            stemmer.stem();
            types.push(stemmer.getCurrent());
            }}
         let finalTypes = types.filter(uniqueWordForStemmedCorpus);

        // validating input field to that it takes only numeric value
        
        var k = /^[0-9]+$/
        if(document.getElementById("newtypes").value=="")
        {
            alert("Enter number of new types")
        }
        
        else if ( (!document.getElementById("newtypes").value.match(k) ))
        {
            alert("please enter numeric value only.")
        }

        if(document.getElementById("newtypes").value == finalTypes.length){
            document.getElementById("newtypes").style.background = "green"
            compairFinalAns()
        }else{
            document.getElementById("newtypes").style.background = "red"
            document.getElementById("finalMsg").innerHTML = "Wrong Answer"
            document.getElementById("finalMsg").style.color = "red"
        }
        
    }
