var app = $.spapp({
    defaultView: "#page4",
    templateDir: "./HTML/"
});

function loadCSS(url) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    document.head.appendChild(link);
}


function loadJS(url, callback) {
    const script = document.createElement('script');
    script.src = url;
    script.onload = callback;
    document.body.appendChild(script);
}
function loadcss(url) {
    const script = document.getElementById('link');
    script.innerHTML= "<link rel='stylesheet' href="+ url + ">";

    
}


app.route({
    view: "page1",
    onReady: function() {
        console.log("About page created!");
        loadcss('./assets3/CSS/style.css');
        loadJS('./assets3/JS/main.js', function() {
            console.log('test1');
        });
    
        console.log("About page ready!");
    }
});
app.route({
    view: "page2",
    onReady: function() {
        console.log("test312");
        loadcss('./assets3/CSS/products.css');
        loadJS('./assets3/JS/product.js', function() {
            console.log('test1231');
        });
    
        console.log("About page ready!");
    }
});

app.route({
    view: "page3",
    onReady: function() {
        console.log("About page created!");
        loadcss('./assets3/CSS/about.css');
        loadJS('./assets3/JS/about.js');
   
        console.log("About page ready!");
    }
});
app.route({
    view: "page4",
    onReady: function() {
        console.log("About page created!");
        loadcss('./assets3/CSS/contact.js');
        loadJS('./assets3/JS/contact.js', function() {
            console.log('About JS loaded');
        });
        
        console.log("About page ready!");
    }
});
app.run();
