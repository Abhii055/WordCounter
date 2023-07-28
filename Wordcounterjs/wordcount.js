let counter = document.querySelector(' .statusCounter');
let totalText = document.getElementById('text');
let totalChar = document.getElementById('character');
let totalSymbols = document.getElementById('symbols');
let totalWords = document.getElementById('words');
let totalLines = document.getElementById('lines');


function Count(){
    if(totalText.value.length  === 0){
        counter.style.display ='none';
    }
    else{
        counter.style.display=' block';
        totalChar.innerHTML=text.value.length+' Characters';
        totalWords.innerHTML= text.value.trim().split(/\s+/).length+' Words';
        totalLines.innerHTML= text.value.split('\n').length+' Lines';
        totalSymbols.innerHTML =  text.value.split(/[!@#$%^&*()_+;:'"<>.,?-{}/\|]/).length+' Symbols'
    }
}

totalText.addEventListener("input", Count);