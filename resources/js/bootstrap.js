window._ = require("lodash");
 
try {
    window.$ = window.jQuery = require("jquery");
 
    require("foundation-sites");
 
    $(function () {
        $(document).foundation();
    });
} catch (e) {}
 
window.axios = require("axios");
 
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
