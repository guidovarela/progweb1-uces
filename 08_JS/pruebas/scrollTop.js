window.addEventListener("scroll", () => {
  // Obtiene los píxeles desplazados desde la parte superior
  const pixelesScroll = document.documentElement.scrollTop || document.body.scrollTop;
  
  console.log(`Scroll desde el inicio: ${pixelesScroll}px`);
  
  // Ejemplo: Hacer algo si pasa los 200px
  if (pixelesScroll > 200) {
    console.log("El usuario bajó más de 200 píxeles.");
  }
});