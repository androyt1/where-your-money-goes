const btn1 = document.querySelector(".btn-78p");
const btn2 = document.querySelector(".btn-22p");
const output = document.querySelector(".inner");
const infoBox = document.querySelector(".output");
const triangle = document.querySelector(".triangle");

const output1 = `
        <h2>78p funds life-changing projects</h2>
        <p>
            That includes ensuring earthquake survivors like Saleh in Syria have food
            and shelter and empowering the Lihukwa villagers in Zambia.
        </p>
    `;

const output2 = `
        <h2>22p ensures that we can continue to transform lives tomorrow</h2>
        <p>
            That includes fundraising and support costs, which allows us to make sure your donation has a long term impact.
        </p>
    `;
const dark = getComputedStyle(document.documentElement).getPropertyValue("--dark");
const purple = getComputedStyle(document.documentElement).getPropertyValue("--purple");

btn1.addEventListener("click", () => {
    output.innerHTML = output1;
    output.style.backgroundColor = purple;
    infoBox.style.backgroundColor = purple;
    triangle.style.borderBottom = `20px solid ${purple}`;
    triangle.classList.remove("move-right");
    triangle.classList.add("move-left");
});

btn2.addEventListener("click", () => {
    output.innerHTML = output2;
    output.style.backgroundColor = dark;
    infoBox.style.backgroundColor = dark;
    triangle.style.borderBottom = `20px solid ${dark}`;
    triangle.classList.remove("move-left");
    triangle.classList.add("move-right");
});
