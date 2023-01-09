const setNavMobile = () => {
  const navMobile = document.querySelector("#navMobile");
  const first = document.querySelector("#first");
  const second = document.querySelector("#second");
  navMobile.classList.toggle("-mb-56");
  first.classList.toggle("translate-x-2");
  second.classList.toggle("-translate-x-2");
};

const setSidebar = () => {
  const one = document.querySelector("#one");
  const two = document.querySelector("#two");
  const three = document.querySelector("#three");
  const container = document.querySelector("#container");
  const sidebar = document.querySelector("#sidebar");
  one.classList.toggle("rotate-[35deg]");
  two.classList.toggle("opacity-0");
  three.classList.toggle("-rotate-[35deg]");
  container.classList.toggle("md:ml-60");
  sidebar.classList.toggle("-ml-60");
};
