let citys;
const city = new rive.Rive({
    src: "isomatric_city.riv",
    canvas: document.getElementById("city"),
    autoplay: true,
    stateMachines: "State Machine 1",
    fit: rive.Fit.cover,
    onLoad: () => {
        const inputs =city.stateMachineInputs('State Machine 1');
        const st = inputs.find(i => i.name === 'switch');   
        citys=st;
    }
});
const st = new rive.Rive({
    src: "switch.riv",
    canvas: document.getElementById("switch"),
    autoplay: true,
    stateMachines: "State Machine 1",
    fit: rive.Fit.cover,
    onLoad: () => {
        const inputs = st.stateMachineInputs('State Machine 1');
        const stw = inputs.find(i => i.name === 'state');
        document.getElementById("switch").addEventListener('click', (event) => {
            citys.value=stw.value;
        });
    }       
});

// 

let stations_fire;
let stations_relode;
const station = new rive.Rive({
    src: "space_station.riv",
    canvas: document.getElementById("space"),
    autoplay: true,
    stateMachines: "State Machine 1",
    fit: rive.Fit.cover,
    onLoad: () => {
        const inputs =station.stateMachineInputs('State Machine 1');
      
    }
});

    
  
