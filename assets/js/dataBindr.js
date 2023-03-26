"use strict";
import data from '../Data/shivansh_data.json' assert {type:'json'};
import other_data from '../Data/Other_data.json' assert {type:'json'};
// console.log(data)


// linkedin
document.getElementById("linkedin_link").addEventListener("click", function() {
    document.getElementById("linkedin_link").href = data.basics.profiles[1].url;
  });

// Github
document.getElementById("github_link").addEventListener("click", function() {
    document.getElementById("github_link").href = data.basics.profiles[2].url;
  });

// Twitter
document.getElementById("twitter_link").addEventListener("click", function() {
    document.getElementById("twitter_link").href = data.basics.profiles[0].url;
  });
  

// function skills (){
//     let skills = data.sections.skills.items;
//     console.log(skills)
// }

// skills()

// Intro
const summary = document.getElementById("home__description").innerText = data.basics.summary
const title = document.getElementById("home__subtitle").innerText = data.basics.Title

console.log(summary)


// var image = document.createElement("img");
// var imageParent = document.getElementById("body");
// image.className = "img-thumbnail";
// image.src = "./Archive/Screenshot_2021-06-11-14-23-47-67_70ac116ce739e.jpg"          // image.src = "IMAGE URL/PATH"
// imageParent.appendChild(image);





function createWorkAndEdu(item, index){

}





// work and qualification


const works = other_data.Work.items
const education = other_data.Education.items

education.forEach(function(item, index){
console.log(item)
// Find the element with ID "myContainer"
const container = document.getElementById("education");

// Create the outermost <div> element with class "qualification__data"
const div1 = document.createElement("div");
div1.className = "qualification__data";

// Create the first empty <div> element
const div2 = document.createElement("div");

// Create the second <div> element with two child <span> elements
const div3 = document.createElement("div");
const span1 = document.createElement("span");
span1.className = "qualification__rounder";
const span2 = document.createElement("span");
span2.className = "qualification__line";
div3.appendChild(span1);
div3.appendChild(span2);

// Create the third <div> element with child elements
const div4 = document.createElement("div");
div4.className = "qualification__calender";
const i = document.createElement("i");
i.className = "uil uil-calendar-alt";
const text = document.createTextNode(item.duration);
const h3 = document.createElement("h3");
h3.className = "qualification__title";
h3.appendChild(document.createTextNode(item.name));
const span3 = document.createElement("span");
span3.className = "qualification__subtitle";
span3.appendChild(document.createTextNode(item.subtitle));

// Append the three <div> elements as children of the outermost <div> element
if(index%2!=0){
  div1.appendChild(div2);
  div1.appendChild(div3);
  div1.appendChild(div4);
  div4.appendChild(h3);
  div4.appendChild(span3);
  div4.appendChild(i);
  div4.appendChild(text);
  
}
else{
  div1.appendChild(div4);
  div4.appendChild(h3);
  div4.appendChild(span3);
  div4.appendChild(i);
  div4.appendChild(text);
  div1.appendChild(div3);
}
// Append the outermost <div> element to the "myContainer" element
container.appendChild(div1);

})


works.forEach(function(item, index){
  console.log(item)
  // Find the element with ID "myContainer"
  const container = document.getElementById("work");
  
  // Create the outermost <div> element with class "qualification__data"
  const div1 = document.createElement("div");
  div1.className = "qualification__data";
  
  // Create the first empty <div> element
  const div2 = document.createElement("div");
  
  // Create the second <div> element with two child <span> elements
  const div3 = document.createElement("div");
  const span1 = document.createElement("span");
  span1.className = "qualification__rounder";
  const span2 = document.createElement("span");
  span2.className = "qualification__line";
  div3.appendChild(span1);
  div3.appendChild(span2);
  
  // Create the third <div> element with child elements
  const div4 = document.createElement("div");
  div4.className = "qualification__calender";
  const i = document.createElement("i");
  i.className = "uil uil-calendar-alt";
  const text = document.createTextNode(item.duration);
  const h3 = document.createElement("h3");
  h3.className = "qualification__title";
  h3.appendChild(document.createTextNode(item.name));
  const span3 = document.createElement("span");
  span3.className = "qualification__subtitle";
  span3.appendChild(document.createTextNode(item.subtitle));
  const span5 = document.createElement("span");
  span5.className = "icon-date";
  
  // Append the three <div> elements as children of the outermost <div> element
  if(index%2!=0){
    div1.appendChild(div2);
    div1.appendChild(div3);
    div1.appendChild(div4);
    div4.appendChild(h3);
    div4.appendChild(span3);
    span5.appendChild(i)
    span5.appendChild(text);
    div4.appendChild(span5);
    
  }
  else{
    div1.appendChild(div4);
    div4.appendChild(h3);
    div4.appendChild(span3);
    span5.appendChild(i)
    span5.appendChild(text);
    div4.appendChild(span5);
    div1.appendChild(div3);
  }
  // Append the outermost <div> element to the "myContainer" element
  container.appendChild(div1);
  
  })
