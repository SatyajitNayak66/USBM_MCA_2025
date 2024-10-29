 let isVisible = true;

    setInterval(() => {
      const text = document.getElementById("blinkingText");
      isVisible = !isVisible;
      text.style.visibility = isVisible ? "visible" : "hidden";
    }, 1000);
