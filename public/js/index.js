require.config({
    baseUrl: 'js'
});

require(['config'], function (config){
    var postMessage = config.index.api.postMessage;
    var postBrowserInfo = config.index.api.postBrowserInfo;
    $('#submit').click(function () {
        console.log('start');
        var data = {};

        var message = $('#message').val();
        data.message = message;
        data = JSON.stringify(data);
        $.ajax({
            url: postMessage,
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

    $.ajax({
        url: postBrowserInfo,
        async: true,
        crossDomain: true,
        type: "POST",
        cache: false,
        xhrFields: {withCredentials: true},
        data: {},
        dataType: 'json',
        contentType: "application/json",
        success:function(resp){
        }
    });
});