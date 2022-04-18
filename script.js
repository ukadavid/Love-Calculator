function loveCalc(){
    let name1 = document.getElementById("male").value
    let name2 = document.getElementById("female").value
    if (name1.length <= 2){
        alert("Enter at least 3 character name.\n Thank you...")
    }
    if (name2.length <= 2){
        alert("Enter at least 3 character name.\n Thank you...")
    } else{
        var loveSol = Math.floor(Math.random()*100);
        document.getElementById("result").innerHTML = name1 + " and " + name2 + "= " + loveSol + "% love compactibility";
    }
    if(loveSol <=10 || loveSol <= 50){
        document.getElementById("statement").innerHTML = "Good Relationship, but can be perfect"
    } else if(loveSol <= 51 || loveSol <= 100){
        document.getElementById("statement").innerHTML = "Perfect Relationship, but there is room for improvement, right."
    }
}