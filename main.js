const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})
$(document).ready(() => {
    $('.slideshow').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
        autoplay: true, // ตั้งค่าให้เป็น Auto slider
        autoplaySpeed: 2500, // ตั้งค่าความเร็วในการสไลด์ (หน่วยเป็นมิลลิวินาที)
        pauseOnHover: true // ตั้งค่าให้หยุดสไลด์เมื่อเมาส์ชี้ที่สไลด์ (hover)
    });
    
    $(".slideshow .slick-prev").html('<i class="fas fa-arrow-left"></i>');
    $(".slideshow .slick-next").html('<i class="fas fa-arrow-right"></i>');
    $(".slideshow .slick-dots li").html('');
});
