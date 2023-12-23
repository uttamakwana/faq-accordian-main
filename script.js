const faqs = document.querySelectorAll(".faq");

console.log(faqs);

faqs.forEach((faq) =>
  faq.addEventListener("click", (e) => {
    console.log(e.target.dataset.label);
    console.dir(faq.dataset.label);
    faqs.forEach((faq) => {
      if (
        faq.classList.contains("active") &&
        e.target.dataset.label !== faq.dataset.label
      ) {
        faq.classList.remove("active");
      }
    });
    if (faq.classList.contains("active")) {
      faq.classList.remove("active");
    } else {
      faq.classList.add("active");
    }
    console.log(faq.className);
  })
);
