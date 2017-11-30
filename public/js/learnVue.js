var app = new Vue({
    el: '#app',
    data: {
        name:'xu',
        result:'',
        apiUrl: 'http://127.0.0.1:8889/POST/submitInfo'
    },
    methods: {
        submitInfo: function () {
            var vm = this;
            var data = {};
            var name = vm.name;
            data.name = name;
            data = JSON.stringify(data);
            vm.$http.post(vm.apiUrl, data)
                .then((response) => {
                    vm.result = response.body;
                });
        }
    }
})