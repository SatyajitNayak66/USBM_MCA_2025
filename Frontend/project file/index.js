  let countdown;
    
    function startCountdown() {
      const input = document.getElementById("secondsInput").value;
      let timeLeft = parseInt(input);

      if (isNaN(timeLeft) || timeLeft <= 0) {
        alert("Please enter a valid number of seconds.");
        return;
      }

      clearInterval(countdown);
      document.getElementById("countdownDisplay").textContent = timeLeft;

      countdown = setInterval(() => {
        timeLeft--;
        document.getElementById("countdownDisplay").textContent = timeLeft;

        if (timeLeft <= 0) {
          clearInterval(countdown);
          document.getElementById("countdownDisplay").textContent = "Time's up!";
        }
      }, 1000);
    }
