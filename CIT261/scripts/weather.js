jQuery(function() {
    $('#send').click(function() {
        var zip = $("#zipBox").val();
        if (zip !== '') {
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&appid=b3456f9acbfa64fc4495e6696ecdc9a5",
                dataType: "jsonp",
                success: function(wallOfText) {
                    var city = wallOfText.name;
                    $("#result").text(city);
                }
            });
        }
    });
});