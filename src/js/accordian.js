export default function initAccordion() {
  const items = document.querySelectorAll(".accordion-item");

  if (!items.length) return;

  items.forEach((item, index) => {
    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");

    if (index === 0) {
      item.classList.add("active");
      content.style.height = content.scrollHeight + "px";
    }

    header.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all
      items.forEach((i) => {
        i.classList.remove("active");
        const c = i.querySelector(".accordion-content");
        if (c) c.style.height = "0px";
      });

      // Open clicked
      if (!isActive) {
        item.classList.add("active");
        content.style.height = content.scrollHeight + "px";
      }
    });
  });
}
