// let btn = document.querySelector("button");
// let para = document.querySelector("p");
// let person = document.querySelector(".sai");

// const rand_quotes = [
//   {
//     quote: "Be yourself; everyone else is already taken.",
//     author: "Oscar Wilde",
//     profession: "Irish poet",
//     topics: ["Inspirational", "Advice", "Humor"],
//   },
//   {
//     quote:
//       "To live is the rarest thing in the world. Most people exist, that is all.",
//     author: "Oscar Wilde",
//     profession: "Irish poet",
//     topics: ["Philosophy", "Humor"],
//   },
//   {
//     quote: "True friends stab you in the front.",
//     author: "Oscar Wilde",
//     profession: "Irish poet",
//     topics: ["Philosophy", "People"],
//   },
//   {
//     quote: "Women are made to be Loved, not understood.",
//     author: "Oscar Wilde",
//     profession: "Irish poet",
//     topics: ["Philosophy", "Humor"],
//   },
// ];

// btn.addEventListener("click", () => {
//   let random = Math.floor(Math.random() * rand_quotes.length);
//   para.innerText = rand_quotes[random].quote;
//   person.innerText = rand_quotes[random].author;
//   console.log(random);
// });

// toggle input

const boxs = document.querySelector('#box');
boxs.style.display = 'none';
const blurrr = document.querySelector('.blurr')
document.querySelectorAll('.time-clock').forEach(box=>box.addEventListener('click',() => {
  boxs.style.display = 'block';
  boxs.style.position = 'fixed';
  boxs.style.top = '10%';
  blurrr.style.filter= 'blur(5px)'

}))


// console.log(body);

boxs.style.color = 'white';
const toggle = document.querySelector(".limit input");
console.log(toggle);
const weekend = document.querySelector(".weekend");
const weekday = document.querySelector(".date");
const limi_text = document.querySelector(".text");
const time = document.querySelector(".time");
const times = document.querySelector(".times");
const input = document.querySelector(".timeset");
const set_weekday_time = document.querySelector(".weekday");
const set_weekend_time = document.querySelector(".SETweekend");
const input_time = document.querySelector(".timesett");
const cont2 = document.querySelector(".cont2");
const cont1 = document.querySelector(".cont1");
const limit = document.querySelector(".limit");
const back = document.querySelector(".back");
back.style.display = "none";
back.style.padding ="3%"
back.style.paddingRight = "5%";
back.style.paddingLeft = "5%";

back.style.textAlign = "center";
const textweek = document.querySelector(".text-week");
const apply = document.querySelector(".apply");
const LimitText = document.querySelector('.limiText')
LimitText.style.textAlign = "center";
const backBtn = document.querySelector('.backk')
backBtn.style.display = "flex";
backBtn.style.justifyContent = "center";
console.log(set_weekend_time);
console.log(set_weekday_time);
console.log(input);

console.log(limi_text);
toggle.addEventListener("click", () => {
  if (toggle.checked) {
    weekend.style.display = "flex";
    weekday.style.display = "flex";
    limi_text.style.display = "none";
    input.style.display = "none";
    input_time.style.display = "none";
    set_weekday_time.style.display = "block";
    set_weekend_time.style.display = "flex";
    back.style.display = "flex";
  }
  if (toggle.checked == false) {
    weekend.style.display = "none";
    weekday.style.display = "none";
    limi_text.style.display = "flex";
    back.style.display = 'none';
  }
});
const box = document.getElementById("box");
const boxStyle = ()=>{
  box.style.padding='1%'
  box.style.borderRadius = '5px';
  box.style.marginLeft = '40%'
  box.style.marginTop = '10%'
}
boxStyle();


const button = document.querySelector(".close");
button.addEventListener("click", () =>{
  blurrr.style.filter= 'none'

})

button.style.marginLeft ='85%';
button.style.marginTop = '4%'
button.style.backgroundColor = 'none';
button.style.border= 'none';


button.addEventListener("click", () => {
  box.style.display = "none";
});

time.addEventListener("click", () => {
  set_weekday_time.style.display = "none";
  set_weekend_time.style.display = "none";
  input.style.display = "flex";
  input_time.style.display = "none";
  weekend.style.display = "none";
  weekday.style.display = "flex";
  cont1.style.display = "none";
  limit.style.display = "none";
  

});

times.addEventListener("click", () => {
  set_weekday_time.style.display = "none";
  set_weekend_time.style.display = "none";
  input.style.display = "none";
  input_time.style.display = "flex";
  weekend.style.display = "flex";
  weekday.style.display = "none";
  cont1.style.display = "none";
  limit.style.display = "none";
  
});
back.addEventListener("click", () => {
  cont1.style.display = "flex";
  limit.style.display = "flex";
// limi_text.style.display = "none";

  set_weekday_time.style.display = "flex";
  set_weekend_time.style.display = "flex";
  input.style.display = "none";
  input_time.style.display = "none";
  weekend.style.display = "flex";
  weekday.style.display = "flex";
  
});


// function setAppData(responseStr)
// {      
//         /*if(responseStr.indexOf('failed') != -1)
//         {
//             alert(responseStr);
//         }

//         else
//         {*/
// 	if(responseStr != 'not accessible')
// 	{     
// 		document.body.style.cursor  = 'default';  
// 		var data = responseStr.split('-sp1-');
// 		document.getElementById('name').innerHTML = data[0];
// 		document.getElementById('title').innerHTML = data[1];	
// 		document.getElementById('description').innerHTML = data[2];
// 		document.getElementById('category').innerHTML = data[3];
// 		document.getElementById('ranking').innerHTML = data[4];
//         document.getElementById('appImage').src = data[5];
// 		appGoogleId = data[0];
// 		disableButtons(0); 
// 	}
	
// 	else
// 	{
// 		if(moveIndex != 0)
// 		{
// 			currentIndex = currentIndex + 1;
// 		}
		
// 		else
// 		{
// 			moveIndex = 1;
// 		}
		
// 		if(currentIndex == appList.length)
// 		{
// 			document.body.style.cursor  = 'default';  
// 			currentIndex = appList.length - 1;
// 			alert("No more applications found to classify!");
// 		}
		
// 		else
// 		{
// 			GetNextApp();
// 		}
// 	}
        
// }






const people = ['sai','tr','ronaldo','neymar']
// // for (let i = 0;i<people.length;i++){
// //   console.log(people[i]);
// // }


for (let i of people){
  console.log(i);
}


for (let i in people){
  console.log(i)
}



const obj = {
  1: 1,
  2: 2,
  3 : 3
}
console.log(obj);


// for ( let i = 0; i<Object.keys(obj).length;i++) {
//   console.log(obj[Object.keys(obj)[i]])
// }


// for (let key in obj)  {
//   console.log(obj[key])
// }


// for (let key of obj) {
//   console.log(obj[key]);
// }


let sum = 0;
const numbers = [1,2,3,4];
numbers.forEach(myFunction);

function myFunction(item) {
  sum = item;
}


console.log(sum);


let a = [1,2]
let b = [3,4]

let c = [...a,...b]
console.log(c);

