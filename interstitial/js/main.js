//starting the main script
$(document).ready(
    function () {
        var logoMain = $('.logo-main'),
            windowObject = $(window)
            logoHeight = logoMain.height(),
            windowHeight = windowObject.height(),
            logoMarginOffset = 0;
            
        logoMarginOffset = parseInt(((windowHeight/2) - (logoHeight/2))*0.7);
        
        logoMain.css('margin-top', logoMarginOffset);
    }
);

//Google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-39732360-1', 'player.pt');
ga('send', 'pageview'); 