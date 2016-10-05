//Trigger a search from the search bar

$("#search").click(function(e){
  console.log("Clicked.")
  e.preventDefault()
  redirectToSearch();
})



$("#searchbar").pressEnter(function(e){
  console.log("Entered.")
  e.preventDefault()
  redirectToSearch()
})

//to search on enter
$.fn.pressEnter = function(fn) {

    return this.each(function() {
        $(this).bind('enterPress', fn);
        $(this).keyup(function(e){
            if(e.keyCode == 13)
            {
              $(this).trigger("enterPress");
            }
        })
    });
 };

 function redirectToSearch(){
   console.log("Redirecting.")
   q = $("#searchbar").val();
   url = "http://localhost:8000/?q=" + encodeURIComponent(q);
   window.location.href=url;
 }
