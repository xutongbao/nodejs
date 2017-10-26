require.config({
    baseUrl: 'js'
});

require(['config'], function (config){
    var url = config.index.api.postMessage;
    $('#submit').click(function () {
        console.log('start');
        var data = {};

        var message = $('#message').val();
        data.message = message;
        data = JSON.stringify(data);
        $.ajax({
            url: url,
            async: true,
            crossDomain: true,
            type: "POST",
            cache: false,
            xhrFields: {withCredentials: true},
            data: data,
            dataType: 'json',
            contentType: "application/json",
            success:function(resp){
                $('#message').val('')
                console.log(resp.message);
            }
        });
    });
});