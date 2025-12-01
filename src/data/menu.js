// src/data/menu.js

const commonCoffeeSizes = [
  { id: "S", label: "Petit / صغير", priceModifier: 0 },
  { id: "M", label: "Moyen / متوسط", priceModifier: 5 },
  { id: "L", label: "Grand / كبير", priceModifier: 10 }
];

const commonCoffeeAddOns = [
  { id: "extra-shot", label: "Shot d'espresso supplémentaire / لقطة إسبريسو إضافية", price: 7 },
  { id: "oat-milk", label: "Lait d'avoine / حليب الشوفان", price: 5 },
  { id: "whipped-cream", label: "Crème fouettée / كريمة مخفوقة", price: 4 },
  { id: "caramel-drizzle", label: "Filet de caramel / رذاذ الكراميل", price: 5 }
];

const coldDrinkAddOns = [
  { id: "extra-fruit", label: "Fruit supplémentaire / فاكهة إضافية", price: 8 },
  { id: "less-ice", label: "Moins de glace / أقل ثلج", price: 0 },
  { id: "no-sugar", label: "Sans sucre ajouté / بدون سكر مضاف", price: 0 }
];

const menu = [
  // Hot Coffee
  {
    id: "espresso",
    name: "Signature Espresso / Espresso Signature / إسبريسو مميز",
    category: "قهوة ساخنة / Café chaud",
    description: "Double-shot, 100% arabica beans, slow roasted. / Double dose, 100% grains arabica, torréfaction lente. / ضعف اللقطة، 100% حبوب أرابيكا، محمص ببطء.",
    price: 5,
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&auto=format&fit=crop",
    tags: ["Strong", "Classic", "Fort", "Classique", "قوي", "كلاسيكي"],
    sizes: commonCoffeeSizes,
    addOns: commonCoffeeAddOns
  },
  {
    id: "latte-vanilla",
    name: "Vanilla Latte / Latte Vanille / لاتيه الفانيليا",
    category: "قهوة ساخنة / Café chaud",
    description: "Smooth espresso, steamed milk, Madagascar vanilla. / Espresso velouté, lait vapeur, vanille de Madagascar. / إسبريسو ناعم، حليب مبخر، فانيليا مدغشقر.",
    price: 18,
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&auto=format&fit=crop",
    tags: ["Best Seller", "Milky", "Meilleure vente", "Crémeux", "الأكثر مبيعاً", "كريمي"],
    sizes: commonCoffeeSizes,
    addOns: commonCoffeeAddOns
  },
  {
    id: "mocha",
    name: "Mocha Dream / Rêve Mocha / حلم الموكا",
    category: "قهوة ساخنة / Café chaud",
    description: "Chocolate, espresso, and silky milk with foam art. / Chocolat, espresso et lait soyeux avec art de mousse. / شوكولاتة، إسبريسو وحليب حريري مع فن الرغوة.",
    price: 22,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&auto=format&fit=crop",
    tags: ["Chocolate", "Sweet", "Chocolat", "Sucré", "شوكولاتة", "حلو"],
    sizes: commonCoffeeSizes,
    addOns: commonCoffeeAddOns
  },
  {
    id: "turkish-coffee",
    name: "Turkish Coffee / Café Turc / قهوة تركية",
    category: "قهوة ساخنة / Café chaud",
    description: "Traditional Turkish coffee with cardamom. / Café turc traditionnel avec cardamome. / قهوة تركية تقليدية مع الهيل.",
    price: 10,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop",
    tags: ["Traditional", "Spiced", "Traditionnel", "Épicé", "تقليدي", "متبل"],
    sizes: commonCoffeeSizes,
    addOns: []
  },

  // Cold Coffee
  {
    id: "iced-americano",
    name: "Iced Americano / Americano Glacé / أمريكانو مثلج",
    category: "قهوة باردة / Café froid",
    description: "Chilled espresso over ice, crisp and refreshing. / Espresso frais sur glace, croquant et rafraîchissant. / إسبريسو مبرد على الثلج، مقرمش ومنعش.",
    price: 10,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=800&auto=format&fit=crop",
    tags: ["Low Calories", "Refreshing", "Faible calories", "Rafraîchissant", "قليل السعرات", "منعش"],
    sizes: commonCoffeeSizes,
    addOns: commonCoffeeAddOns
  },
  {
    id: "iced-caramel-latte",
    name: "Iced Caramel Latte / Latte Caramel Glacé / لاتيه الكراميل المثلج",
    category: "قهوة باردة / Café froid",
    description: "Espresso, caramel, cold milk, and ice cubes. / Espresso, caramel, lait froid et glaçons. / إسبريسو، كراميل، حليب بارد وقطع ثلج.",
    price: 21,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&auto=format&fit=crop",
    tags: ["Sweet", "Popular", "Sucré", "Populaire", "حلو", "شائع"],
    sizes: commonCoffeeSizes,
    addOns: commonCoffeeAddOns
  },
  {
    id: "sahlab",
    name: "Sahlab / Sahlab / سحلب",
    category: "مشروبات ساخنة / Boissons chaudes",
    description: "Traditional Moroccan hot drink made with orchid tubers, milk, and cinnamon. / Boisson chaude marocaine traditionnelle faite avec des tubercules d'orchidée, du lait et de la cannelle. / مشروب مغربي ساخن تقليدي مصنوع من درنات السحلب والحليب والقرفة.",
    price: 19,
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&auto=format&fit=crop",
    tags: ["Traditional", "Winter", "Hot", "Traditionnel", "Hiver", "Chaud", "تقليدي", "شتاء", "ساخن"],
    sizes: commonCoffeeSizes,
    addOns: []
  },

  // Fruit Drinks
  {
    id: "citronnade",
    name: "Citronnade / Citronnade / ليموناضة",
    category: "مشروبات باردة / Boissons froides",
    description: "Fresh Moroccan lemonade with mint and lemon slices. / Citronnade marocaine fraîche avec menthe et tranches de citron. / ليموناضة مغربية طازجة مع نعناع وقطع ليمون.",
    price: 25,
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=800&auto=format&fit=crop",
    tags: ["Refreshing", "Traditional", "Rafraîchissant", "Traditionnel", "منعش", "تقليدي"],
    sizes: [
      { id: "R", label: "Normal / عادي", priceModifier: 0 },
      { id: "L", label: "Grand / كبير", priceModifier: 7 }
    ],
    addOns: coldDrinkAddOns
  },
  {
    id: "karkade",
    name: "Karkadè / Karkadè / كركديه",
    category: "مشروبات باردة / Boissons froides",
    description: "Traditional Moroccan hibiscus tea, served cold. / Thé traditionnel marocain à l'hibiscus, servi froid. / شاي كركديه مغربي تقليدي، يقدم بارداً.",
    price: 27,
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&auto=format&fit=crop",
    tags: ["Traditional", "Antioxidant", "Traditionnel", "Antioxydant", "تقليدي", "مضاد للأكسدة"],
    sizes: [
      { id: "R", label: "Normal / عادي", priceModifier: 0 },
      { id: "L", label: "Grand / كبير", priceModifier: 7 }
    ],
    addOns: []
  },
  {
    id: "moroccan-orange-juice",
    name: "Fresh Orange Juice / Jus d'Orange Frais / عصير برتقال طازج",
    category: "مشروبات فواكه / Boissons aux fruits",
    description: "Freshly squeezed Moroccan oranges. / Oranges marocaines fraîchement pressées. / برتقال مغربي طازج معصور.",
    price: 15,
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=800&auto=format&fit=crop",
    tags: ["Fresh", "Vitamin C", "Frais", "Vitamine C", "طازج", "فيتامين سي"],
    sizes: [
      { id: "R", label: "Normal / عادي", priceModifier: 0 },
      { id: "L", label: "Grand / كبير", priceModifier: 7 }
    ],
    addOns: []
  },

  // Mocktails
  {
    id: "horm",
    name: "Horm / Horm / حورم",
    category: "تقليدي مغربي / Traditionnel marocain",
    description: "Traditional Moroccan almond milk drink, sweet and refreshing. / Boisson marocaine traditionnelle au lait d'amande, douce et rafraîchissante. / مشروب مغربي تقليدي من حليب اللوز، حلو ومنعش.",
    price: 20,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&auto=format&fit=crop",
    tags: ["Traditional", "Sweet", "Almond", "Traditionnel", "Sucré", "Amande", "تقليدي", "حلو", "لوز"],
    sizes: [
      { id: "R", label: "Normal / عادي", priceModifier: 0 },
      { id: "L", label: "Grand / كبير", priceModifier: 7 }
    ],
    addOns: []
  },
  {
    id: "grapefruit-juice",
    name: "Grapefruit Juice / Jus de Pamplemousse / عصير جريب فروت",
    category: "مشروبات باردة / Boissons froides",
    description: "Freshly squeezed grapefruit juice, tangy and refreshing. / Jus de pamplemousse fraîchement pressé, acidulé et rafraîchissant. / عصير جريب فروت طازج معصور، حامض ومنعش.",
    price: 23,
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=800&auto=format&fit=crop",
    tags: ["Fresh", "Vitamin C", "Tangy", "Frais", "Vitamine C", "Acidulé", "طازج", "فيتامين سي", "حامض"],
    sizes: [
      { id: "R", label: "Normal / عادي", priceModifier: 0 },
      { id: "L", label: "Grand / كبير", priceModifier: 7 }
    ],
    addOns: []
  },

  // Traditional Moroccan
  {
    id: "moroccan-mint-tea",
    name: "Moroccan Mint Tea / Thé à la Menthe Marocaine / شاي النعناع المغربي",
    category: "تقليدي مغربي / Traditionnel marocain",
    description: "Traditional Moroccan green tea with fresh mint. / Thé vert marocain traditionnel avec menthe fraîche. / شاي أخضر مغربي تقليدي مع نعناع طازج.",
    price: 8,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&auto=format&fit=crop",
    tags: ["Traditional", "Authentic", "Traditionnel", "Authentique", "تقليدي", "أصيل"],
    sizes: commonCoffeeSizes,
    addOns: []
  },
  {
    id: "avocado-smoothie",
    name: "Avocado Smoothie / Smoothie Avocat / عصير الأفوكادو",
    category: "تقليدي مغربي / Traditionnel marocain",
    description: "Fresh avocado blended with milk and honey. / Avocat frais mélangé avec du lait et du miel. / أفوكادو طازج مخلوط مع حليب وعسل.",
    price: 28,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop",
    tags: ["Healthy", "Creamy", "Sain", "Crémeux", "صحي", "كريمي"],
    sizes: [
      { id: "R", label: "Normal / عادي", priceModifier: 0 },
      { id: "L", label: "Grand / كبير", priceModifier: 7 }
    ],
    addOns: coldDrinkAddOns
  }
];

export default menu;
