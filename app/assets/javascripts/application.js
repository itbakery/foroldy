// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require ckeditor/init
//= require jquery_ujs
//= require jquery-ui
//= require dataTables/jquery.dataTables
//= require dataTables/jquery.dataTables.bootstrap
//= require twitter/bootstrap
//= require flexslider
//= require_tree .
jQuery(function(){
    $('#pages').dataTable({
     "sDom": '<"H"Cfr>t<"F"ip>',
     "bJQueryUI": true
    });

    if ($('textarea').length > 0) {
     var data = $('textarea');
     $.each(data, function(i) {
       CKEDITOR.replace(data[i].id);
     });
   }

    $('.flexslider').flexslider();

    $('.flexslider2').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 210,
        itemMargin: 5,
        minItems: 2,
        maxItems: 4
      });

    $("#totop").click(function () {
      $("html, body").animate({
            scrollTop: 0
       }, 300);
       return false;
    });

});

