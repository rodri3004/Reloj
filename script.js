const Reloj = ()=> {
    let actualizarHora = ()=> {
        let now = new Date(),   
        dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";

        let pDayName = document.getElementById('dayname'),
            pMonth = document.getElementById('month'),
            pDayNum = document.getElementById('daynum'),
            pYear = document.getElementById('year'),
            pHour = document.getElementById('hour'),
            pMinutes = document.getElementById('minutes'),
            pSeconds = document.getElementById('seconds'),
            pPeriod = document.getElementById('period');

        let week = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
        pDayName.textContent = week[dname];

        pDayNum.textContent = dnum; 

        let months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
        pMonth.textContent = months[mo];

        pYear.textContent = yr; 

        if(hou === 0){
            hou = 12;
        }
        if(hou > 12){
            hou = hou - 12;
            pe = "PM";
        }

        if(hou < 10){ hou = "0" + hou};
        if(min < 10){ min = "0" + min};
        if(sec < 10){ sec = "0" + sec};
        pHour.textContent = hou;
        pMinutes.textContent = min;
        pSeconds.textContent = sec;
        pPeriod.textContent = pe;

    };
    actualizarHora();
    let interval = setInterval(actualizarHora, 1000);
}

Reloj();