$("#generate-random-number").click(function(){
    var numval = $("#numbermax").val();
    
    var randomnumber = [];
    
    for(var a = 0; a < numval; a++)
    {
        //var regenerate = true;
        random = Math.floor((Math.random() * numval) + 1);
        for(var b = 0; b < numval; b++)
        {
            //check if any index of array has same value with random number
            while(randomnumber[b] == random)
                random = Math.floor((Math.random() * numval) + 1);
        }
        randomnumber.push(random);
    }
    $("#result").val(randomnumber);
});