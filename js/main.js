$(".nav-side a").click(function (e) {
  let searchValue = e.target.getAttribute("href");

  $("html,body").animate({ scrollTop: $(searchValue).offset().top }, 2000);
});
// ________________________________________________________
$(".container h4").on("click", function () {
  $(this).next(".container p").slideToggle();
});

//___________________(OPEN & CLOSE)______________________
let divWidth = $(".nav-side").width();

$(".open").click(function () {
  if ($(".nav-side").css("left") == "0px") {
    $(".nav-side").animate({ left: -divWidth });
    $(`.open`).animate({ marginLeft: "0px" });
  } else {
    $(".nav-side").animate({ left: "0px" });
    $(`.open`).animate({ marginLeft: "250px" });
  }
});

$(".close").click(function () {
  $(".nav-side").animate({ width: 0 });
  $(`.open`).animate({ marginLeft: 0 });
});
// __________________________________________________________
(function () {
  let countDownDate = new Date("Dec, 2022 13:37:25").getTime();
  let x = setInterval(function() {
      let now = new Date().getTime();
      let distance = countDownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);


      cartona = `
      <div class="col-md-3 s3">
                      <div class="p-5 text-center border border-2 border-white text-white">
                          <p class="fontchange">${days} D</p>
                      </div>
                  </div>
                  <div class="col-md-3 s3">
                      <div class="p-5 border text-center border-2 border-white text-white">
                          <p class="fontchange">${hours} H</p>
                      </div>
                  </div>
                  <div class="col-md-3 s3">
                      <div class="p-5 border text-center border-2 border-white text-white">
                          <p class="fontchange">${minutes} m</p>
                      </div>
                  </div>
                  <div class="col-md-3 s3">
                      <div class="p-5 border text-center border-2 border-white text-white">
                          <p class="fontchange">${seconds} s</p>
                      </div>
                  </div>
                  </div>
      `
      document.getElementById("due").innerHTML = cartona;
      if (distance < 0) {
          clearInterval(x);
          document.getElementById("due").innerHTML = "EXPIRED";
        }
      }, 1000);
    
})();
// _______________________________________________________________

let mesLength = document.getElementById('userMessage');
function getMessageLength() {
    mesLength.maxLength = '100';
    let avaliableCharacter = mesLength.maxLength - mesLength.value.length;
    document.getElementById('char').innerHTML = avaliableCharacter;
    if (avaliableCharacter == 0) {
        document.getElementById('char').innerHTML = 'your available character finished';
    }
  };
  mesLength.addEventListener('keyup', function (e) {  
    getMessageLength();
  });