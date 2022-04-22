var btn = document.getElementById("clicker");
var lamp = document.getElementById("lamp");

btn.onclick = function () {
  if (btn.value === "p") {
    lamp.src = "https://i.pinimg.com/originals/2d/58/b9/2d58b9e8f07ab1d97260116e53fdb457.jpg";
    lamp.width = 500;
    lamp.height = 500;
    btn.value = "s";
    // btn.innerHTML = "s";
    tranquilo.innerHTML = "13º, férias..."
  } else if (btn.value == "s") {
    lamp.src =
      "https://i.pinimg.com/564x/73/36/b0/7336b01048cb155dab150e64ef9fb756.jpg";
    lamp.width = 500;
    lamp.height = 500;  
    btn.value = "t";
    // btn.innerHTML = "t";
    tranquilo.innerHTML = "Ipva, Iptu..."
  } else {
    lamp.src =
      "https://64.media.tumblr.com/080fdb63afd2c88ad37b5e7ff2b3780d/c38e4d47ee729fa8-bc/s500x750/c5ef6ef54fbe1b8b0ae84ab2a5ef237ad20b5e5a.pnj";
      lamp.width = 500;
      lamp.height = 500;  
    btn.value = "p";
    // btn.innerHTML = "p";
    tranquilo.innerHTML = "Chegando o fim de ano"
  }
};
