class Heart extends mojs.CustomShape {
    getShape() { return '<path d="M92.5939814,7.35914503 C82.6692916,-2.45304834 66.6322927,-2.45304834 56.7076029,7.35914503 L52.3452392,11.6965095 C51.0327802,12.9714696 48.9328458,12.9839693 47.6203869,11.6715103 L47.6203869,11.6715103 L43.2705228,7.35914503 C33.3833318,-2.45304834 17.3213337,-2.45304834 7.43414268,7.35914503 C-2.47804756,17.1963376 -2.47804756,33.12084 7.43414268,42.9205337 L29.7959439,65.11984 C29.7959439,65.1323396 29.8084435,65.1323396 29.8084435,65.1448392 L43.2580232,78.4819224 C46.9704072,82.1818068 52.9952189,82.1818068 56.7076029,78.4819224 L70.1696822,65.1448392 C70.1696822,65.1448392 70.1696822,65.1323396 70.1821818,65.1323396 L92.5939814,42.9205337 C102.468673,33.12084 102.468673,17.1963376 92.5939814,7.35914503 L92.5939814,7.35914503 Z"></path>'; }
}
mojs.addShape('heart', Heart);

const burst = new mojs.Burst({
    radius: { 0: 200 },
    count: 20,
    children: {
        shape: 'heart',
        fill: { 'pink': 'deeppink' },
        stroke: { 'pink': 'deeppink' },
        strokeWidth: 10,
        duration: 2000,
        delay: 'stagger(0, 100)',
        repeat: 999,
        easing: 'cubic.out',
        isYoyo: true
    }
}).play();

const heart = new mojs.Shape({
    shape: 'heart',
    fill: 'deeppink',
    stroke: { 'deeppink': 'deeppink' },
    scale: { 0.5: 1.2 },
    strokeWidth: { 5: 6 },
    duration: 2000,
    delay: 1000,
    easing: 'cubic.out',
    repeat: 999,
    isYoyo: true
}).play();


const clickBurst = new mojs.Burst({
    left: 0, top: 0,
    radius: { 4: 100 },
    count: 20,
    shape: 'heart',
    children: {
        shape: 'heart',
        fill: [{ '#9EC9F5': '#9ED8C6' },
        { '#91D3F7': '#9AE4CF' },

        { '#DC93CF': '#E3D36B' },
        { '#CF8EEF': '#CBEB98' },

        { '#87E9C6': '#1FCC93' },
        { '#A7ECD0': '#9AE4CF' },

        { '#87E9C6': '#A635D9' },
        { '#D58EB3': '#E0B6F5' },

        { '#F48BA2': '#CF8EEF' },
        { '#91D3F7': '#A635D9' },

        { '#CF8EEF': '#CBEB98' },
        { '#87E9C6': '#A635D9' }],
        scale: { 2: 0, easing: 'cubic.out' },
        pathScale: [.8, null],
        degreeShift: [13, null],
        duration: [1000, 1500],
        strokeWidth: 50,
        easing: 'cubic.out'

    }
});

const clickheart = new mojs.Shape({
    left: 0, top: 0,
    shape: 'heart',
    fill: 'deeppink',
    scale: { 0.5: 0, easing: 'cubic.out' },
    duration: 1000,
    strokeWidth: 50,
    easing: 'cubic.out',
    delay: 'stagger(0, 100)'
});


// document.addEventListener('click', (e) => {
//     const coords = { x: e.pageX, y: e.pageY };
//     clickBurst
//         .tune(coords)
//         .replay();

//     clickheart
//         .tune(coords)
//         .replay()
// });


setInterval(function () {
    const coords = { x: Math.floor(Math.random() * (window.innerWidth)) + 10, y: Math.floor(Math.random() * 300) + 10 };
    clickBurst
        .tune(coords)
        .replay();

    clickheart
        .tune(coords)
        .replay()

}, 1500)

setInterval(function () {
    const coords = { x: Math.floor(Math.random() * window.innerWidth) + 10, y: Math.floor(Math.random() * 300) + 10 };
    clickBurst
        .tune(coords)
        .replay();

    clickheart
        .tune(coords)
        .replay()

}, 1500)

setInterval(function () {
    const coords = { x: Math.floor(Math.random() * window.innerWidth) + 10, y: Math.floor(Math.random() * 300) + 10 };
    clickBurst
        .tune(coords)
        .replay();

    clickheart
        .tune(coords)
        .replay()

}, 1500)


setInterval(function () {
    const coords = { x: Math.floor(Math.random() * window.innerWidth) + 10, y: Math.floor(Math.random() * 300) + 10 };
    clickBurst
        .tune(coords)
        .replay();

    clickheart
        .tune(coords)
        .replay()

}, 2500)

setInterval(function () {
    const coords = { x: Math.floor(Math.random() * window.innerWidth) + 10, y: Math.floor(Math.random() * 300) + 10 };
    clickBurst
        .tune(coords)
        .replay();

    clickheart
        .tune(coords)
        .replay()

}, 2500)


setInterval(function () {
    const coords = { x: Math.floor(Math.random() * window.innerWidth) + 10, y: Math.floor(Math.random() * 300) + 10 };
    clickBurst
        .tune(coords)
        .replay();

    clickheart
        .tune(coords)
        .replay()

}, 3500)

setInterval(function () {
    const coords = { x: Math.floor(Math.random() * window.innerWidth) + 10, y: Math.floor(Math.random() * 300) + 10 };
    clickBurst
        .tune(coords)
        .replay();

    clickheart
        .tune(coords)
        .replay()

}, 3500)
setInterval(function () {
    const coords = { x: Math.floor(Math.random() * window.innerWidth) + 10, y: Math.floor(Math.random() * 300) + 10 };
    clickBurst
        .tune(coords)
        .replay();

    clickheart
        .tune(coords)
        .replay()

}, 3500)


const BUST_OPTS = {
    count: 'rand(5,10)',
    degree: 10,
    angle: -5,
    radius: { 80: 100 },
    children: {
        shape: 'heart',
        fill: 'red',
        radius: 'rand(5, 10)',
        pathScale: ['rand(20, 50)', 'rand(0, 0)'],
        degreeShift: 'rand(400, 500)',
        swirlFrequency: 'rand(0, 1)',
        direction: [5, -1000],
        isSwirl: true,
        duration: 50000,
        easing: 'cubic.out',
        isForce3d: true,
        repeat: 999
    }
}

const burst0 = new mojs.Burst({
    ...BUST_OPTS,
    left: -120,
    top: 0,
    y: { 0: 0 }
});

const burst1 = new mojs.Burst({
    ...BUST_OPTS,
    left: -120,
    top: 50,
    y: { 0: 0 }
});

const burst2 = new mojs.Burst({
    ...BUST_OPTS,
    left: -120,
    top: 100,
    y: { 0: 0 }
});

const burst3 = new mojs.Burst({
    ...BUST_OPTS,
    left: -120,
    top: 150,
    y: { 0: 0 }
});

const burst4 = new mojs.Burst({
    ...BUST_OPTS,
    left: -120,
    top: 200,
    y: { 0: 0 }
});

const burst5 = new mojs.Burst({
    ...BUST_OPTS,
    left: -120,
    top: 250,
    y: { 0: 0 }
});


const burst6 = new mojs.Burst({
    ...BUST_OPTS,
    left: -120,
    top: 300,
    y: { 0: 0 }
});

const burst7 = new mojs.Burst({
    ...BUST_OPTS,
    left: -120,
    top: 350,
    y: { 0: 0 }
});

const burst8 = new mojs.Burst({
    ...BUST_OPTS,
    left: -120,
    top: 400,
    y: { 0: 0 }
});

const burst9 = new mojs.Burst({
    ...BUST_OPTS,
    left: -120,
    top: 450,
    y: { 0: 0 }
});

const burst10 = new mojs.Burst({
    ...BUST_OPTS,
    left: -120,
    top: 500,
    y: { 0: 0 }
});

const burst11 = new mojs.Burst({
    ...BUST_OPTS,
    left: -120,
    top: 550,
    y: { 0: 0 }
});


const burst12 = new mojs.Burst({
    ...BUST_OPTS,
    left: -120,
    top: 600,
    y: { 0: 0 }
});

const burst13 = new mojs.Burst({
    ...BUST_OPTS,
    left: -120,
    top: 650,
    y: { 0: 0 }
});


const burst14 = new mojs.Burst({
    ...BUST_OPTS,
    left: -120,
    top: 700,
    y: { 0: 0 }
});


const burst15 = new mojs.Burst({
    ...BUST_OPTS,
    left: -120,
    top: 750,
    y: { 0: 0 }
});

const burst16 = new mojs.Burst({
    ...BUST_OPTS,
    left: -120,
    top: 800,
    y: { 0: 0 }
});

const burst17 = new mojs.Burst({
    ...BUST_OPTS,
    left: -120,
    top: 850,
    y: { 0: 0 }
});

const burst18 = new mojs.Burst({
    ...BUST_OPTS,
    left: -120,
    top: 900,
    y: { 0: 0 }
});


const burst19 = new mojs.Burst({
    ...BUST_OPTS,
    left: -120,
    top: 950,
    y: { 0: 0 }
});




// const timeline = new mojs.Timeline({ speed: .5 });
// timeline.add(burst0, burst1, burst2, burst3, burst4, burst5, burst6, burst7, burst8, burst9, burst10, burst11, burst12, burst13, burst14, burst15, burst16, burst17, burst18, burst19);

// timeline.play();



var calcNewYear = setInterval(function () {
    var date_future = new Date("06/05/2017");
    var date_now = new Date();

    var seconds = Math.floor((date_future - (date_now)) / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    hours = hours - (days * 24);
    minutes = minutes - (days * 24 * 60) - (hours * 60);
    seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);

    //var timeElemet = document.getElementById('timeleft');

    //$("#timeleft").text("Time until new year:\nDays: " + days + " Hours: " + hours + " Minutes: " + minutes + " Seconds: " + seconds);
    if (!days) {
        $("#dayBlock").hide();
    }
    if (!days && !hours) {
        $("#hrsBlock").hide();
    }

    if (!days && !hours && !minutes) {
        $("#minBlock").hide();
    }

    if (!days && !hours && !minutes && !seconds) {
        $("#secBlock").hide();
    }
    $("#timeleftDay").text(days);
    $("#timeleftHours").text(hours);
    $("#timeleftMin").text(minutes);
    $("#timeleftSecond").text(seconds);
}, 1000);





