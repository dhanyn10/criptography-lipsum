$("#generate-random-number").click(function(){
    var numval = $("#numbermax").val();
    var random = Math.floor((Math.random() * numval) + 1);
    $("#result").val(random); 
});