document.addEventListener("DOMContentLoaded", function () {
  const leftBtn = document.querySelector("#left-btn");
  const rightBtn = document.querySelector("#right-btn");
  const carouselCont = document.querySelector(".carousel-cont");
  const carouselItems = document.querySelectorAll(".carousel-img");
  const carouselLent = document.querySelector(".carousel-lent");

  let currentIndex = 0;
  let itemWidth = 0;
  let maxIndex = 0;

  function updateSettings() {
    // Получаем ширину одного элемента с учётом отступов
    itemWidth = carouselItems[0].offsetWidth + 10;

    // Вычисляем, сколько элементов помещается в контейнер
    const visibleCount = Math.floor(carouselLent.offsetWidth / itemWidth);

    // Максимально возможный индекс для прокрутки
    maxIndex = Math.max(0, carouselItems.length - visibleCount);

    // Если текущий индекс оказался вне границ после  — корректируем
    if (currentIndex > maxIndex) {
      currentIndex = maxIndex;
    }

    updatePosition();
  }

  function updatePosition() {
    carouselCont.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }

  rightBtn.addEventListener("click", function () {
    if (currentIndex < maxIndex) {
      currentIndex++;
      updatePosition();
    }
  });

  leftBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updatePosition();
    }
  });

  window.addEventListener("resize", updateSettings);

  updateSettings();
});
