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
  bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
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




];

window.products = products;