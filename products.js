const products = [
{
  slug: "tuzdon",
  code: "24-60",
  title: "Tuz, murich, salfetka idish",
  price: 74000,
  images: { main: "images/qora tuzdon24-60.jpeg", hover: "images/metal tuzdon60-59.jpeg" },
 
  colors: [
  { name: "Kmushrang", hex: "#646464ff", image: "images/metal tuzdon60-59.jpeg" },
  { name: "Qora", hex: "#000000ff", image: "images/qora tuzdon24-60.jpeg" },
],         
  tags: ["kitchen","home"],
  bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
  stock: 2
},


{
  slug: "tuz don",
  code: "24-63",
  title: "Zravorlar uchun idish",
  price: 33500,
  images: { main: "images/3tuz.jpeg", hover: "images/tuz idish.jpeg" },
  sizes: ["kichik","ortancha","katta"],
  sizePrices: { kichik: 36000, ortancha: 39000, katta: 41000 },
  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
  stock: 2
},

{
  slug: "yog' idish",
  code: "24-91",
  title: "yog' idish",
  price: 46000,
  images: { main: "images/yog idish.jpeg", hover: "images/yog idish 2.jpeg" },
  sizes: ["cheti qayirilgan","cheti tekis"],
  sizePrices: { chetiqayirilgan: 46000, katta: 46000 },
colors: [
  { name: "qora", hex: "#111111ff", image: "images/yog idish.jpeg" },
   { name: "stalnoy", hex: "#c2c2c2ff", image: "images/yog idish.jpeg" },
],                        // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
  stock: 2
},
{
  slug: "Kartoshka free pishirgich",
  code: "24-46",
  title: "Kartoshka free pishirgich",
  price: 39000,
  images: { main: "images/free maker1.jpeg", hover: "images/free.jpeg" },
 
  colors: [
  { name: "qora", hex: "#111111ff", image: "images/free.jpeg" },
  { name: "pushti", hex: "#ff8888ff", image: "images/pushti.jpeg" },
],                    
  tags: ["kitchen","home"],
  bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
  stock: 2
},

{
  slug: "pyoz ezgich",
  code: "24-30",
  title: "Piyoz ezgich",
  price: 39000,
  images: { main: "images/piyoz ezgich.jpeg", hover: "images/piyoz.jpeg" },
 
  colors: [
  { name: "qora", hex: "#111111ff", image: "images/piyoz ezgich.jpeg" },
  { name: "sariq", hex: "#e6c803ff", image: "images/sariq p.jpeg" },
],                    // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
  stock: 2
},
{
  slug: "yong'oq ochkich ",
  code: "24-31",
  title: "yong'oq ochkich ",
  price: 49000,
  images: { main: "images/yongoq ochgich.jpeg", hover: "images/yongoq ochkich.jpeg" },
  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
  stock: 2
},

{
  slug: "artgich",
  code: "24-32",
  title: "Postlog' artgich",
  price: 26000,
  images: { main: "images/artadigan.jpeg", hover: "images/postlog'.jpeg" },

  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
  stock: 2
},

{
  slug: "postlog",
  code: "24-33",
  title: "Postlog' artgich",
  price: 26000,
  images: { main: "images/postlog.jpeg", hover: "images/kartoshkabn.jpeg" },

  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
  stock: 2
},

{
  slug: "piyoz ezgich1",
  code: "24-36",
  title: "Piyoz ezgich",
  price: 39000,
  images: { main: "images/qayirilgan.jpeg", hover: "images/pyoz..jpeg" },

  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
  stock: 2
},

{
  slug: "qirgich tegi qora",
  code: "24-27",
  title: "Sirlar uchun Qirgich",
  price: 39000,
  images: { main: "images/qirgich1.jpeg", hover: "images/qirgich.jpeg" },

  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
  stock: 2
},

{
  slug: "Qirgich temir",
  code: "24-25",
  title: "Qirgich",
  price: 39000,
  images: { main: "images/qirgich temr.jpeg", hover: "images/qirtem.jpeg" },
  
  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
  stock: 2
},

{
  slug: "Qirgich aylana",
  code: "24-7",
  title: "Aylanalik qirgich",
  price: 34000,
  images: { main: "images/ish.jpeg", hover: "images/dumolo.jpeg" },

  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
  stock: 4
},



{
  slug: "Quruq narsalar uchun idishlar",
  code: "24-5,4,6",
  title: "Quruq narsalar uchun idishlar",
  price: 49000,
  images: { main: "images/salt.jpeg", hover: "images/salt.jpeg" },
  sizes: ["kichik","orta","katta"],
  sizePrices: { kichik: 49000, orta: 54000, katta: 61000 },
  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
  stock: 4
},

{
  slug: "idishl",
  code: "2-77",
  title: "Quruq mahsulotlar uchun idish",
  price: 52000,
  images: { main: "images/3.jpeg", hover: "images/gapyo.jpeg" },

  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
  stock: 1
},

{
  slug: "puter",
  code: "2-76",
  title: "Quruq mahsulotlar uchun idish",
  price: 52000,
  images: { main: "images/ismail.jpeg", hover: "images/2.jpeg" },

  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
  stock: 2
},
 
  {
  slug: "egg",
  code: "2-74",
  title: "Tuhum qoyish uchun savat",
  price: 55000,
  images: { main: "images/ror.jpeg", hover: "images/2.jpg" },

  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
  stock: 2
},


{
  slug: "3",
  code: "2-70",
  title: "Sabzavotlar uchun idish",
  price: 59000,
  images: { main: "images/kok.jpeg", hover: "images/pp.jpeg" },

  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
  stock: 2
},

{
  slug: "50",
  code: "2-69",
  title: "Sabzavotlar uchun idish",
  price: 24000,
  images: { main: "images/toza.jpeg", hover: "images/joj.jpeg" },

  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
  stock: 2
},

{
  slug: "s",
  code: "2-65",
  title: "Karom va barglar yuvuchi idish",
  price: 39000,
  images: { main: "images/spin.jpeg", hover: "images/3.jpg" },

  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Zangga schidamli korpu", "Yuvish oson", "Yengil va mustahkam"],
  stock: 2
},


{
  slug: "shv",
  code: "2-64",
  title: "Shvabra",
  price: 41000,
  images: { main: "images/shvabr.jpeg", hover: "images/2shv.jpeg" },

  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
  stock: 2
},
{
  slug: "shvc",
  code: "2-59",
  title: "kiyimlar yuvish mashinasi",
  price: 41000,
  images: { main: "images/wosh.jpeg", hover: "images/wosh2.jpeg" },

  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
  stock: 2
},
{
  slug: "muz",
  code: "2-13,14",
  title: "Suv idish",
  price: 41000,
  images: { main: "images/freeze.jpeg", hover: "images/muzo.jpeg" },
  sizes: ["COLLA","FANTA",],
  sizePrices: { COLLA: 36000, FANTA: 39000 },
  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
  stock: 2
},
{
  slug: "yog'ff",
  code: "2-11,12",
  title: "Yog' dish",
  price: 41000,
  images: { main: "images/yogidish.jpeg", hover: "images/roto.jpeg",},
  sizes: ["kichik","Katta",],
  sizePrices: { kichik: 36000, Katta: 39000 },
  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
  stock: 2
},

{
  slug: "yoff",
  code: "2-8",
  title: "Don mahsulotlari uchun kontenier",
  price: 41000,
  images: { main: "images/don mahsulotlari uchun kontenir.jpeg", hover: "images/uouo.jpeg",},
  
  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
  stock: 2
},

{
  slug: "non",
  code: "2-4",
  title: "Nonlarni qoyish uchun idish",
  price: 41000,
  images: { main: "images/non.jpeg", hover: "images/non2.jpeg",},
  
  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
  stock: 2
},




{
  slug: "non o",
  code: "2-3",
  title: "Nonlarni qoyish uchun dumoloq idish",
  price: 41000,
  images: { main: "images/domolo1.jpeg", hover: "images/dumolo2.jpeg",},
  
  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
  stock: 2
},

{
  slug: "qurt",
  code: "4-41,42",
  title: "Quruq mahsulotlar uchun idish",
  price: 41000,
  images: { main: "images/qurt1.jpeg", hover: "images/big.jpeg",},
   sizes: ["Katta","Kichik",],
  sizePrices: { Katta: 36000, Kichigi: 39000 },
  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Zangga chidamli korpus", "Kattasi 30sm, kichigi 25sm", "Yengil va mustahkam"],
  stock: 2
},

{
  slug: "krush",
  code: "4-40",
  title: "Chashka ilgich",
  price: 41000,
  images: { main: "images/kursh1.jpeg", hover: "images/krush.jpeg",},
 
  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Natural tahtali korpus", "5ta chaska ilsa boladi", "Yengil va mustahkam"],
  stock: 2
},

{
  slug: "salfet",
  code: "4-39",
  title: "Salfetka tutgich",
  price: 41000,
  images: { main: "images/salfet1.jpeg", hover: "images/salfet2.jpeg",},
 
  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Natural tahtali korpus", "5ta chaska ilsa boladi", "Yengil va mustahkam"],
  stock: 2
},

{
  slug: "hleb",
  code: "4-32",
  title: "Nonlar uchun idish",
  price: 41000,
  images: { main: "images/hleb1.jpeg", hover: "images/hleb2.jpeg",},
 
  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Natural tahtali korpus", "5ta chaska ilsa boladi", "Yengil va mustahkam"],
  stock: 2
},




 { slug: "cup",
  code: "4-18",
  title: "Yog'och chaskalar",
  price: 41000,
  images: { main: "images/cup1.jpeg", hover: "images/cup2.jpeg",},
 
  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Natural tahtali korpus", "5ta chaska ilsa boladi", "Yengil va mustahkam"],
  stock: 2
},


 { slug: "zirvor",
  code: "4-17",
  title: "Yog'och chaskalar",
  price: 41000,
  images: { main: "images/cups1.jpeg", hover: "images/cups2.jpeg",},
 
  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Natural tahtali korpus", "5ta chaska ilsa boladi", "Yengil va mustahkam"],
  stock: 2
},



 { slug: "bowl",
  code: "4-16",
  title: "Yog'och kosa",
  price: 41000,
  images: { main: "images/bowl1.jpeg", hover: "images/bowl.jpeg",},
 
  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Natural tahtali korpus", "5ta chaska ilsa boladi", "Yengil va mustahkam"],
  stock: 2
},



 { slug: "tahta",
  code: "4-9",
  title: "Nabor tahtakach",
  price: 41000,
  images: { main: "images/tahtakach1.jpeg", hover: "images/tahtakach.jpeg",},
 
  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Natural tahtali korpus", "3ta tahtakach bitada", "Yengil va mustahkam"],
  stock: 2
},

 { slug: "tahtakacok",
  code: "4-6,7,8",
  title: "Tahtakach",
  price: 41000,
  images: { main: "images/small.jpeg", hover: "images/tahta1.jpg",},
   sizes: ["Katta","Ortancha","kichik"],
  sizePrices: { Katta: 46000,Ortancha: 60000, kichik: 46000 },
  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Natural tahtali korpus", "", "Yengil va mustahkam"],
  stock: 2
},
 

 { slug: "6,1",
  badge : "yangi",
  code: "7-13",
  title: "Pishiriqlar uchun qolip",
  price: 41000,
  images: { main: "images/6:1.jpeg", hover: "images/6:1 2.jpeg",},
  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["6tasi bita", "Zangga chidamli korpus", "Yengil va mustahkam"],
  stock: 2
},

 { slug: "3,1",
  code: "14-3,4,5",
  title: "Pishiriqlar uchun qolip",
  price: 41000,
  images: { main: "images/cake1.jpeg", hover: "images/cake2.jpeg",},
   sizes: ["Katta","Ortancha","Kichik",],
  sizePrices: { Katta: 36000,Ortancha: 324234, Kichigi: 39000 },
  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Zangga schidamli korpu", "Zangga chidamli korpus", "Yengil va mustahkam"],
  stock: 2
},


 { slug: "tahatchak",
  code: "14-2",
  title: "rangli tahtakach",
  price: 41000,
  images: { main: "images/qizl1.jpeg", hover: "images/qizil2.jpeg",},
  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Zangga schidamli korpu", "Zangga chidamli korpus", "Yengil va mustahkam"],
  stock: 2
},

 { slug: "tahatchakkok",
  code: "14-1",
  title: "rangli tahtakach",
  price: 41000,
  images: { main: "images/kok1.jpeg", hover: "images/kok2.jpeg",},
  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Zangga schidamli korpu", "Zangga chidamli korpus", "Yengil va mustahkam"],
  stock: 2
},


{
  slug: "salat1",
  code: "12-7,6",
  title: "Salat tayorlash uchun temir idish",
  price: 41000,
  images: { main: "images/salat1.jpeg", hover: "images/size.jpeg" },
  sizes: ["Katta","Kichik",],
  sizePrices: { Katta: 36000, Kichik: 39000 },
  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
  stock: 2
},


{
  slug: "food",
  code: "12-4",
  title: "Ovqat solish uchun container",
  price: 41000,
  images: { main: "images/food 1.jpeg", hover: "images/food 2.jpeg" },

  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Hajmi 2 litr", "Yuvish oson", "Yengil va mustahkam"],
  stock: 2
},


{
  slug: "ovqat",
  code: "12-3",
  title: "Ovqat solish uchun container",
  price: 41000,
  images: { main: "images/ovqat1.jpeg", hover: "images/ovqat 2.jpeg" },

  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Hajmi 1,5 litr", "Yuvish oson", "Yengil va mustahkam"],
  stock: 2
},

{
  slug: "termiz",
  badge : "yangi",
  code: "9-22",
  title: "Choy va coffe uchun termiz",
  price: 41000,
  images: { main: "images/termiz1.jpeg", hover: "images/termiz2.jpeg" },
  colors: [
  { name: "Sariq", hex: "#fffa6dff", image: "images/termiz1.jpeg" },
   { name: "Ko'k", hex: "#04fcb6ff", image: "images/termiz1.jpeg" },
    { name: "Kulrang", hex: "#727272ff", image: "images/termiz1.jpeg" },
     { name: "Pushti", hex: "#e66969ff", image: "images/termiz1.jpeg" },
],                // <-- shu qator yetadi
  tags: ["kids","kids"],
  bullets: ["Hajmi 380 ml", "12 soat davomida issiq", "Yengil va mustahkam"],
  stock: 2
},

{
  slug: "termiz1",
  badge : "yangi",
  code: "9-21",
  title: "Choy va suv uchun termiz",
  price: 41000,
  images: { main: "images/sport termiz.jpeg", hover: "images/sport termiz1.jpeg" },
  colors: [
  { name: "Yashil", hex: "#006516ff", image: "images/sport termiz.jpeg" },
   { name: "Qizil", hex: "#fc0404ff", image: "images/sport termiz.jpeg" },
    { name: "Och yashil", hex: "#49a300ff", image: "images/sport termiz.jpeg" },
     { name: "Qora", hex: "#000000ff", image: "images/sport termiz.jpeg" },
],                // <-- shu qator yetadi
  tags: ["kids","kids"],
  bullets: ["Hajmi 680 ml", "12 soat davomida issiq", "Yengil va mustahkam"],
  stock: 2
},

{
  slug: "termiz2",
  badge : "yangi",
  code: "9-20",
  title: "Choy va suv uchun termiz",
  price: 41000,
  images: { main: "images/6 1.jpeg", hover: "images/6 2.jpeg" },
  colors: [
    { name: "Qora", hex: "#000000ff", image: "images/6 1.jpeg" },
    { name: "Qizil", hex: "#ff0000ff", image: "images/6 1.jpeg" },
  { name: "Yashil", hex: "#bcb000ff", image: "images/6 1.jpeg" },
   { name: "Ko'k", hex: "#0c00b1ff", image: "images/6 1.jpeg" },
    { name: "yashil", hex: "#49a300ff", image: "images/6 1.jpeg" },
     
],                // <-- shu qator yetadi
  tags: ["kids","kids"],
  bullets: ["Hajmi 500 ml", "12 soat davomida issiq", "Yengil va mustahkam"],
  stock: 2
},

{
  slug: "termiz3",
  badge : "yangi",
  code: "9-19",
  title: "Bolalar uchun termiz",
  price: 41000,
  images: { main: "images/4 ta1.jpeg", hover: "images/4 ta2.jpeg" },
  colors: [
    { name: "Ko'k", hex: "#003f6cff", image: "images/4 ta1.jpeg" },
  { name: "Sariq", hex: "#fffab4ff", image: "images/4 ta1.jpeg" },
   { name: "Och ko'k", hex: "#259596ff", image: "images/4 ta1.jpeg" },
    { name: "Pushti", hex: "#fe8c8cff", image: "images/4 ta1.jpeg" },
     
],                // <-- shu qator yetadi
  tags: ["kids","kids"],
  bullets: ["Hajmi 500 ml", "12 soat davomida issiq", "Yengil va mustahkam"],
  stock: 2
},

{
  slug: "termiz4",
  badge : "yangi",
  code: "9-18",
  title: "Bolalar uchun termiz",
  price: 41000,
  images: { main: "images/ter1.jpeg", hover: "images/ter2.jpeg" },
  colors: [
    { name: "Pushti", hex: "#fe8c8cff", image: "images/ter1.jpeg" },
    { name: "Sariq", hex: "#eafc72ff", image: "images/ter1.jpeg" },
  { name: "Qora", hex: "#000000ff", image: "images/ter1.jpeg" },
   { name: "Kul rang", hex: "#737373ff", image: "images/ter1.jpeg" },
    
     
],                // <-- shu qator yetadi
  tags: ["kids","kids"],
  bullets: ["Hajmi 500 ml", "12 soat davomida issiq", "Yengil va mustahkam"],
  stock: 2
},

{
  slug: "termiz5",
  badge : "yangi",
  code: "9-17",
  title: "Coffee va choy solib yurish uchun termiz",
  price: 41000,
  images: { main: "images/tmz1.jpeg", hover: "images/miz1.jpeg" },
  colors: [
    { name: "Qora", hex: "#000000ff", image: "images/tmz1.jpeg" },
    { name: "Oq", hex: "#fdffe8ff", image: "images/tmz1.jpeg" },
    { name: "Pushti", hex: "#ffc5ddff", image: "images/tmz1.jpeg" },
   { name: "Kul rang", hex: "#737373ff", image: "images/tmz1.jpeg" },
    
     
],                // <-- shu qator yetadi
  tags: ["kids","kids"],
  bullets: ["Hajmi 500 ml", "12 soat davomida issiq", "Yengil va mustahkam"],
  stock: 2
},


{
  slug: "termiz6",
  badge : "yangi",
  code: "9-16",
  title: "Coffee va choy solib yurish uchun termiz",
  price: 41000,
  images: { main: "images/mrz1.jpeg", hover: "images/mrz2.jpeg" },
  colors: [
     { name: "Pushti", hex: "#fb92beff", image: "images/mrz1.jpeg" },
     { name: "Kul rang", hex: "#737373ff", image: "images/mrz1.jpeg" },
    { name: "Yashil", hex: "#207a1bff", image: "images/mrz1.jpeg" },
    { name: "Oq", hex: "#f9ffb1ff", image: "images/mrz1.jpeg" },
   
   
    
     
],                // <-- shu qator yetadi
  tags: ["kids","kids"],
  bullets: ["Hajmi 500 ml", "12 soat davomida issiq", "Yengil va mustahkam"],
  stock: 2
},




{
  slug: "termiz7",
  badge : "yangi",
  code: "9-15",
  title: "Kosmanaftlik termiz",
  price: 41000,
  images: { main: "images/kosms1.jpeg", hover: "images/kosms2.jpeg" },
  colors: [
     { name: "Oq otirgan kosmanaft", hex: "#fafafaff", image: "images/kosms1.jpeg" },
     { name: "Qora chance", hex: "#000000ff", image: "images/kosms1.jpeg" },
    { name: "Oq turgan kosmanaft", hex: "#ffffffff", image: "images/kosms1.jpeg" },
    { name: "Qora Let's go ", hex: "#000000ff", image: "images/kosms1.jpeg" },
   
   
    
     
],                // <-- shu qator yetadi
  tags: ["kids","kids"],
  bullets: ["Hajmi 500 ml", "12 soat davomida issiq", "Yengil va mustahkam"],
  stock: 2
},




{
  slug: "termiz8",
  badge : "yangi",
  code: "9-14",
  title: "Kosmanaftlik termiz",
  price: 41000,
  images: { main: "images/happy2.jpeg", hover: "images/happy1.jpeg" },
  colors: [
     { name: "Yashil", hex: "#6fae6cff", image: "images/happy2.jpeg" },
     { name: "Pushti", hex: "#fb92beff", image: "images/happy2.jpeg" },
     { name: "Och sariq", hex: "#fcfaa3ff", image: "images/happy2.jpeg" },
    { name: "Qaymoq rang", hex: "#efe939ff", image: "images/happy2.jpeg" },
     
],                // <-- shu qator yetadi
  tags: ["kids","kids"],
  bullets: ["Hajmi 500 ml", "12 soat davomida issiq", "Yengil va mustahkam"],
  stock: 2
},

{
  slug: "termiz9",
  badge : "yangi",
  code: "9-13",
  title: "Chiroylik termiz",
  price: 41000,
  images: { main: "images/3 1.jpeg", hover: "images/3 2.jpeg" },
  colors: [
     { name: "Yashil", hex: "#6fae6cff", image: "images/happy2.jpeg" },
     { name: "Pushti", hex: "#fb92beff", image: "images/happy2.jpeg" },
     { name: "Och sariq", hex: "#fcfaa3ff", image: "images/happy2.jpeg" },
    { name: "Qaymoq rang", hex: "#efe939ff", image: "images/happy2.jpeg" },
     
],                // <-- shu qator yetadi
  tags: ["kids","kids"],
  bullets: ["Hajmi 500 ml", "12 soat davomida issiq", "Yengil va mustahkam"],
  stock: 2
},


{
  slug: "termiz10",
  badge : "yangi",
  code: "9-12",
  title: "Pandalik termiz",
  price: 41000,
  images: { main: "images/2 2.jpeg", hover: "images/2 1.jpeg" },
  colors: [
      { name: "Qaymoq rang", hex: "#dfc900ff", image: "images/2 2.jpeg" },
     { name: "Syoh rang", hex: "#c7c6a1ff", image: "images/2 2.jpeg" },
     { name: "Pushti", hex: "#fb92beff", image: "images/2 2.jpeg" },
     { name: "Och sariq", hex: "#fcfaa3ff", image: "images/2 2.jpeg" },
  
     
],                // <-- shu qator yetadi
  tags: ["kids","kids"],
  bullets: ["Hajmi 500 ml", "12 soat davomida issiq", "Yengil va mustahkam"],
  stock: 2
},





{
  slug: "termiz12",
  badge : "yangi",
  code: "9-11",
  title: "rangli termiz",
  price: 41000,
  images: { main: "images/12 2.jpeg", hover: "images/12 3.jpeg" },
  colors: [
      { name: "Ko'k", hex: "#000970ff", image: "images/12 2.jpeg" },
     { name: "Yashil", hex: "#003e06ff", image: "images/12 2.jpeg" },
     { name: "Pushti", hex: "#ffffffff", image: "images/12 2.jpeg" },
     { name: "Och sariq", hex: "#ff9500ff", image: "images/12 2.jpeg" },
  
     
],                // <-- shu qator yetadi
  tags: ["kids","kids"],
  bullets: ["Hajmi 500 ml", "12 soat davomida issiq", "Yengil va mustahkam"],
  stock: 2
},


{
  slug: "termiz13",
  badge : "yangi",
  code: "9-10",
  title: "chiroyli termiz",
  price: 41000,
  images: { main: "images/uh.jpeg", hover: "images/uh2.jpeg" },
  colors: [
      { name: "Ko'k", hex: "#4fd0ffff", image: "images/uh.jpeg" },
     { name: "Jigar rang", hex: "#585634ff", image: "images/uh.jpeg" },
     { name: "Yashil", hex: "#81d74cff", image: "images/uh.jpeg" },
     { name: "Pushti", hex: "#ff9bd0ff", image: "images/uh.jpeg" },
  
     
],                // <-- shu qator yetadi
  tags: ["kids","kids"],
  bullets: ["Hajmi 500 ml", "12 soat davomida issiq", "Yengil va mustahkam"],
  stock: 2
},


{
  slug: "termiz11",
  badge : "yangi",
  code: "9-8",
  title: "Pandalik termiz",
  price: 41000,
  images: { main: "images/it.jpeg", hover: "images/it2.jpeg" },
  colors: [
      { name: "Oq", hex: "#dededeff", image: "images/it.jpeg" },
     { name: "Ko'k", hex: "#5ea4ffff", image: "images/it.jpeg" },
     { name: "Yashil", hex: "#53c44eff", image: "images/it.jpeg" },
     { name: "Qora", hex: "#000000ff", image: "images/it.jpeg" },
  
     
],                // <-- shu qator yetadi
  tags: ["kids","kids"],
  bullets: ["Hajmi 500 ml", "12 soat davomida issiq", "Yengil va mustahkam"],
  stock: 2
},









];

window.products = products;