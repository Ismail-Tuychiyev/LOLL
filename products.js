const products = [


  {
  slug: "un-elak",
  code: "20-2",
  title: "Un elak",
  price: 33500,
  images: { main: "images/un elak.jpg", hover: "images/un elak 2.jpg" },
  sizes: ["kichik","katta"],
  sizePrices: { kichik: 33500, katta: 39500 },
  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
  stock: 2
},

{
  slug: "tuzdon",
  code: "24-60",
  title: "Tuz, murich, salfetka idish",
  price: 69500,
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
  sizePrices: { kichik: 33500, ortancha: 34500, katta: 39500 },
  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
  stock: 2
},

{
  slug: "yog' idish",
  code: "24-91",
  title: "yog' idish",
  price: 33500,
  images: { main: "images/yog idish.jpeg", hover: "images/yog idish 2.jpeg" },
  sizes: ["cheti qayirilgan","cheti tekis"],
  sizePrices: { chetiqayirilgan: 39500, katta: 39500 },
colors: [
  { name: "qora", hex: "#111111ff", image: "images/yog idish.jpeg" },
   { name: "pushti", hex: "#ff8888ff", image: "images/pushti.jpeg" },
],                        // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
  stock: 2
},
{
  slug: "Kartoshka free pishirgich",
  code: "24-46",
  title: "Kartoshka free pishirgich",
  price: 33500,
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
  price: 33500,
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
  price: 33500,
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
  price: 33500,
  images: { main: "images/artadigan.jpeg", hover: "images/postlog'.jpeg" },
  sizes: ["kichik","katta"],
  sizePrices: { kichik: 33500, katta: 39500 },
  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
  stock: 2
},

{
  slug: "postlog",
  code: "24-33",
  title: "Postlog' artgich",
  price: 33500,
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
  price: 33500,
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
  price: 33500,
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
  price: 33500,
  images: { main: "images/qirgich temr.jpeg", hover: "images/qirtem.jpeg" },
  
  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
  stock: 2
},

{
  slug: "Qirgich aylana",
  code: "24-7",
  title: "aylanalik qirgich",
  price: 33500,
  images: { main: "images/ish.jpeg", hover: "images/dumolo.jpeg" },

  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
  stock: 2
},

{
  slug: "Ushlagich",
  code: "24-24",
  title: "Ushlagich",
  price: 33500,
  images: { main: "images/percha.jpeg", hover: "images/perchat.jpg" },
 
   colors: [
  { name: "Ko'k", hex: "#00a4fcff", image: "images/perchat.jpg" },
  { name: "sariq", hex: "#e6c803ff", image: "images/perchat.jpg" },
   { name: "Yashil", hex: "#16e603ff", image: "images/perchat.jpg" },
    { name: "Temirrang", hex: "#606060ff", image: "images/perchat.jpg" },
     { name: "Syohrang", hex: "#9303e6ff", image: "images/perchat.jpg" },
      { name: "Qo'ra", hex: "#000000ff", image: "images/perchat.jpg" },
       { name: "O'lovrang", hex: "#000000ff", image: "images/perchat.jpg" },
],                 // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Rangi ochib ketmaydi", "Yuvish oson", "Yengil va qulay"],
  stock: 2
},

{
  slug: "Quruq narsalar uchun idishlar",
  code: "24-19",
  title: "Quruq narsalar uchun idishlar",
  price: 33500,
  images: { main: "images/salt.jpeg", hover: "images/salt.jpeg" },
  sizes: ["kichik","orta","katta"],
  sizePrices: { kichik: 31500, orta: 33500, katta: 39500 },
  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
  stock: 4
},

{
  slug: "idishl",
  code: "2-77",
  title: "Quruq mahsulotlar uchun idish",
  price: 33500,
  images: { main: "images/3.jpeg", hover: "images/gapyo.jpeg" },

  colors: [],                // <-- shu qator yetadi
  tags: ["kitchen","home"],
  bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
  stock: 2
},
 
  
];

window.products = products;