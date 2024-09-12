function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const arrow = element.querySelector('.faq-arrow');

  
    if (answer.style.display === "block") {
        answer.style.display = "none";
        arrow.textContent = "+";
        element.classList.remove("open");
    } else {
        answer.style.display = "block";
        arrow.textContent = "-";
        element.classList.add("open");
    }
}