<script>
      const scriptURL = "https://script.google.com/macros/s/AKfycbzXr2xacMwFdOh_y6VvvCvn0mAdZnldumrG8Bb4tDhW2RPdUwKvFg-Z16faRhAsF5Ev/exec";
      const form = document.forms["contact-me"];
      const btnKirim = document.querySelector(".btn-kirim");
      const btnLoad = document.querySelector(".btn-load");
      const myAlert = document.querySelector(".my-alert");

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        // ketika tombol di submit
        // tampilkan tombol loading, hilangkan tombol kirim
        btnLoad.classList.toggle("d-none");
        btnKirim.classList.toggle("d-none");
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) => {
            // tampilkan tombol kirim, hilangkan tombol loading
            btnLoad.classList.toggle("d-none");
            btnKirim.classList.toggle("d-none");
            // tampilkan alert
            myAlert.classList.toggle("d-none");
            // reset form
            form.reset();
            console.log("Success!", response);
          })
          .catch((error) => console.error("Error!", error.message));
      });
    </script>