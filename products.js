const products = [
  {
    slug: "termiz-carton",
     code: "A-4",     
    title: "chiroylik idishlar",
    price: 16500,
    badge: "NEW",
    images: {
      main: "images/idish q.png",
      hover: "images/idish q.png"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5459.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5467.JPG"}
    ],
    sizes: ["S","M","L","XL","XXL"],
      tags: ["kitchen","home"],
      bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
         stock: 3  
  },

  {
    slug: "meva savati",
    code: "A-3",     
    title: "meva savati",
    price: 39500,
    badge: "NEW",
    images: {
      main: "images/meva savat.png",
     hover: "images/meva savat.png"
    },
    colors: [
      {name:"Black", hex:"#f0df45ff", image:"images/meva savat.png"},
      {name:"Army Green", hex:"#ffffffff", image:"images/lol.png"}
    ],
      tags: ["kids","home"],
      bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
         stock: 3  
  },

  {
    slug: "termiz-robot",
    code: "A-2",     
    title: "meva savat",
    price: 16500,
    badge: "",
    images: {
      main: "images/meva savat j.png",
     hover: "images/meva savat j.png"
    },
    colors: [
      {name:"qora", hex:"#0a0a0a", image:"images/meva savat q.png", },
      {name:"jigarrang", hex:"#8a8a6a", image:"images/meva savat j.png"}
    ],
      tags: ["kids","home"],
      bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
         stock: 3  
  },

  {
    slug: "termiz-cool",
    code: "A-1",     
    title: "Termiz cool",
    price: 16500,
    badge: "",
    images: {
      main: "images/IMG_5479.JPG",
      hover: "images/IMG_5480.JPG"
    },
    colors: [
      {name:"Black", hex:"#b8b8b8ff", image:"images/IMG_5479.JPG"},
      {name:"Army Green", hex:"#ff2626ff", image:"images/IMG_5480.JPG",},
      {name:"Army Green", hex:"#00ff99ff", image:"images/IMG_5480.JPG",},
    ],
      tags: ["kitchen","home"],
      bullets: ["Zangga chidamli korpus", "Yuvish oson", "Yengil va mustahkam"],
       stock: 3  
  },
  {
    slug: "termiz-carton",
     code: "A-4",     
    title: "Termiz carton",
    price: 16500,
    badge: "NEW",
    images: {
      main: "images/IMG_5459.JPG",
      hover: "images/IMG_5460.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5459.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5467.JPG"}
    ],
    sizes: ["S","M","L","XL","XXL"]
  },

  {
    slug: "termiz-ayiq",
    code: "A-3",     
    title: "Termiz ayiq",
    price: 16500,
    badge: "NEW",
    images: {
      main: "images/IMG_5462.JPG",
      hover: "images/IMG_5463.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5462.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5463.JPG"}
    ]
  },

  {
    slug: "termiz-robot",
    code: "A-2",     
    title: "Termiz robot",
    price: 16500,
    badge: "",
    images: {
      main: "images/IMG_5466.JPG",
      hover: "images/IMG_5467.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5466.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5467.JPG"}
    ]
  },

  {
    slug: "termiz-cool",
    code: "A-1",     
    title: "Termiz cool",
    price: 16500,
    badge: "",
    images: {
      main: "images/IMG_5479.JPG",
      hover: "images/IMG_5480.JPG"
    },
    colors: [
      {name:"Black", hex:"#b8b8b8ff", image:"images/IMG_5479.JPG"},
      {name:"Army Green", hex:"#ff2626ff", image:"images/IMG_5480.JPG",},
      {name:"Army Green", hex:"#00ff99ff", image:"images/IMG_5480.JPG",},
    ]
  },{
    slug: "termiz-carton",
     code: "A-4",     
    title: "Termiz carton",
    price: 16500,
    badge: "NEW",
    images: {
      main: "images/IMG_5459.JPG",
      hover: "images/IMG_5460.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5459.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5467.JPG"}
    ],
    sizes: ["S","M","L","XL","XXL"]
  },

  {
    slug: "termiz-ayiq",
    code: "A-3",     
    title: "Termiz ayiq",
    price: 16500,
    badge: "NEW",
    images: {
      main: "images/IMG_5462.JPG",
      hover: "images/IMG_5463.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5462.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5463.JPG"}
    ]
  },

  {
    slug: "termiz-robot",
    code: "A-2",     
    title: "Termiz robot",
    price: 16500,
    badge: "",
    images: {
      main: "images/IMG_5466.JPG",
      hover: "images/IMG_5467.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5466.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5467.JPG"}
    ]

  },

  {
    slug: "termiz-cool",
    code: "A-1",     
    title: "Termiz cool",
    price: 16500,
    badge: "",
    images: {
      main: "images/IMG_5479.JPG",
      hover: "images/IMG_5480.JPG"
    },
    colors: [
      {name:"Black", hex:"#b8b8b8ff", image:"images/IMG_5479.JPG"},
      {name:"Army Green", hex:"#ff2626ff", image:"images/IMG_5480.JPG",},
      {name:"Army Green", hex:"#00ff99ff", image:"images/IMG_5480.JPG",},
    ]
  },{
    slug: "termiz-carton",
     code: "A-4",     
    title: "Termiz carton",
    price: 16500,
    badge: "NEW",
    images: {
      main: "images/IMG_5459.JPG",
      hover: "images/IMG_5460.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5459.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5467.JPG"}
    ],
    sizes: ["S","M","L","XL","XXL"]
  },

  {
    slug: "termiz-ayiq",
    code: "A-3",     
    title: "Termiz ayiq",
    price: 16500,
    badge: "NEW",
    images: {
      main: "images/IMG_5462.JPG",
      hover: "images/IMG_5463.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5462.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5463.JPG"}
    ]
  },

  {
    slug: "termiz-robot",
    code: "A-2",     
    title: "Termiz robot",
    price: 16500,
    badge: "",
    images: {
      main: "images/IMG_5466.JPG",
      hover: "images/IMG_5467.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5466.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5467.JPG"}
    ]
  },

  {
    slug: "termiz-cool",
    code: "A-1",     
    title: "Termiz cool",
    price: 16500,
    badge: "",
    images: {
      main: "images/IMG_5479.JPG",
      hover: "images/IMG_5480.JPG"
    },
    colors: [
      {name:"Black", hex:"#b8b8b8ff", image:"images/IMG_5479.JPG"},
      {name:"Army Green", hex:"#ff2626ff", image:"images/IMG_5480.JPG",},
      {name:"Army Green", hex:"#00ff99ff", image:"images/IMG_5480.JPG",},
    ]
  },{
    slug: "termiz-carton",
     code: "A-4",     
    title: "Termiz carton",
    price: 16500,
    badge: "NEW",
    images: {
      main: "images/IMG_5459.JPG",
      hover: "images/IMG_5460.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5459.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5467.JPG"}
    ],
    sizes: ["S","M","L","XL","XXL"]
  },

  {
    slug: "termiz-ayiq",
    code: "A-3",     
    title: "Termiz ayiq",
    price: 16500,
    badge: "NEW",
    images: {
      main: "images/IMG_5462.JPG",
      hover: "images/IMG_5463.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5462.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5463.JPG"}
    ]
  },

  {
    slug: "termiz-robot",
    code: "A-2",     
    title: "Termiz robot",
    price: 16500,
    badge: "",
    images: {
      main: "images/IMG_5466.JPG",
      hover: "images/IMG_5467.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5466.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5467.JPG"}
    ]
  },

  {
    slug: "termiz-cool",
    code: "A-1",     
    title: "Termiz cool",
    price: 16500,
    badge: "",
    images: {
      main: "images/IMG_5479.JPG",
      hover: "images/IMG_5480.JPG"
    },
    colors: [
      {name:"Black", hex:"#b8b8b8ff", image:"images/IMG_5479.JPG"},
      {name:"Army Green", hex:"#ff2626ff", image:"images/IMG_5480.JPG",},
      {name:"Army Green", hex:"#00ff99ff", image:"images/IMG_5480.JPG",},
    ]
  },{
    slug: "termiz-carton",
     code: "A-4",     
    title: "Termiz carton",
    price: 16500,
    badge: "NEW",
    images: {
      main: "images/IMG_5459.JPG",
      hover: "images/IMG_5460.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5459.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5467.JPG"}
    ],
    sizes: ["S","M","L","XL","XXL"]
  },

  {
    slug: "termiz-ayiq",
    code: "A-3",     
    title: "Termiz ayiq",
    price: 16500,
    badge: "NEW",
    images: {
      main: "images/IMG_5462.JPG",
      hover: "images/IMG_5463.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5462.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5463.JPG"}
    ]
  },

  {
    slug: "termiz-robot",
    code: "A-2",     
    title: "Termiz robot",
    price: 16500,
    badge: "",
    images: {
      main: "images/IMG_5466.JPG",
      hover: "images/IMG_5467.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5466.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5467.JPG"}
    ]
  },

  {
    slug: "termiz-cool",
    code: "A-1",     
    title: "Termiz cool",
    price: 16500,
    badge: "",
    images: {
      main: "images/IMG_5479.JPG",
      hover: "images/IMG_5480.JPG"
    },
    colors: [
      {name:"Black", hex:"#b8b8b8ff", image:"images/IMG_5479.JPG"},
      {name:"Army Green", hex:"#ff2626ff", image:"images/IMG_5480.JPG",},
      {name:"Army Green", hex:"#00ff99ff", image:"images/IMG_5480.JPG",},
    ]
  },{
    slug: "termiz-carton",
     code: "A-4",     
    title: "Termiz carton",
    price: 16500,
    badge: "NEW",
    images: {
      main: "images/IMG_5459.JPG",
      hover: "images/IMG_5460.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5459.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5467.JPG"}
    ],
    sizes: ["S","M","L","XL","XXL"]
  },

  {
    slug: "termiz-ayiq",
    code: "A-3",     
    title: "Termiz ayiq",
    price: 16500,
    badge: "NEW",
    images: {
      main: "images/IMG_5462.JPG",
      hover: "images/IMG_5463.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5462.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5463.JPG"}
    ]
  },

  {
    slug: "termiz-robot",
    code: "A-2",     
    title: "Termiz robot",
    price: 16500,
    badge: "",
    images: {
      main: "images/IMG_5466.JPG",
      hover: "images/IMG_5467.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5466.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5467.JPG"}
    ]
  },

  {
    slug: "termiz-cool",
    code: "A-1",     
    title: "Termiz cool",
    price: 16500,
    badge: "",
    images: {
      main: "images/IMG_5479.JPG",
      hover: "images/IMG_5480.JPG"
    },
    colors: [
      {name:"Black", hex:"#b8b8b8ff", image:"images/IMG_5479.JPG"},
      {name:"Army Green", hex:"#ff2626ff", image:"images/IMG_5480.JPG",},
      {name:"Army Green", hex:"#00ff99ff", image:"images/IMG_5480.JPG",},
    ]
  },{
    slug: "termiz-carton",
     code: "A-4",     
    title: "Termiz carton",
    price: 16500,
    badge: "NEW",
    images: {
      main: "images/IMG_5459.JPG",
      hover: "images/IMG_5460.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5459.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5467.JPG"}
    ],
    sizes: ["S","M","L","XL","XXL"]
  },

  {
    slug: "termiz-ayiq",
    code: "A-3",     
    title: "Termiz ayiq",
    price: 16500,
    badge: "NEW",
    images: {
      main: "images/IMG_5462.JPG",
      hover: "images/IMG_5463.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5462.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5463.JPG"}
    ]
  },

  {
    slug: "termiz-robot",
    code: "A-2",     
    title: "Termiz robot",
    price: 16500,
    badge: "",
    images: {
      main: "images/IMG_5466.JPG",
      hover: "images/IMG_5467.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5466.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5467.JPG"}
    ]
  },

  {
    slug: "termiz-cool",
    code: "A-1",     
    title: "Termiz cool",
    price: 16500,
    badge: "",
    images: {
      main: "images/IMG_5479.JPG",
      hover: "images/IMG_5480.JPG"
    },
    colors: [
      {name:"Black", hex:"#b8b8b8ff", image:"images/IMG_5479.JPG"},
      {name:"Army Green", hex:"#ff2626ff", image:"images/IMG_5480.JPG",},
      {name:"Army Green", hex:"#00ff99ff", image:"images/IMG_5480.JPG",},
    ]
  },{
    slug: "termiz-carton",
     code: "A-4",     
    title: "Termiz carton",
    price: 16500,
    badge: "NEW",
    images: {
      main: "images/IMG_5459.JPG",
      hover: "images/IMG_5460.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5459.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5467.JPG"}
    ],
    sizes: ["S","M","L","XL","XXL"]
  },

  {
    slug: "termiz-ayiq",
    code: "A-3",     
    title: "Termiz ayiq",
    price: 16500,
    badge: "NEW",
    images: {
      main: "images/IMG_5462.JPG",
      hover: "images/IMG_5463.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5462.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5463.JPG"}
    ]
  },

  {
    slug: "termiz-robot",
    code: "A-2",     
    title: "Termiz robot",
    price: 16500,
    badge: "",
    images: {
      main: "images/IMG_5466.JPG",
      hover: "images/IMG_5467.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5466.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5467.JPG"}
    ]
  },

  {
    slug: "termiz-cool",
    code: "A-1",     
    title: "Termiz cool",
    price: 16500,
    badge: "",
    images: {
      main: "images/IMG_5479.JPG",
      hover: "images/IMG_5480.JPG"
    },
    colors: [
      {name:"Black", hex:"#b8b8b8ff", image:"images/IMG_5479.JPG"},
      {name:"Army Green", hex:"#ff2626ff", image:"images/IMG_5480.JPG",},
      {name:"Army Green", hex:"#00ff99ff", image:"images/IMG_5480.JPG",},
    ]
  },{
    slug: "termiz-carton",
     code: "A-4",     
    title: "Termiz carton",
    price: 16500,
    badge: "NEW",
    images: {
      main: "images/IMG_5459.JPG",
      hover: "images/IMG_5460.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5459.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5467.JPG"}
    ],
    sizes: ["S","M","L","XL","XXL"]
  },

  {
    slug: "termiz-ayiq",
    code: "A-3",     
    title: "Termiz ayiq",
    price: 16500,
    badge: "NEW",
    images: {
      main: "images/IMG_5462.JPG",
      hover: "images/IMG_5463.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5462.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5463.JPG"}
    ]
  },

  {
    slug: "termiz-robot",
    code: "A-2",     
    title: "Termiz robot",
    price: 16500,
    badge: "",
    images: {
      main: "images/IMG_5466.JPG",
      hover: "images/IMG_5467.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5466.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5467.JPG"}
    ]
  },

  {
    slug: "termiz-cool",
    code: "A-1",     
    title: "Termiz cool",
    price: 16500,
    badge: "",
    images: {
      main: "images/IMG_5479.JPG",
      hover: "images/IMG_5480.JPG"
    },
    colors: [
      {name:"Black", hex:"#b8b8b8ff", image:"images/IMG_5479.JPG"},
      {name:"Army Green", hex:"#ff2626ff", image:"images/IMG_5480.JPG",},
      {name:"Army Green", hex:"#00ff99ff", image:"images/IMG_5480.JPG",},
    ]
  },{
    slug: "termiz-carton",
     code: "A-4",     
    title: "Termiz carton",
    price: 16500,
    badge: "NEW",
    images: {
      main: "images/IMG_5459.JPG",
      hover: "images/IMG_5460.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5459.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5467.JPG"}
    ],
    sizes: ["S","M","L","XL","XXL"]
  },

  {
    slug: "termiz-ayiq",
    code: "A-3",     
    title: "Termiz ayiq",
    price: 16500,
    badge: "NEW",
    images: {
      main: "images/IMG_5462.JPG",
      hover: "images/IMG_5463.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5462.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5463.JPG"}
    ]
  },

  {
    slug: "termiz-robot",
    code: "A-2",     
    title: "Termiz robot",
    price: 16500,
    badge: "",
    images: {
      main: "images/IMG_5466.JPG",
      hover: "images/IMG_5467.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5466.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5467.JPG"}
    ]
  },

  {
    slug: "termiz-cool",
    code: "A-1",     
    title: "Termiz cool",
    price: 16500,
    badge: "",
    images: {
      main: "images/IMG_5479.JPG",
      hover: "images/IMG_5480.JPG"
    },
    colors: [
      {name:"Black", hex:"#b8b8b8ff", image:"images/IMG_5479.JPG"},
      {name:"Army Green", hex:"#ff2626ff", image:"images/IMG_5480.JPG",},
      {name:"Army Green", hex:"#00ff99ff", image:"images/IMG_5480.JPG",},
    ]
  },{
    slug: "termiz-carton",
     code: "A-4",     
    title: "Termiz carton",
    price: 16500,
    badge: "NEW",
    images: {
      main: "images/IMG_5459.JPG",
      hover: "images/IMG_5460.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5459.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5467.JPG"}
    ],
    sizes: ["S","M","L","XL","XXL"]
  },

  {
    slug: "termiz-ayiq",
    code: "A-3",     
    title: "Termiz ayiq",
    price: 16500,
    badge: "NEW",
    images: {
      main: "images/IMG_5462.JPG",
      hover: "images/IMG_5463.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5462.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5463.JPG"}
    ]
  },

  {
    slug: "termiz-robot",
    code: "A-2",     
    title: "Termiz robot",
    price: 16500,
    badge: "",
    images: {
      main: "images/IMG_5466.JPG",
      hover: "images/IMG_5467.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5466.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5467.JPG"}
    ]
  },

  {
    slug: "termiz-cool",
    code: "A-1",     
    title: "Termiz cool",
    price: 16500,
    badge: "",
    images: {
      main: "images/IMG_5479.JPG",
      hover: "images/IMG_5480.JPG"
    },
    colors: [
      {name:"Black", hex:"#b8b8b8ff", image:"images/IMG_5479.JPG"},
      {name:"Army Green", hex:"#ff2626ff", image:"images/IMG_5480.JPG",},
      {name:"Army Green", hex:"#00ff99ff", image:"images/IMG_5480.JPG",},
    ]
  },{
    slug: "termiz-carton",
     code: "A-4",     
    title: "Termiz carton",
    price: 16500,
    badge: "NEW",
    images: {
      main: "images/IMG_5459.JPG",
      hover: "images/IMG_5460.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5459.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5467.JPG"}
    ],
    sizes: ["S","M","L","XL","XXL"]
  },

  {
    slug: "termiz-ayiq",
    code: "A-3",     
    title: "Termiz ayiq",
    price: 16500,
    badge: "NEW",
    images: {
      main: "images/IMG_5462.JPG",
      hover: "images/IMG_5463.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5462.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5463.JPG"}
    ]
  },

  {
    slug: "termiz-robot",
    code: "A-2",     
    title: "Termiz robot",
    price: 16500,
    badge: "",
    images: {
      main: "images/IMG_5466.JPG",
      hover: "images/IMG_5467.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5466.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5467.JPG"}
    ]
  },

  {
    slug: "termiz-cool",
    code: "A-1",     
    title: "Termiz cool",
    price: 16500,
    badge: "",
    images: {
      main: "images/IMG_5479.JPG",
      hover: "images/IMG_5480.JPG"
    },
    colors: [
      {name:"Black", hex:"#b8b8b8ff", image:"images/IMG_5479.JPG"},
      {name:"Army Green", hex:"#ff2626ff", image:"images/IMG_5480.JPG",},
      {name:"Army Green", hex:"#00ff99ff", image:"images/IMG_5480.JPG",},
    ]
  },{
    slug: "termiz-carton",
     code: "A-4",     
    title: "Termiz carton",
    price: 16500,
    badge: "NEW",
    images: {
      main: "images/IMG_5459.JPG",
      hover: "images/IMG_5460.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5459.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5467.JPG"}
    ],
    sizes: ["S","M","L","XL","XXL"]
  },

  {
    slug: "termiz-ayiq",
    code: "A-3",     
    title: "Termiz ayiq",
    price: 16500,
    badge: "NEW",
    images: {
      main: "images/IMG_5462.JPG",
      hover: "images/IMG_5463.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5462.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5463.JPG"}
    ]
  },

  {
    slug: "termiz-robot",
    code: "A-2",     
    title: "Termiz robot",
    price: 16500,
    badge: "",
    images: {
      main: "images/IMG_5466.JPG",
      hover: "images/IMG_5467.JPG"
    },
    colors: [
      {name:"Black", hex:"#0a0a0a", image:"images/IMG_5466.JPG"},
      {name:"Army Green", hex:"#8a8a6a", image:"images/IMG_5467.JPG"}
    ]
  },

  {
    slug: "termiz-cool",
    code: "A-1",     
    title: "Termiz cool",
    price: 16500,
    badge: "",
    images: {
      main: "images/IMG_5479.JPG",
      hover: "images/IMG_5480.JPG"
    },
    colors: [
      {name:"Black", hex:"#b8b8b8ff", image:"images/IMG_5479.JPG"},
      {name:"Army Green", hex:"#ff2626ff", image:"images/IMG_5480.JPG",},
      {name:"Army Green", hex:"#00ff99ff", image:"images/IMG_5480.JPG",},
    ]
  },
  
];

window.products = products;