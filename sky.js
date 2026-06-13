/* ============================================================
   NIGHT-SKY ENGINE — starfield + scroll-drawn constellations
   Each page chooses its constellation via:
       <body data-constellation="orion">
   Available: orion, virgo, scorpius, taurus, sagittarius
   Star positions come from real J2000 coordinates; sizes from
   real magnitudes; colours from real spectral types.
   You normally do NOT need to edit this file.
   ============================================================ */

(function(){
"use strict";

/* ---------------- CONSTELLATION DATA ---------------- */
/* m = apparent magnitude (smaller = brighter), c = colour    */

const DATA = {

orion: {
  aspect: 0.68,
  name: {t:"ORION", x:0.50, y:1.10},
  stars: [
    {x:0.204,y:0.430,m:0.50,c:"#FF9E6B",label:{t:"Betelgeuse",dx:-10,dy:4,anchor:"end"}},
    {x:0.570,y:0.465,m:1.64,c:"#A8C0FF",label:{t:"Bellatrix",dx:10,dy:4,anchor:"start"}},
    {x:0.448,y:0.346,m:3.33,c:"#9FB8FF"},
    {x:0.380,y:0.742,m:1.77,c:"#A4BCFF"},
    {x:0.435,y:0.717,m:1.69,c:"#B0C4FF",label:{t:"\u201COrion\u2019s Belt\u201D",dx:-14,dy:-12,anchor:"end",italic:true}},
    {x:0.486,y:0.687,m:2.23,c:"#A8BFFF"},
    {x:0.294,y:1.000,m:2.09,c:"#ACC2FF",label:{t:"Saiph",dx:0,dy:18,anchor:"middle"}},
    {x:0.699,y:0.951,m:0.13,c:"#AFC6FF",label:{t:"Rigel",dx:12,dy:4,anchor:"start"}},
    {x:0.116,y:0.355,m:4.12,c:"#E8ECF5"},
    {x:0.053,y:0.184,m:4.42,c:"#C2D2FF"},
    {x:0.000,y:0.203,m:4.48,c:"#C2D2FF"},
    {x:0.213,y:0.000,m:4.39,c:"#FFE9C4"},
    {x:0.097,y:0.005,m:4.65,c:"#B8CCFF"},
    {x:0.939,y:0.338,m:4.74,c:"#E6EAF6"},
    {x:0.991,y:0.380,m:4.35,c:"#E6EAF6"},
    {x:1.000,y:0.445,m:3.16,c:"#FFF3D6"},
    {x:0.983,y:0.490,m:3.68,c:"#B5CAFF"},
    {x:0.946,y:0.595,m:3.71,c:"#B5CAFF"},
    {x:0.894,y:0.620,m:4.45,c:"#FFC58F"}
  ],
  edges: [[9,11],[10,12],[8,9],[8,10],[13,14],[2,0],[0,8],[2,1],[14,15],[1,15],[15,16],[16,17],[1,5],[0,3],[17,18],[4,5],[3,4],[5,7],[3,6],[6,7]],
  clusters: [{x:0.446,y:0.857,type:"nebula",rgb:"255,150,160",label:"Orion Nebula (M42)"}],
  freeLabels: []
},

virgo: {
  aspect: 1.90,
  name: {t:"VIRGO", x:0.50, y:1.16},
  stars: [
    {x:0.593,y:0.000,m:2.83,c:"#FFE9C4",label:{t:"Vindemiatrix",dx:10,dy:-6,anchor:"start"}},
    {x:0.630,y:0.342,m:3.38,c:"#FFA77A"},
    {x:0.709,y:0.561,m:2.74,c:"#F2F2EE",label:{t:"Porrima",dx:10,dy:14,anchor:"start"}},
    {x:0.833,y:0.526,m:3.89,c:"#E8ECF5"},
    {x:1.000,y:0.416,m:3.60,c:"#FFF3D6"},
    {x:0.548,y:0.746,m:4.38,c:"#E8ECF5"},
    {x:0.462,y:1.000,m:0.97,c:"#AFC6FF",label:{t:"Spica",dx:0,dy:18,anchor:"middle"}},
    {x:0.408,y:0.523,m:3.37,c:"#E8ECF5"},
    {x:0.254,y:0.426,m:4.26,c:"#E8ECF5"},
    {x:0.000,y:0.410,m:3.73,c:"#E8ECF5"},
    {x:0.172,y:0.767,m:4.08,c:"#FFF3D6",label:{t:"Syrma",dx:0,dy:18,anchor:"middle"}},
    {x:0.018,y:0.751,m:3.88,c:"#FFF3D6"}
  ],
  edges: [[0,1],[1,2],[2,3],[3,4],[2,5],[5,6],[1,7],[7,8],[8,9],[7,10],[10,11]],
  clusters: [],
  freeLabels: []
},

scorpius: {
  aspect: 1.00,
  name: {t:"SCORPIUS", x:0.55, y:1.10},
  stars: [
    {x:0.863,y:0.000,m:4.00,c:"#B8CCFF"},
    {x:0.923,y:0.015,m:2.62,c:"#A8C0FF"},
    {x:0.969,y:0.133,m:2.29,c:"#A4BCFF"},
    {x:0.982,y:0.280,m:2.89,c:"#A8C0FF"},
    {x:1.000,y:0.410,m:3.87,c:"#B8CCFF"},
    {x:0.780,y:0.258,m:2.88,c:"#A8C0FF"},
    {x:0.706,y:0.293,m:0.96,c:"#FF9E6B",label:{t:"Antares",dx:-12,dy:-4,anchor:"end"}},
    {x:0.648,y:0.368,m:2.82,c:"#A4BCFF"},
    {x:0.519,y:0.624,m:2.29,c:"#FFC58F"},
    {x:0.503,y:0.782,m:3.00,c:"#A8C0FF"},
    {x:0.479,y:0.963,m:3.59,c:"#FFC58F"},
    {x:0.320,y:1.000,m:3.33,c:"#FFF3D6"},
    {x:0.093,y:0.990,m:1.86,c:"#F2F2EE"},
    {x:0.000,y:0.869,m:2.99,c:"#FFF3D6"},
    {x:0.046,y:0.823,m:2.39,c:"#A4BCFF"},
    {x:0.126,y:0.742,m:1.62,c:"#A8C0FF",label:{t:"Shaula",dx:-12,dy:0,anchor:"end"}},
    {x:0.152,y:0.750,m:2.70,c:"#A8C0FF",label:{t:"Lesath",dx:12,dy:0,anchor:"start"}}
  ],
  edges: [[0,1],[1,2],[2,3],[3,4],[2,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16]],
  clusters: [{x:0.759,y:0.297,type:"cluster",rgb:"235,235,245",label:"M4"}],
  freeLabels: []
},

taurus: {
  aspect: 1.55,
  name: {t:"TAURUS", x:0.50, y:1.16},
  stars: [
    {x:0.086,y:0.000,m:1.65,c:"#B0C4FF",label:{t:"Elnath",dx:-12,dy:-4,anchor:"end"}},
    {x:0.520,y:0.482,m:3.53,c:"#FFD9A0"},
    {x:0.562,y:0.565,m:3.77,c:"#FFD9A0"},
    {x:0.586,y:0.663,m:3.65,c:"#FFD9A0"},
    {x:0.519,y:0.651,m:3.40,c:"#E8ECF5"},
    {x:0.465,y:0.618,m:0.86,c:"#FFB07A",label:{t:"Aldebaran",dx:-12,dy:4,anchor:"end"}},
    {x:0.000,y:0.381,m:3.00,c:"#B0C4FF"},
    {x:0.730,y:0.823,m:3.47,c:"#B0C4FF"},
    {x:0.982,y:0.964,m:3.74,c:"#B0C4FF"},
    {x:1.000,y:1.000,m:3.60,c:"#FFE9C4"}
  ],
  edges: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[3,7],[7,8],[8,9]],
  clusters: [{x:0.830,y:0.229,type:"cluster",rgb:"191,212,255",label:"\u201CThe Pleiades\u201D"}],
  freeLabels: [{x:0.64,y:0.80,t:"\u201CThe Hyades\u201D",italic:true}]
},

sagittarius: {
  aspect: 0.72,
  name: {t:"SAGITTARIUS", x:0.50, y:1.10},
  stars: [
    {x:0.181,y:0.000,m:2.88,c:"#FFF3D6"},
    {x:0.898,y:0.002,m:3.85,c:"#B0C4FF"},
    {x:0.716,y:0.185,m:2.81,c:"#FFC58F"},
    {x:0.366,y:0.222,m:2.05,c:"#A8C0FF",label:{t:"Nunki",dx:0,dy:-12,anchor:"middle"}},
    {x:0.489,y:0.251,m:3.17,c:"#B0C4FF"},
    {x:0.217,y:0.280,m:3.32,c:"#FFC58F"},
    {x:0.273,y:0.373,m:2.60,c:"#E8ECF5",label:{t:"Ascella",dx:0,dy:18,anchor:"middle"}},
    {x:0.805,y:0.370,m:2.70,c:"#FFC58F"},
    {x:1.000,y:0.395,m:2.99,c:"#FFC58F",label:{t:"Alnasl",dx:-10,dy:14,anchor:"end"}},
    {x:0.765,y:0.562,m:1.85,c:"#B0C4FF",label:{t:"Kaus Australis",dx:12,dy:8,anchor:"start"}},
    {x:0.848,y:0.662,m:3.10,c:"#FF9E6B"},
    {x:0.000,y:0.824,m:3.97,c:"#B0C4FF",label:{t:"Rukbat",dx:12,dy:0,anchor:"start"}},
    {x:0.016,y:0.986,m:4.01,c:"#B0C4FF"},
    {x:0.009,y:1.000,m:4.29,c:"#FFF3D6"}
  ],
  edges: [[8,7],[8,9],[7,9],[9,6],[6,4],[4,7],[7,2],[2,4],[4,3],[3,5],[5,6],[2,1],[3,0],[9,10],[6,11],[11,12],[12,13]],
  clusters: [],
  freeLabels: []
}
};

/* ---------------- ENGINE ---------------- */

const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const key = document.body.dataset.constellation || "orion";
const C = DATA[key] || DATA.orion;

/* sort edges so the figure connects from top to bottom while scrolling */
C.edges.sort((e1,e2)=>{
  const y1=(C.stars[e1[0]].y+C.stars[e1[1]].y)/2;
  const y2=(C.stars[e2[0]].y+C.stars[e2[1]].y)/2;
  return y1-y2;
});

const bg=document.getElementById("bg");
if(!bg)return;
const x=bg.getContext("2d");
let W,H,layers=[],pts=[],clus=[],frees=[],namePos={},labelAlpha=0,dim=1;

function magToR(m){return Math.max(0.9, 3.7-0.58*m);}

function size(){
  W=bg.width=innerWidth; H=bg.height=innerHeight;
  layers=[0.10,0.24,0.45].map((sp,i)=>({
    speed:sp,
    stars:Array.from({length:75-i*18},()=>({
      x:Math.random()*W, y:Math.random()*H*2.2,
      r:0.4+Math.random()*(0.6+i*0.5),
      a:0.15+i*0.15+Math.random()*0.18,
      p:Math.random()*Math.PI*2
    }))
  }));
  /* fit the constellation box: right side on wide screens, centred on phones */
  const maxW = W>1100 ? W*0.50 : (W>760 ? W*0.55 : W*0.86);
  const maxH = H*0.74;
  let w=Math.min(maxW, maxH*C.aspect), h=w/C.aspect;
  let ox = W>760 ? (W-w-Math.min(80,W*0.04)) : (W-w)/2;
  let oy = (H-h)/2 - H*0.02;
  pts=C.stars.map(s=>({...s, px:ox+s.x*w, py:oy+s.y*h, r:magToR(s.m)}));
  clus=C.clusters.map(c=>({...c, px:ox+c.x*w, py:oy+c.y*h}));
  frees=C.freeLabels.map(f=>({...f, px:ox+f.x*w, py:oy+f.y*h}));
  namePos={px:ox+C.name.x*w, py:oy+C.name.y*h};
  const contentRight=(W+740)/2;
  dim = W<=760 ? 0.40 : (ox<contentRight ? 0.55 : 1);
}
size(); addEventListener("resize",size);

function progress(){
  const max=document.documentElement.scrollHeight-innerHeight;
  if(max<=60) return 1;             /* short pages: show the figure complete */
  return Math.min(1, scrollY/max);
}

/* small fixed offsets for cluster dots */
const SPARK=[[-2,-1],[2,1],[0,-3],[-1,3],[3,-2],[-3,1],[1,2]];

function draw(t){
  x.clearRect(0,0,W,H);
  const p=reduced?1:progress();
  const complete=p>0.985;
  const pulse=complete?(0.7+0.3*Math.sin(t*0.003)):0;

  /* parallax starfield */
  for(const L of layers){
    const off=(scrollY*L.speed)%(H*2.2);
    for(const s of L.stars){
      let sy=s.y-off; if(sy<-10)sy+=H*2.2;
      if(sy>H+10)continue;
      const tw=0.75+0.25*Math.sin(t*0.0012+s.p);
      x.fillStyle=`rgba(237,237,234,${s.a*tw})`;
      x.beginPath();x.arc(s.x,sy,s.r,0,7);x.fill();
    }
  }

  /* nebulae / clusters */
  for(const c of clus){
    if(c.type==="nebula"){
      const a=(complete?0.55:0.32)*dim;
      const g=x.createRadialGradient(c.px,c.py,0,c.px,c.py,14);
      g.addColorStop(0,`rgba(${c.rgb},${a})`);
      g.addColorStop(0.5,`rgba(${c.rgb},${a*0.4})`);
      g.addColorStop(1,`rgba(${c.rgb},0)`);
      x.fillStyle=g;x.beginPath();x.arc(c.px,c.py,14,0,7);x.fill();
    }
    x.fillStyle=`rgba(${c.rgb},${0.6*dim})`;
    for(const [dx,dy] of SPARK){
      x.beginPath();x.arc(c.px+dx*1.4,c.py+dy*1.4,0.7,0,7);x.fill();
    }
  }

  /* edges connect with scroll */
  const drawn=p*C.edges.length;
  for(let i=0;i<C.edges.length;i++){
    const frac=Math.max(0,Math.min(1,drawn-i));
    if(frac<=0)break;
    const a=pts[C.edges[i][0]], b=pts[C.edges[i][1]];
    const mx=a.px+(b.px-a.px)*frac, my=a.py+(b.py-a.py)*frac;
    if(complete){
      x.strokeStyle=`rgba(217,164,65,${(0.45+0.3*pulse)*dim})`;
      x.shadowColor="rgba(217,164,65,.8)";x.shadowBlur=8+6*pulse;
    }else{
      x.strokeStyle=`rgba(237,237,234,${0.26*dim})`;x.shadowBlur=0;
    }
    x.lineWidth=1;
    x.beginPath();x.moveTo(a.px,a.py);x.lineTo(mx,my);x.stroke();
    x.shadowBlur=0;
  }

  /* constellation stars: always visible, true colours and brightness */
  for(let i=0;i<pts.length;i++){
    const s=pts[i];
    const tw=0.85+0.15*Math.sin(t*0.0015+i*1.7);
    x.shadowColor=complete?"rgba(217,164,65,.9)":s.c;
    x.shadowBlur=complete?(10+6*pulse):(4+s.r*1.5);
    x.fillStyle=s.c;
    x.globalAlpha=dim*tw;
    x.beginPath();x.arc(s.px,s.py,s.r*(complete?1.2:1),0,7);x.fill();
    x.globalAlpha=1;x.shadowBlur=0;
  }

  /* labels + constellation name: fade in when complete */
  labelAlpha += ((complete?1:0)-labelAlpha)*0.04;
  if(labelAlpha>0.01){
    x.textBaseline="middle";
    for(const s of pts){
      if(!s.label)continue;
      const L=s.label;
      x.font=(L.italic?"italic ":"")+'12px "Source Sans 3", sans-serif';
      x.textAlign=L.anchor==="end"?"right":(L.anchor==="middle"?"center":"left");
      x.fillStyle=`rgba(237,237,234,${0.55*labelAlpha*dim})`;
      x.fillText(L.t, s.px+L.dx, s.py+L.dy);
    }
    for(const c of clus){
      x.font='12px "Source Sans 3", sans-serif';
      x.textAlign="center";
      x.fillStyle=`rgba(${c.rgb},${0.6*labelAlpha*dim})`;
      x.fillText(c.label, c.px, c.py+22);
    }
    for(const f of frees){
      x.font='italic 12px "Source Sans 3", sans-serif';
      x.textAlign="center";
      x.fillStyle=`rgba(237,237,234,${0.5*labelAlpha*dim})`;
      x.fillText(f.t, f.px, f.py);
    }
    /* big constellation name */
    x.font='600 15px "Source Sans 3", sans-serif';
    x.textAlign="center";
    x.fillStyle=`rgba(242,222,169,${0.6*labelAlpha*dim})`;
    x.fillText(C.name.t.split("").join("\u2009\u2009"), namePos.px, namePos.py);
  }
  requestAnimationFrame(draw);
}
requestAnimationFrame(draw);

/* progress bar */
const prog=document.getElementById("prog");
if(prog)addEventListener("scroll",()=>{prog.style.width=(progress()*100)+"%"},{passive:true});

/* scroll-reveal sections */
const io=new IntersectionObserver(es=>{
  for(const e of es)if(e.isIntersecting)e.target.classList.add("in");
},{threshold:0.15});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));

})();
