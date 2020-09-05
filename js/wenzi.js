/* é¼ æ ‡ç‚¹å‡»æ–‡å­—ç‰¹æ•ˆ */
var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        // var a = new Array("â¤å¯Œå¼ºâ¤","â¤æ°‘ä¸»â¤","â¤æ–‡æ˜Žâ¤","â¤å’Œè°â¤","â¤è‡ªç”±â¤","â¤å¹³ç­‰â¤","â¤å…¬æ­£â¤","â¤æ³•æ²»â¤","â¤çˆ±å›½â¤","â¤æ•¬ä¸šâ¤","â¤è¯šä¿¡â¤","â¤å‹å–„â¤");
        var a = new Array("å¯Œå¼º","æ°‘ä¸»","æ–‡æ˜Ž","å’Œè°","è‡ªç”±","å¹³ç­‰","å…¬æ­£","æ³•æ²»","çˆ±å›½","æ•¬ä¸š","è¯šä¿¡","å‹å–„");
        var $i = $("<span></span>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
        1500,
        function() {
            $i.remove();
        });
    });
});