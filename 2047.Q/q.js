/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let sen=[]
    let large=0
    let count=0
    for(let i=0;i<sentences.length;i++){

    sen=sentences[i].split(" ")
    for(j=0;j<sen.length;j++){
    count++

    }
    if(count>large){
        large=count
    }
    count=0
    }
    return large
};