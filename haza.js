const output = document.getElementById("skincare-output");
const formatCondition = (text) => text.toLowerCase().replace(/\s+/g, "_");
const renderResult = (item, condition) => {
  if (!output) return;
  output.style.display = "block";
  output.textContent = item
    ? `For ${item.description}, use: ${item.products.join(", ")}.`
    : `No skincare recommendation found for ${condition}.`;
};

fetch("skincare.json")
  .then((res) => res.json())
  .then(({ skincare }) => {
    document.querySelectorAll(".card .submitbtn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const condition = formatCondition(btn.closest(".card").querySelector("h2").innerText);
        renderResult(skincare[condition], condition);
      });
    });
  })
  .catch((error) => console.error("Error loading skincare.json:", error));
  