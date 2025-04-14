    document.getElementById('btn').addEventListener('click', function () {
    let city = document.getElementById('input').value.trim();
    let apiKey = 'b8bf1a7e761c78d80dc87345252ed860';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=uz`;
  
    if (city === "") {
      alert("Iltimos, shahar nomini kiriting!");
      return;
    }
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Shahar topilmadi");
        }
        return response.json();
      })
      .then(data => {
        const html = `
          <div class="result">
            <h2>${data.name}</h2>
            <br>
              <div class="result__box"> 
              <p><strong>Harorat:</strong> ${data.main.temp}°C</p>
              <p><strong>Holat:</strong> ${data.weather[0].description}</p>
              <p><strong>Shamol tezligi:</strong> ${data.wind.speed} m/s</p>
              <p><strong>Namlik:</strong> ${data.main.humidity}%</p>
              </div>
          </div>
        `;
        document.querySelector('.list').innerHTML = html;
      })
      .catch(error => {
        alert("Xatolik: " + error.message);
        document.querySelector('.list').innerHTML = ""; 
      });
  });


  // let btn = document.getElementById("btn");
  document.addEventListener('keydown',(e)=>{
    if(e.key === 'Enter'){
      document.getElementById("btn").click();
    }
  });
  
