
<script>
window.onload = function() {
 jQuery(function($) {
   $(window).scroll(function() {
     if ($(this).scrollTop() > 300) {
      $("#shopify-section-header > div:nth-child(2)").addClass("fixedheader"); 
      $(".site-header").addClass("transparentback");
      $(".site-header__mobile-nav").addClass("transparentback");
      $(".site-nav a").addClass("whitenoborder");
      $(".btn--link .icon").addClass("roseicon");
      $(".site-header__cart").addClass("roseicon");
     } 
     else {
      $("#shopify-section-header > div:nth-child(2)").removeClass("fixedheader"); 
      $(".site-header").removeClass("transparentback");
      $(".site-header__mobile-nav").removeClass("transparentback");
      $(".site-nav a").removeClass("whitenoborder");
      $(".btn--link .icon").removeClass("roseicon");
      $(".site-header__cart").removeClass("roseicon");
     
     }
   });
  
 })
}
</script>