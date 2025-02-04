/*fetch('pins.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error fetching pins.json:', error);
    });*/
const form = document.getElementById("pinForm");
const userInput = document.getElementById("pin");
const feedbackContainer = document.getElementById("feedbackContainer");

    function verifyPin(userInput) {
        fetch('pins.json')
            .then(response => response.json())
            .then(data => {
                const pins = data.pins; 
                if (pins.includes(userInput.trim())) {
                    feedbackContainer.innerText = 'Pin is valid';
                } else {
                    feedbackContainer.innerText = 'Pin is invalid';
                }
            })
            .catch(error => {
                console.error('Error fetching pins.json:', error);
            });

            
    }
    form.addEventListener("submit", (event) => {
        event.preventDefault(); 
        verifyPin(userInput.value);
      });
      
   
