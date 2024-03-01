
(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        wedding = "04/26/2024 14:30:00"
    
    today = mm + "/" + dd + "/" + yyyy;
    
    //end
    
    const countDown = new Date(wedding).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
        
        }, 0)
    }());


    const photosList = [
        "./img/WhatsApp Image 2024-02-26 at 18.25.04 (1).jpeg",
        "./img/WhatsApp Image 2024-02-26 at 18.27.02.jpeg",
        "./img/WhatsApp Image 2024-02-26 at 18.28.54.jpeg",
        "./img/WhatsApp Image 2024-02-26 at 18.29.23.jpeg",
        "./img/WhatsApp Image 2024-02-26 at 18.30.05.jpeg",
        "./img/WhatsApp Image 2024-02-26 at 18.30.42.jpeg",
        "./img/WhatsApp Image 2024-02-26 at 18.31.28.jpeg",
        "./img/WhatsApp Image 2024-02-26 at 21.10.04.jpeg",
        "./img/WhatsApp Image 2024-02-26 at 21.13.32.jpeg",
        "./img/WhatsApp Image 2024-02-26 at 21.14.41.jpeg"
      ];
      
      const cards = document.querySelector('.cards');
      let prevImageIndex = -1; // Initialize with a value that won't match any index
      if (cards) {
        let i = 0;
        setInterval(() => {
          const active = i++ % 3 + 1;
          cards.setAttribute('data-active', active);
          cards.removeAttribute('data-current');
      
          for (let j = 0; j < 3; j++) {
            //const cardImg = document.querySelector(`#card${j + 1} img`);
            let imageIndex;
            do {
              imageIndex = Math.floor(Math.random() * photosList.length);
            } while (imageIndex === prevImageIndex);
      
            if(active===1){
              document.querySelector(`#card2 img`).setAttribute("src", photosList[imageIndex]);
              prevImageIndex = imageIndex;
            }
            if(active===2){
      
              document.querySelector(`#card3 img`).setAttribute("src", photosList[imageIndex]);
              prevImageIndex = imageIndex;
            }
            if(active===3){
      
              document.querySelector(`#card1 img`).setAttribute("src", photosList[imageIndex]);
              prevImageIndex = imageIndex;
            }
          }
          setTimeout(() => {
            cards.setAttribute('data-current', active);
          }, 1000);
        }, 3000);
      }
      
      
      