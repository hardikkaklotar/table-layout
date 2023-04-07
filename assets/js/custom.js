// $(document).ready(function(){

//     /* NAVBAR CLOCK */
//     $("body").on("click",".hamburgar",function(){
//         $("nav").addClass("active")
//     });
    
//     /* CLOSE CLICK */
//     $("body").on("click",".close",function(){
//         $("nav").removeClass("active")
//     });

//     /* SLICK SLIDER */ 
//     $('.thareslider').slick({
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         arrows: false,
//         responsive: [
//             {
//               breakpoint: 1024,
//               settings: {
//                 slidesToShow: 2,
//               }
//             },
//             {
//               breakpoint:767,
//               settings: {
//                 slidesToShow: 2,
//               }
//             },
//             {
//               breakpoint: 575,
//               settings: {
//                 slidesToShow: 1,
//               }
//             }
//         ]
//     });
//     $('.forlupslider').slick({
//       infinite: true,
//       slidesToShow: 4,
//       slidesToScroll: 1,
//       arrows: false,
//       responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//             }
//           },
//           {
//             breakpoint:767,
//             settings: {
//               slidesToShow: 2,
//             }
//           },
//           {
//             breakpoint: 575,
//             settings: {
//               slidesToShow: 1,
//             }
//           }
//       ]
//   });

//   /* FOOTER NAVBAR */ 
//   $("body").on("click",".click",function(){
//     if (parseInt($(window).width()) < 767) {
//       $(this).parents("nav").find("a").slideToggle()
//     }
//   });
//   $(window).on('resize', function(){
//     var win = $(this); //this = window
//     if (win.width() >= 767) { 
//       $(".navitem").find("a").show()
//     }else{
//       $(".navitem").find("a").hide()
//     }
//   });
// });