
Birthdate = new Date(Date.UTC(2023, 04, 21, -1,00, 0));

const MainBody = document.body;
const HourNumbers = document.querySelectorAll(".num");
const HourSides = document.querySelectorAll(".mark");
const HourHand = document.querySelector(".hr_hand");
const MinHand = document.querySelector(".min_hand");
const Glass = document.querySelector(".Glass")
const Clock = document.querySelector(".Clock");
const Sphere = document.querySelectorAll(".sphere");
const TimeDay = document.querySelector(".Clock_dig_Day");

const DayName = document.getElementById("dayname");
const Month = document.getElementById("month");
const DayNum = document.getElementById("daynum");
const Year = document.getElementById("year");
const DaysLeft = document.getElementById("days_left");
const Hourleft = document.getElementById("hours_left");
const Minsleft = document.getElementById("mins_left");
const Secsleft = document.getElementById("secs_left");
const Info = document.querySelectorAll(".info");



const HeaderStyle = document.getElementById("Header_Style");
const AnalogClock = document.getElementById("Analog_Clock");
const ClockDigital = document.getElementById("Clock_Digital");
const ClockAlg=document.getElementById("Clock_Alg");

const GlassDay = document.createElement("div");
const GlassBorder1 = document.createElement("div");
const GlassBorder2 = document.createElement("div");
const GlassTimeBox=document.createElement("div");
const GlassTime = document.createElement("div");
const CreateSpam = document.createElement("span");
const GlassHour = document.createElement("span");
const GlassMin = document.createElement("span");
const GlassSec = document.createElement("span");
const GlassHourInfo = document.createElement("span");
const GlassMinInfo = document.createElement("span");
const GlassSecInfo = document.createElement("span");

const GlassStyle1=document.createElement("div");
const GlassStyle2=document.createElement("div");
console.log(HourNumbers, HourHand, HeaderStyle);




///GLASS PRISM//////////
const Glass1Text=document.querySelector(".Glass_1_text");
const Glass1Img=document.querySelector(".Glass_2_img")
const Glass1=document.getElementById("Glass1")
const Image1=document.getElementById("Image1")
const Glass2=document.getElementById("Glass2")
const Image2=document.getElementById("Image2")
const Glass3=document.getElementById("Glass3")
const Image3=document.getElementById("Image3")
const Glass4=document.getElementById("Glass4")
const Image4=document.getElementById("Image4")







const GliterCard = document.querySelectorAll('.Glider_card');
const Section3Content=document.getElementById("Content");
const Section2=document.querySelector(".Section_2")
const Section1=document.querySelector(".Section_1")
const Selection=document.querySelector(".Selection")
const Section4=document.querySelector(".Section_4");
const Section5=document.querySelector(".Section_5")
const Section3Area=document.querySelector(".area")


const color=[
  "",
  " linear-gradient(45deg, #fad0c4 0%, #ffd1ff 100%)",
  "linear-gradient(135deg, rgb(246, 206, 236) 10%, rgb(217, 57, 205) 100%)",
  "linear-gradient(to top, #c471f5 0%, #fa71cd 100%)",
  "linear-gradient( 43deg,#4158D0 0%, #C850C0 46%, #FFCC70 100%)",
  "linear-gradient(45deg,#7A1036, #FF7EBE, #F5D0E2)",
  "linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)",
  "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(-225deg, #FF057C 0%, #8D0B93 50%, #321575 100%)",
  "linear-gradient(to right, rgb(95, 1, 95), rgb(255, 0, 195))"
]


GliterCard.forEach(el => el.addEventListener('click', GlitterId => {

Section3Content.style.background=color[GlitterId.target.id];
Section2.style.background=color[GlitterId.target.id];
Section4.style.background=color[GlitterId.target.id];
Section5.style.background=color[GlitterId.target.id];
Section3Area.style.background=color[GlitterId.target.id];

}));


new Glider(document.querySelector('.glider'), {
  slidesToShow: 3,
  slidesToScroll: 1,
  draggable: true,
  dots: '.dots',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
});


function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);



Sphere.forEach((Sphere) =>
  Sphere.style.display = "none"
)
HeaderStyle.style.opacity="0";


function variables() {

}

function setClock() {
  now = new Date();


  hours = now.getHours();
  minutes = now.getMinutes();
  seconds = now.getSeconds();
  day = now.getDay();
  month = now.getMonth();
  date = now.getDate();
  year = now.getFullYear();


  // Setting--Birthdate//

  // Birthdate=new Date();
  Timeleft = Birthdate - now;
  daysleft = Math.trunc(Timeleft / (1000 * 3600 * 24));
  daysresd = Timeleft % (1000 * 3600 * 24);
  hoursleft = Math.trunc(daysresd / (1000 * 3600));
  hoursresd = daysresd % (1000 * 3600);
  minsleft = Math.trunc(hoursresd / (1000 * 60));
  minsresd = hoursresd % (1000 * 60);
  secsleft = Math.trunc(minsresd / 1000);


  // Setting--Digital--Clock//
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Augest",
    "September",
    "October",
    "November",
    "December",
  ];
  var week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var values = [
    week[day],
    months[month],
    date,
    year,
    daysleft,
    hoursleft,
    minsleft,
    secsleft,
  ];


  //Setting--Analog-Clock//
  hrValue = 180 + hours * 30 + (minutes * 6) / 12;
  minvalue = 180 + minutes * 6;
  secValue = 180 + seconds * 6;

  //UPDATE----ANALOG-CLOCK//

  document.querySelector(".hr_hand").style.transform =
    "rotate(" + hrValue + "deg)";
  document.querySelector(".min_hand").style.transform =
    "rotate(" + minvalue + "deg)";
  document.querySelector(".sec_hand").style.transform =
    "rotate(" + secValue + "deg)";

  //UPDATE----DIGITAL-CLOCK///

  DayName.innerHTML = values[0];
  Month.innerHTML = values[1];
  DayNum.innerHTML = "&nbsp" + values[2];
  Year.innerHTML = "&nbsp" + values[3];

  //LEFT----TIME//
  DaysLeft.innerHTML = values[4];
  Hourleft.innerHTML = "&nbsp" + values[5];
  Minsleft.innerHTML = "&nbsp" + values[6];
  Secsleft.innerHTML = "&nbsp" + values[7];
  const x = 0;
  // console.log(Timeleft)
  console.log(Timeleft )
  if (Timeleft<0) {
   
    AnalogClock.classList.add("Blink");
    AnalogClock.addEventListener("click", function () {

      ClockAlg.style.alignItems="center";
      clearInterval(ClockInterval)
      Sphere.forEach((Sphere) =>
        Sphere.classList.add("Sphere_animation")
      )
    
      Sphere.forEach((Sphere) =>
        Sphere.style.display = "block"
      )
    
      Glass.classList.add("Opacity");
      setTimeout(DeleteDigClock, 1000);
      setTimeout(AddDigMirror, 1000)
    
    
      HeaderStyle.classList.add("Display");
      Ang_Clock();
      Clockhands();
    
      
     Section1.classList.remove("Display_none");
    Section2.classList.remove("Display_none");
    Section3Content.classList.remove("Display_none");
    Section4.classList.remove("Display_none");
    Section5.classList.remove("Display_none");
    Selection.classList.remove("Display_none");
    
    
    })
  }


}



const ClockInterval = setInterval(setClock, 100);


///Functions///


function DeleteDigClock() {
  Glass.remove();
  ClockDigital.style.gridTemplateRows = "repeat(10,1fr)"
}

function AddDigMirror() {
  ClockDigital.appendChild(GlassDay);
  GlassDay.after(GlassBorder1);
  GlassBorder1.after(GlassBorder2);
  GlassBorder2.after(GlassTimeBox);
  GlassTimeBox.appendChild(GlassTime);

  GlassDay.classList.add("Clock_Mir_Day");
  GlassBorder1.classList.add("Clock_Mir_Bor1");
  GlassBorder2.classList.add("Clock_Mir_Bor2");
  GlassTimeBox.classList.add("Clock_Mir_Box_Time");
  GlassTime.classList.add("Clock_Mir_Time")
  
  ///Hover Effect Hour///
  // GlassHour.classList.add("Clock_Mir_Axis");

  document.querySelector(".Clock_Mir_Day").appendChild(CreateSpam);
  CreateSpam.setAttribute("id", "Mir_dayname");
  
   
  MainBody.appendChild(GlassStyle1);
  GlassStyle1.after(GlassStyle2);

  GlassStyle1.classList.add("Glass_style1");
  GlassStyle2.classList.add("Glass_style2");

  VanillaTilt.init(document.querySelector(".Clock_Mir_Day"), {
    max: 25,
    speed: 400
  });

  VanillaTilt.init(document.querySelector(".Clock_Mir_Bor1"), {
    max: 25,
    speed: 400
  });
  VanillaTilt.init(document.querySelector(".Clock_Mir_Bor2"), {
    max: 25,
    speed: 400
  });
  VanillaTilt.init(document.querySelector(".Clock_Mir_Box_Time"), {
    max: 25,
    speed: 400
  });

  ///Adding Glass Translucent Classs///
  GlassStyle1.classList.add("Translucent_Glass");
  GlassStyle2.classList.add("Translucent_Glass");
  GlassDay.classList.add("Translucent_Glass");
  GlassBorder1.classList.add("Translucent_Glass");
  GlassBorder2.classList.add("Translucent_Glass");
  GlassTimeBox.classList.add("Translucent_Glass");


  HeaderStyle.style.opacity="0";

  ///Increasing Body////
  MainBody.style.gridTemplateRows="[ViewPort]8vh [Clock_1]35rem [Clock_2]minmax(10vw,15vw)[row_end] 25vw 10vw 50vw 100vw 60vw"



  
// Glass1Text.onmouseover=function(){
//   Image1.style.display="block";
//   Image2.style.display="none";
//   Image3.style.display="none";
//   Image4.style.display="none";
//     console.log(289)
//   }








  function setMirrorClock() {
    now = new Date();
    hours = now.getHours();
    minutes = now.getMinutes();
    seconds = now.getSeconds();
    day = now.getDay();
    month = now.getMonth();
    date = now.getDate();
    year = now.getFullYear();

    const rd=now.toLocaleString('en-GB', { timeZone: 'Europe/London' })
const red=rd.slice(12,20);
console.log(red,rd)
    // Setting--Birthdate//

    // Setting--Digital--Clock//
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Augest",
      "September",
      "October",
      "November",
      "December",
    ];
    var week = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var values = [
      week[day],
      months[month],
      date,
      year,
      hours,
      minutes,
      seconds
    ];


    document.getElementById("Mir_dayname").innerHTML = values[0];
    GlassTime.innerHTML=red;
    // document.querySelector(".GlassHour").innerHTML = values[4];
    // document.querySelector(".GlassMin").innerHTML = values[5];
    // document.querySelector(".GlassSec").innerHTML = values[6];
    // GlassHourInfo.innerHTML = "hr";
    // GlassMinInfo.innerHTML = "min";
    // GlassSecInfo.innerHTML = "sec"

  }
 
  
  setInterval(setMirrorClock, 100)
}

// function Background(){
//   document.body.style.background="radial-gradient(closest-side at 35vw 25vw, rgb(255, 255, 255),rgb(238, 231, 236),rgb(245, 228, 240),rgb(252, 215, 242))";
// }

function Ang_Clock() {
  AnalogClock.classList.add("Change_Clock");
  AnalogClock.classList.remove("Blink");
}

function Clockhands() {
  HourNumbers.forEach((HourNumbers) => {
    HourNumbers.classList.add('Change_num')
  })

  HourSides.forEach((HourSides) =>
    HourSides.classList.add('mark_Change'));

  HourHand.classList.add('hr_hand1');
  MinHand.classList.add('min_hand1')
}

// function addCode() {
//   document.getElementById(".Header_Style").innerHTML +=
//   "<h3>This is the text which has been inserted by JS</h3>";
// }

// const Coordinate=Body.getBoundingClientRect()
// console.log(Coordinate);


///Sphere Balls Movement///

// const ball1 = document.querySelector(".sphere_1");
// const ball2 = document.querySelector(".sphere_2");
// const ball3 = document.querySelector(".sphere_3");
// const ball4 = document.querySelector(".sphere_4");
// const ball5 = document.querySelector(".sphere_5");

// let x1 = 0;
// let y1 = 0;
// let x2 = 300;
// let y2 = 500;
// let x3 = 800;
// let y3 = 500;
// let x4 = 100;
// let y4 = 400;
// let x5 = 600;
// let y5 = 300;
// let x1Speed = 1.5;
// let y1Speed = 1.5;
// let x2Speed = 2;
// let y2Speed = 2;
// let x3Speed = .5;
// let y3Speed = .5;
// let x4Speed = 1;
// let y4Speed = 1;
// let x5Speed = 1;
// let y5Speed = 1;

// function Ball1() {
//   x1 += x1Speed;
//   y1 += y1Speed;
//   if (x1 +250 > window.innerWidth || x1 < 0) {
//     x1Speed = -x1Speed;
//   }
//   if (y1 + 100 > window.innerHeight || y1 < 0) {
//     y1Speed = -y1Speed;
//   }

//   ball1.style.left = x1 + "px";
//   ball1.style.top = y1 + "px";

//   requestAnimationFrame(Ball1);
// }

// function Ball2() {
//   x2 += x2Speed;
//   y2 += y2Speed;
//   if (x2 + 250 > window.innerWidth || x2 < 0) {
//     x2Speed = -x2Speed;
//   }
//   if (y2 + 100 > window.innerHeight || y2 < 0) {
//     y2Speed = -y2Speed;
//   }

//   ball2.style.left = x2 + "px";
//   ball2.style.top = y2 + "px";

//   requestAnimationFrame(Ball2);
// }

// function Ball3() {
//   x3 += x3Speed;
//   y3 += y3Speed;
//   if (x3 + 150 > window.innerWidth || x3 < 0) {
//     x3Speed = -x3Speed;
//   }
//   if (y3 + 100 > window.innerHeight || y3 < 0) {
//     y3Speed = -y3Speed;
//   }

//   ball3.style.left = x3 + "px";
//   ball3.style.top = y3 + "px";

//   requestAnimationFrame(Ball3);
// }

// function Ball4() {
//   x4 += x4Speed;
//   y4 += y4Speed;
//   if (x4 + 250 > window.innerWidth || x4 < 0) {
//     x4Speed = -x4Speed;
//   }
//   if (y4 + 100 > window.innerHeight || y4 < 0) {
//     y4Speed = -y4Speed;
//   }

//   ball4.style.left = x4 + "px";
//   ball4.style.top = y4 + "px";

//   requestAnimationFrame(Ball4);
// }
// function Ball5() {
//   x5 += x5Speed;
//   y5 += y5Speed;
//   if (x5 + 250 > window.innerWidth || x5 < 0) {
//     x5Speed = -x5Speed;
//   }
//   if (y5 + 100 > window.innerHeight || y5 < 0) {
//     y5Speed = -y5Speed;
//   }

//   ball5.style.left = x5 + "px";
//   ball5.style.top = y5 + "px";

//   requestAnimationFrame(Ball5);
// }

// Ball1();
// Ball2();
// Ball3();
// Ball4();
// Ball5();



// Glass1.addEventListener("mouseover",function(){
//   Glass1Img.style.display="block";
// })






///Clouds///

// const Cloud1=document.querySelector(".cloud_1");
// const Cloud2=document.querySelector(".cloud_2");
// const Cloud3=document.querySelector(".cloud_3");
// const Cloud4=document.querySelector(".cloud_4");
// const Cloud5=document.querySelector(".cloud_5");
// const Cloud6=document.querySelector(".cloud_6");
// const Cloud7=document.querySelector(".cloud_7");
// const Cloud8=document.querySelector(".cloud_8");
// const wish=document.querySelector(".wish");

// const Moon=document.querySelector(".moon");
// const lake=document.querySelector(".lake")


// window.addEventListener("scroll",function(){
//   let value=this.window.scrollY;
//   if(value>1200){
//   Cloud1.style.left=-value+1300+"px";
//   // Cloud1.style.opacity=1-value/2400;
//   Cloud2.style.left=(value-800)*1.2+"px";
//   Cloud3.style.left=-(value-1200)+"px";
//   Cloud4.style.left=(value-900)*1.2+"px";
//   Cloud5.style.left=(-value +1000)*1.05+"px";
//   Moon.style.top=value-1200+"px";
//   Cloud6.style.left=(value-900)*1.2+"px";
//   Cloud7.style.left=(value-1100)+"px";
//   Cloud8.style.left=(value-300)*1.2+"px";
//   Moon.style.transform="scale("+value/1200+")";
//   wish.style.right=(value-1600)*1+"px";
  
// }
//   console.log(value);
// })


const Img1=document.querySelector(".img_1");
const Img2=document.querySelector(".img_2");
const GLassImg1=document.querySelector("Glass_1_img");
const BoxImg1=document.querySelector(".BoxImg1");
const BoxImg2=document.querySelector(".BoxImg2");
const BoxImg3=document.querySelector(".BoxImg3");
const BoxImg4=document.querySelector(".BoxImg4");

async function init () {
  const node = document.querySelector("#type-text")
  const nodevs = document.querySelector("#wish-text")
  // const img=document.querySelector("#img")
  
  await sleep(1000)
  node.innerText = ""
  await node.type('')
  
  while (true) {
    await node.type(' Smile!')
    await nodevs.type('Princess')
    Img1.src="./Photos/IMG_5591.jpg";
    Img2.src="./Photos/IMG_5598-FDC6A.png";
    BoxImg1.src="./Photos/IMG_5915-E871F.jpg";
    BoxImg2.src="./Photos/IMG_4065-B51B2.jpg";
    BoxImg3.src="./Photos/IMG_4306-77F43.jpg";
    BoxImg4.src="./Photos/IMG_4968-F51E1.jpg"
    await sleep(2000)
    await node.delete('Smile!')
    await nodevs.delete('Princess')
    await node.type('Caring!')
    await nodevs.type('Cutie')
    Img1.src="./Photos/IMG_4239-FFA57.jpg";
    Img2.src="./Photos/IMG_6270-0FD1D.jpg"
    BoxImg1.src="./Photos/IMG_5912-75E19.jpg";
    BoxImg2.src="./Photos/IMG_4586-A8AAE.jpg";
    BoxImg3.src="./Photos/IMG_4420-203FD.jpg"
    BoxImg4.src="./Photos/IMG_5400-F98EF.png";
    await sleep(2000)
    await node.delete('Caring!')
    await nodevs.delete(' Cutie!')
    Img1.src="./Photos/IMG_4423-60F91.jpg";
    Img2.src="./Photos/IMG_6411-9ED3F.jpg"
    BoxImg1.src="./Photos/IMG_5815-48F7B.jpg";
    BoxImg2.src="./Photos/IMG_5093-F1DFA.jpg";
    BoxImg3.src="./Photos/IMG_5501-9D549.jpg";
    BoxImg4.src="./Photos/IMG_4018-BF2BA.png";
    await node.type('Sweet')
    await nodevs.type('Nicoleta')
    
    await sleep(2000)
    await node.delete('Sweet')
    await nodevs.delete('Nicoleta')
  }
}


// Source code 🚩

const sleep = time => new Promise(resolve => setTimeout(resolve, time))

class TypeAsync extends HTMLSpanElement {
  get typeInterval () {
    const randomMs = 100 * Math.random()
    return randomMs < 50 ? 10 : randomMs
  }
  
  async type (text) {
    for (let character of text) {
      this.innerText += character
      await sleep(this.typeInterval)
    }
  }
  
  async delete (text) {
    for (let character of text) {
      this.innerText = this.innerText.slice(0, this.innerText.length -1)
      await sleep(this.typeInterval)
    }
  }
}

customElements.define('type-async', TypeAsync, { extends: 'span' })


init();






///Scroll///



Section1.classList.add("Display_none");
Section2.classList.add("Display_none");
Section3Content.classList.add("Display_none");
Section4.classList.add("Display_none");
Section5.classList.add("Display_none");
Selection.classList.add("Display_none");





