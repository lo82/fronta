const TIEMPO = 10;
const dealers = [
    {
      id: 1,
      time: "8:00",
      status: "Disponible",
    },
    {
      id: 2,
      time: "8:30",
      status: "Disponible",
    },
    {
      id: 3,
      time: "9:00",
      status: "Disponible",
    },
    {
      id: 4,
      time: "9:30",
      status: "Disponible",
    }
  ];

//Creando un foreach para mostrar todos los datos
dealers.forEach(function (dealer) {
    const template = `
      <div id="dealerContainer${dealer.id}" class="riders-panel">
        <div class="container">
          <h3>${dealer.time}</h3>
        </div>

        <div class="container">
          <p>#${dealer.id}</p>
        </div>
        
        <div class="container">
          <button class="btn active" 
                  dealer-id="${dealer.id}"
                  onclick="handleClick(event)"
          >${dealer.status}</button>
        </div>
      </div>
    `;
    app.innerHTML += template;
});
  
function handleClick(event){
    let dealerId = event.target.attributes.getNamedItem("dealer-id").value;
    console.log("handleClick",dealerId);
    if(!event.target.parentNode.parentNode.classList.contains("disabled")) {
        event.target.parentNode.parentNode.classList.add("disabled");
        event.target.classList.add("disabled");
        event.target.innerHTML = "Ocupado";
        if (!event.target.disabled) {
            event.target.disabled = true;
            dealers.forEach( 
                function(d){ 
                    if(d.id == dealerId)
                        d.timer = TIEMPO;
                }
            );
        }
        console.log(`El boton ha sido desactivado`);
    } 
};
  
setInterval( 
    function(){
        dealers.forEach(
            function(d,i){
                if(d.timer != null){
                    let e = document.getElementById("dealerContainer"+d.id);
                    console.log(d.id+":",d.timer);

                    let mins = Math.floor(d.timer / 60);
                    let remSec = d.timer % 60;

                    let h3 = e.querySelector("h3");
                    h3.innerHTML = `Disponible en: ${String(mins).padStart(2,"0")}:${String(remSec).padStart(2,"0")} minutos`;

                    if (d.timer > 0) {
                        d.timer--;
                    } else {
                        alert("El tiempo ha terminado");
                        d.timer = null;
                        h3.innerHTML = d.time;
                        
                        let btn = e.querySelector(".btn");
                        btn.disabled = false;
                        btn.parentNode.parentNode.classList.remove("disabled");
                        btn.classList.remove("disabled");
                        btn.innerHTML = "Disponible";
                        dealers[d.id].timer = null;
                        console.log(`El boton ha sido activado`);
                    }
                }
            }
        );
    }
, 1000
);