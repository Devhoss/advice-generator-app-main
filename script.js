const adviceId = document.getElementById("advice-id");

const btn = document.getElementById("btn");

const api = "https://api.adviceslip.com";

const generateAdvice = () => {
  fetch(`${api}/advice`)
    .then((res) => res.json())
    .then((data) => {
      adviceId.innerText = `# ${data.slip.id}`;
      document.getElementById("advice").innerHTML = `“${data.slip.advice}”`;
    });
};

btn.addEventListener("click", generateAdvice);
