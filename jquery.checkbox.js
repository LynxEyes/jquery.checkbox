(function($){

  //---------------------------------------------------------------------------
  // This "should" be on a separate file... this is the "checkbox plugin"
  $.fn.checked = function(yes){
    if (yes !== undefined) return $(this).data("checked", yes);

    if ($(this).data("checked") == undefined)
      $(this).data("checked", false);
    return $(this).data("checked");
  };
  //------------------------------------------------------------------------------
  // This "should" be on a separate file... this is the "checkbox plugin"
  $(document).on("check-change", ".btn.checkbox", function(e, check){
    if ($(this).enabled()){
      if (check != undefined){
        $(this).toggleClass("checked", check);
        $(this).checked(check);
        $(this).trigger("change", [check]);
      }else{
        $(this).toggleClass("checked");
        $(this).checked(!$(this).checked());
        $(this).trigger("change", [$(this).checked()]);
      }
    }
  });
  //------------------------------------------------------------------------------
  $(document).on("click", ".btn.checkbox", function(){
    $(this).trigger("check-change");
  });
  //------------------------------------------------------------------------------
  
})(jQuery);
