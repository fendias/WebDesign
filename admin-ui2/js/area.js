(function($){
    if(!$) return false;

    $.getJSON("/data/area.json", function(data){
        console.log(data);
        var html = template('area_temp', data);
        $('#areas').html(html);
    });  

})(window.jQuery);