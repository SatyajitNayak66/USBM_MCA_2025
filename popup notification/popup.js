  function showNotification() {
      const notification = document.getElementById("notification");
      notification.style.display = "block";

      setTimeout(() => {
        notification.style.display = "none";
      }, 5000);
    }
