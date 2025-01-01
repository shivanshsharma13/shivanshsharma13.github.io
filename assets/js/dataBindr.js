"use strict";

Promise.all([
  fetch('/assets/Data/shivansh_data.json').then(response => response.json()),
  fetch('/assets/Data/Other_data.json').then(response => response.json()),
  fetch('/assets/Data/gfg.json').then(response => response.json()),
  fetch('/assets/Data/gfg2.json').then(response => response.json())
]).then(([data, other_data, gfg_data, gfg_data2]) => {
    // Social Links
    document.getElementById("linkedin_link").addEventListener("click", function() {
        document.getElementById("linkedin_link").href = data.basics.profiles[1].url;
    });

    document.getElementById("github_link").addEventListener("click", function() {
        document.getElementById("github_link").href = data.basics.profiles[2].url;
    });

    document.getElementById("twitter_link").addEventListener("click", function() {
        document.getElementById("twitter_link").href = data.basics.profiles[0].url;
    });

    // Intro Section
    document.getElementById("home__description").innerText = data.basics.summary;
    document.getElementById("home__subtitle").innerText = data.basics.Title;

    // Education Section
    const education = other_data.Education.items;
    education.forEach(function(item, index) {
        const container = document.getElementById("education");
        const div1 = document.createElement("div");
        div1.className = "qualification__data";

        const div2 = document.createElement("div");
        const div3 = document.createElement("div");
        const span1 = document.createElement("span");
        span1.className = "qualification__rounder";
        const span2 = document.createElement("span");
        span2.className = "qualification__line";
        div3.appendChild(span1);
        div3.appendChild(span2);

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

        if(index%2!=0) {
            div1.appendChild(div2);
            div1.appendChild(div3);
            div1.appendChild(div4);
            div4.appendChild(h3);
            div4.appendChild(span3);
            div4.appendChild(i);
            div4.appendChild(text);
        } else {
            div1.appendChild(div4);
            div4.appendChild(h3);
            div4.appendChild(span3);
            div4.appendChild(i);
            div4.appendChild(text);
            div1.appendChild(div3);
        }
        container.appendChild(div1);
    });

    // Work Section
    const works = other_data.Work.items;
    works.forEach(function(item, index) {
        const container = document.getElementById("work");
        const div1 = document.createElement("div");
        div1.className = "qualification__data";

        const div2 = document.createElement("div");
        const div3 = document.createElement("div");
        const span1 = document.createElement("span");
        span1.className = "qualification__rounder";
        const span2 = document.createElement("span");
        span2.className = "qualification__line";
        div3.appendChild(span1);
        div3.appendChild(span2);

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

        if(index%2!=0) {
            div1.appendChild(div2);
            div1.appendChild(div3);
            div1.appendChild(div4);
            div4.appendChild(h3);
            div4.appendChild(span3);
            span5.appendChild(i);
            span5.appendChild(text);
            div4.appendChild(span5);
        } else {
            div1.appendChild(div4);
            div4.appendChild(h3);
            div4.appendChild(span3);
            span5.appendChild(i);
            span5.appendChild(text);
            div4.appendChild(span5);
            div1.appendChild(div3);
        }
        container.appendChild(div1);
    });

    // Projects Section
    gfg_data2.forEach(function(item) {
        const con = document.getElementById("pro");
        const skillsContent = document.createElement("div");
        skillsContent.classList.add("skills__open");

        const skillsList = document.createElement("div");
        skillsList.classList.add("skills__list", "grid");

        const articleLink = document.createElement("a");
        articleLink.setAttribute("href", item.url);
        articleLink.classList.add("button", "button--flex", "button--small", "portfolio__button");
        articleLink.textContent = item.Title;

        const arrowIcon = document.createElement("i");
        arrowIcon.classList.add("uil", "uil-arrow-right", "button__icon");

        articleLink.appendChild(arrowIcon);
        skillsList.appendChild(articleLink);
        skillsContent.appendChild(skillsList);
        con.appendChild(skillsContent);
    });
});
