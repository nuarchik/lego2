document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".card").forEach((item) => {
      item.addEventListener("click", function () {
        const cardId = item.getAttribute("data-id");
        window.location.href = `details.html?id=${cardId}`;
      });
    });
  });