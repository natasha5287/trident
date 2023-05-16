import Choices from "choices.js";

function multiDefaultSelect() {
    const elements = document.querySelectorAll(".js-choice");
    elements.forEach(el => {
        const choices = new Choices(el, {
            searchEnabled: false,
            itemSelectText: "",
            allowHTML: true,
        });
    })
}

multiDefaultSelect();
