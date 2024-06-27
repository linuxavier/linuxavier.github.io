// (() => {
//     const pageform = document.querySelector("#regular-html-form");

//     let hidinput = document.createElement("input");
//     hidinput.type = "hidden";
//     hidinput.name = "inf-tracking-id";
//     hidinput.id = "inf-tracking-id";
//     hidinput.value = "302wjfn309ufj309uj2.sodfuew0"

//     pageform.appendChild(hidinput);
// })();

const pageform = document.querySelector("#regular-html-form");
pageform.addEventListener("submit", (e) => {
    e.preventDefault();

    let email_value = pageform.querySelector("input#email").value;

    window._inflection.identify(email_value);
} )
