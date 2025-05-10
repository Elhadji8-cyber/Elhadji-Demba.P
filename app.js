$("h1.myLogo").hover(
    function() {
        $(this).css("color", "purple");
    },
    function() {
        $(this).css("color", "#e9cc29f8");
    }
);

$(".texte-abouteme").hide(400, function() {
    $(this).css("max-width", "768px");
});

          