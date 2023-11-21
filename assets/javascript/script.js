const departmentsBtn = document.querySelector(".navSearch .departments .departments-header")
const departmentList=document.querySelector(".navSearch .departments .content")


departmentsBtn.addEventListener("click",function(){
    departmentList.classList.toggle("active")
})



$(document).ready(function(){
    $('.cardSection').slick({
    //   setting-name: setting-value
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<i class="fa-solid fa-angle-left"></i>',
    nextArrow: '<i class="fa-solid fa-angle-right"></i>',
    autoplay: true,
    infinite: true,
    autoplaySpeed: 1000,
    });
  });