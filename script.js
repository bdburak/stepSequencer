
var song = [];
var songLength = 20;
var timing = 80;
song['a'] = [];
song['b'] = [];
song['c'] = [];
song['d'] = [];
song['e'] = [];
song['f'] = [];
song['g'] = [];


//fill song with 0's
for (let index = 0; index < songLength; index++) {
    song['a'].push(0);
    song['b'].push(0);
    song['c'].push(0);
    song['d'].push(0);
    song['e'].push(0);
    song['f'].push(0);
    song['g'].push(0);   
}

var noteIds = ['a','b','c','d','e','f','g']; 
noteIds.forEach(note => {
    for (let index = 0; index < songLength; index++) {
        var td = document.createElement("TD");
        td.setAttribute('id', `${note}${index}`);
        td.setAttribute('class','tiles');
        td.setAttribute('onclick',`clickNote('${note}','${index}')`);
        td.innerHTML=".";
        document.getElementById(`${note}`).appendChild(td);
        
    }
});

function updateTiming(){
    timing = document.getElementById('timing').value;
    document.getElementById('bpm').innerHTML = timing+' bpm';
    
    Tone.Transport.bpm.value = parseInt(timing);
    
}

const A = new Tone.Synth().toDestination();
const B = new Tone.Synth().toDestination();
const C = new Tone.Synth().toDestination();
const D = new Tone.Synth().toDestination();
const E = new Tone.Synth().toDestination();
const F = new Tone.Synth().toDestination();
const G = new Tone.Synth().toDestination();

const now = Tone.now();
function clickNote(note,index){    
    if (song[note][index] == 1){
        song[note][index] = 0;
        document.getElementById(note+index).style.background = '#C29D4E';
        document.getElementById(note+index).style.color = '#C29D4E';
    }
    else{
        song[note][index] = 1;
        document.getElementById(note+index).style.background = '#253E66';
        document.getElementById(note+index).style.color = '#253E66';
        switch (note) {
            case 'a':
                A.triggerAttackRelease(`A3`,'8n');
                break;
            case 'b':
                B.triggerAttackRelease(`B3`,'8n');
                break;
            case 'c':
                C.triggerAttackRelease(`C4`,'8n');
                break;
            case 'd':
                D.triggerAttackRelease(`D4`,'8n');
                break;
            case 'e':
                E.triggerAttackRelease(`E4`,'8n');
                break;
            case 'f':
                F.triggerAttackRelease(`F4`,'8n');
                break;
            case 'g':
                G.triggerAttackRelease(`G4`,'8n');
                break;
            
            default:
                break;
        }
    }
    
    
    
}

Tone.Transport.scheduleRepeat(repeat, '8n');

function play(){Tone.Transport.start();}
function stop(){Tone.Transport.stop();}
var index = 0;

var tiles = document.querySelectorAll('table tr .tiles');
function repeat(time){
    
    tiles.forEach(tile => {
        tile.style.borderRadius = '10px';
        if(song[tile.id[0]][tile.id.slice(1)]){
            tile.style.background = "#253E66";
            tile.style.color = "#253E66";
        }
        else{
            tile.style.background = "#C29D4E";
            tile.style.color = "#C29D4E";
        }
    });

    var step = (index % songLength);
    if (song['a'][step] == 1) A.triggerAttackRelease(`A3`,'8n',time);
    if (song['b'][step] == 1) B.triggerAttackRelease(`B3`,'8n',time);
    if (song['c'][step] == 1) C.triggerAttackRelease(`C4`,'8n',time);
    if (song['d'][step] == 1) D.triggerAttackRelease(`D4`,'8n',time);
    if (song['e'][step] == 1) E.triggerAttackRelease(`E4`,'8n',time);
    if (song['f'][step] == 1) F.triggerAttackRelease(`F4`,'8n',time);
    if (song['g'][step] == 1) G.triggerAttackRelease(`G4`,'8n',time);
    index++;

    document.getElementById("a"+step).style.background = '#253E66';
    document.getElementById("b"+step).style.background = '#253E66';
    document.getElementById("c"+step).style.background = '#253E66';
    document.getElementById("d"+step).style.background = '#253E66';
    document.getElementById("e"+step).style.background = '#253E66';
    document.getElementById("f"+step).style.background = '#253E66';
    document.getElementById("g"+step).style.background = '#253E66';
    
    document.getElementById("a"+step).style.color = '#253E66';
    document.getElementById("b"+step).style.color = '#253E66';
    document.getElementById("c"+step).style.color = '#253E66';
    document.getElementById("d"+step).style.color = '#253E66';
    document.getElementById("e"+step).style.color = '#253E66';
    document.getElementById("f"+step).style.color = '#253E66';
    document.getElementById("g"+step).style.color = '#253E66';

    document.getElementById("a"+step).style.borderRadius = '15px';
    document.getElementById("b"+step).style.borderRadius = '15px';
    document.getElementById("c"+step).style.borderRadius = '15px';
    document.getElementById("d"+step).style.borderRadius = '15px';
    document.getElementById("e"+step).style.borderRadius = '15px';
    document.getElementById("f"+step).style.borderRadius = '15px';
    document.getElementById("g"+step).style.borderRadius = '15px';
    
    
}

