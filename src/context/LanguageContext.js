// src/context/LanguageContext.js
import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("ar"); // Default to Arabic for Morocco

  const translations = {
    fr: {
      // Navigation
      home: "Accueil",
      menu: "Menu",
      about: "À propos",
      order: "Commander",

      // Hero Section
      heroTitle: "Café spécialisé & boissons fraîches",
      heroSubtitle: "Parcourez notre menu sélectionné de cafés chauds, cafés glacés, boissons aux fruits et mocktails. Commandez par téléphone ou directement depuis le site web en quelques clics.",
      browseMenu: "Parcourir le menu complet",
      buildOrder: "Construire votre commande",
      artisanDrinks: "Boissons artisanales",
      averageDelivery: "Livraison moyenne",
      freeDeliveryOver: "Livraison gratuite à partir de",

      // Menu categories
      all: "Tous",
      hotCoffee: "Café chaud",
      coldCoffee: "Café froid",
      fruitDrinks: "Boissons aux fruits",
      coldDrinks: "Boissons froides",
      hotDrinks: "Boissons chaudes",
      traditionalMoroccan: "Traditionnel Marocain",

      // Menu actions
      customizeAdd: "Personnaliser & ajouter",
      addToOrder: "Ajouter à la commande",

      // Cart
      yourDrinks: "Vos boissons",
      emptyCart: "Votre panier est vide. Ajoutez des boissons depuis le menu pour commencer une commande.",
      itemInCart: "article(s) dans le panier",
      total: "Total",

      // Order page
      deliveryDetails: "Détails de livraison",
      deliveryDescription: "Remplissez vos informations et nous recevrons votre commande via WhatsApp ou message téléphonique. Nous confirmerons et vous enverrons une heure de livraison estimée.",
      yourName: "Votre nom",
      phoneNumber: "Numéro de téléphone",
      deliveryAddress: "Adresse de livraison",
      preferredDeliveryTime: "Heure de livraison préférée",
      notes: "Notes",
      orderTotal: "Total de votre commande",
      sendOrderViaWhatsapp: "Envoyer la commande via WhatsApp",
      copyOrderText: "Copier le texte de commande",
      addDrinksFirst: "Ajoutez d'abord des boissons depuis le menu.",

      // About page
      aboutTitle: "À propos de CoffeeAgadir",
      aboutText1: "CoffeeAgadir est un bar à café et boissons axé sur la livraison. Nous aimons le café de troisième vague, les cold brews veloutés et les boissons aux fruits colorées - mais nous savons aussi que vous n'avez pas toujours le temps de vous asseoir dans un café.",
      aboutText2: "C'est pourquoi nous avons créé un service où vous pouvez parcourir un menu de niveau barista, personnaliser votre commande et recevoir le tout à votre porte en environ 30-45 minutes, encore chaud ou parfaitement rafraîchi.",
      aboutFocus: "Nous nous concentrons sur:",
      freshBeans: "Grains frais et fruits de saison",
      carefulPackaging: "Emballage soigné pour la livraison",
      simpleOrdering: "Commande simple par téléphone, WhatsApp ou ce site web",

      // Footer
      orderByPhone: "Commander par téléphone:",
      whatsappSupported: "WhatsApp supporté",

      // Sizes
      small: "Petit",
      medium: "Moyen",
      large: "Grand",
      regular: "Normal",

      // Add-ons
      extraEspressoShot: "Shot d'espresso supplémentaire",
      oatMilk: "Lait d'avoine / lait végétal",
      whippedCream: "Crème fouettée",
      caramelDrizzle: "Filet de caramel",
      extraFruit: "Fruit supplémentaire",
      lessIce: "Moins de glace",
      noAddedSugar: "Sans sucre ajouté",
      free: "(gratuit)",

      // Time options
      asSoonAsPossible: "Dès que possible",
      within30Minutes: "Dans 30 minutes",
      within1Hour: "Dans 1 heure",
      scheduleForLater: "Planifier pour plus tard",

      // 404 page
      pageNotFound: "404",
      pageNotFoundText: "Nous n'avons pas trouvé cette page. Vous cherchiez peut-être le menu?",
      goToMenu: "Aller au menu"
    },
    ar: {
      // Navigation
      home: "الرئيسية",
      menu: "القائمة",
      about: "حولنا",
      order: "اطلب",

      // Hero Section
      heroTitle: "قهوة متخصصة ومشروبات طازجة",
      heroSubtitle: "تصفح قائمتنا المختارة من القهوة الساخنة، القهوة الباردة، مشروبات الفواكه والموكتيلات. اطلب عبر الهاتف أو مباشرة من الموقع في بضع نقرات.",
      browseMenu: "تصفح القائمة كاملة",
      buildOrder: "بناء طلبك",
      artisanDrinks: "مشروبات حرفية",
      averageDelivery: "متوسط التوصيل",
      freeDeliveryOver: "توصيل مجاني فوق",

      // Menu categories
      all: "الكل",
      hotCoffee: "قهوة ساخنة",
      coldCoffee: "قهوة باردة",
      fruitDrinks: "مشروبات فواكه",
      coldDrinks: "مشروبات باردة",
      hotDrinks: "مشروبات ساخنة",
      traditionalMoroccan: "تقليدي مغربي",

      // Menu actions
      customizeAdd: "تخصيص وإضافة",
      addToOrder: "إضافة للطلب",

      // Cart
      yourDrinks: "مشروباتك",
      emptyCart: "سلة التسوق فارغة. أضف مشروبات من القائمة لبدء الطلب.",
      itemInCart: "عنصر في السلة",
      total: "المجموع",

      // Order page
      deliveryDetails: "تفاصيل التوصيل",
      deliveryDescription: "املأ معلوماتك وسنتلقى طلبك عبر واتساب أو رسالة هاتفية. سنؤكد ونرسل لك وقت توصيل مقدر.",
      yourName: "اسمك",
      phoneNumber: "رقم الهاتف",
      deliveryAddress: "عنوان التوصيل",
      preferredDeliveryTime: "وقت التوصيل المفضل",
      notes: "ملاحظات",
      orderTotal: "مجموع طلبك",
      sendOrderViaWhatsapp: "إرسال الطلب عبر واتساب",
      copyOrderText: "نسخ نص الطلب",
      addDrinksFirst: "أضف مشروبات من القائمة أولاً.",

      // About page
      aboutTitle: "حول CoffeeAgadir",
      aboutText1: "CoffeeAgadir هو بار قهوة ومشروبات يركز على التوصيل. نحب القهوة من الموجة الثالثة، البريو البارد الناعم، ومشروبات الفواكه الملونة - لكننا نعرف أيضاً أنك لا تملك دائماً وقت الجلوس في مقهى.",
      aboutText2: "لهذا السبب أنشأنا خدمة يمكنك فيها تصفح قائمة بمستوى الباريستا، تخصيص طلبك واستلام كل شيء على باب منزلك في حوالي 30-45 دقيقة، لا يزال ساخناً أو مبرداً تماماً.",
      aboutFocus: "نركز على:",
      freshBeans: "حبوب طازجة وفواكه موسمية",
      carefulPackaging: "تعبئة دقيقة للتوصيل",
      simpleOrdering: "طلب بسيط عبر الهاتف أو واتساب أو هذا الموقع",

      // Footer
      orderByPhone: "اطلب عبر الهاتف:",
      whatsappSupported: "يدعم واتساب",

      // Sizes
      small: "صغير",
      medium: "متوسط",
      large: "كبير",
      regular: "عادي",

      // Add-ons
      extraEspressoShot: "لقطة إسبريسو إضافية",
      oatMilk: "حليب الشوفان / حليب نباتي",
      whippedCream: "كريمة مخفوقة",
      caramelDrizzle: "رذاذ الكراميل",
      extraFruit: "فاكهة إضافية",
      lessIce: "أقل ثلج",
      noAddedSugar: "بدون سكر مضاف",
      free: "(مجاني)",

      // Time options
      asSoonAsPossible: "في أقرب وقت ممكن",
      within30Minutes: "خلال 30 دقيقة",
      within1Hour: "خلال ساعة",
      scheduleForLater: "جدولة لاحقاً",

      // 404 page
      pageNotFound: "404",
      pageNotFoundText: "لم نجد هذه الصفحة. ربما كنت تبحث عن القائمة؟",
      goToMenu: "اذهب للقائمة"
    },
    en: {
      // Navigation
      home: "Home",
      menu: "Menu",
      about: "About",
      order: "Order",

      // Hero Section
      heroTitle: "Specialty coffee & fresh drinks",
      heroSubtitle: "Browse our curated menu of hot brews, iced coffees, fruit drinks, and mocktails. Order by phone or directly from the website in a few clicks.",
      browseMenu: "Browse full menu",
      buildOrder: "Build your order",
      artisanDrinks: "Artisan drinks",
      averageDelivery: "Average delivery",
      freeDeliveryOver: "Free delivery over",

      // Menu categories
      all: "All",
      hotCoffee: "Hot Coffee",
      coldCoffee: "Cold Coffee",
      fruitDrinks: "Fruit Drinks",
      coldDrinks: "Cold Drinks",
      hotDrinks: "Hot Drinks",
      traditionalMoroccan: "Traditional Moroccan",

      // Menu actions
      customizeAdd: "Customize & add",
      addToOrder: "Add to order",

      // Cart
      yourDrinks: "Your drinks",
      emptyCart: "Your cart is empty. Add drinks from the menu to start an order.",
      itemInCart: "item(s) in cart",
      total: "Total",

      // Order page
      deliveryDetails: "Delivery details",
      deliveryDescription: "Fill your information and we'll receive your order via WhatsApp or phone message. We'll confirm and send an estimated delivery time.",
      yourName: "Your name",
      phoneNumber: "Phone number",
      deliveryAddress: "Delivery address",
      preferredDeliveryTime: "Preferred delivery time",
      notes: "Notes",
      orderTotal: "Your order total",
      sendOrderViaWhatsapp: "Send order via WhatsApp",
      copyOrderText: "Copy order text",
      addDrinksFirst: "Add some drinks from the menu before sending your order.",

      // About page
      aboutTitle: "About CoffeeAgadir",
      aboutText1: "CoffeeAgadir is a delivery-first coffee and drinks bar. We love third-wave coffee, smooth cold brews, and colorful fruit drinks — but we also know you don't always have time to sit in a café.",
      aboutText2: "That's why we built a service where you can browse a barista-level menu, customize your order, and get everything at your door in around 30–45 minutes, still hot or perfectly chilled.",
      aboutFocus: "We focus on:",
      freshBeans: "Fresh beans and seasonal fruit",
      carefulPackaging: "Careful packaging for delivery",
      simpleOrdering: "Simple ordering by phone, WhatsApp, or this website",

      // Footer
      orderByPhone: "Order by phone:",
      whatsappSupported: "WhatsApp supported",

      // Sizes
      small: "Small",
      medium: "Medium",
      large: "Large",
      regular: "Regular",

      // Add-ons
      extraEspressoShot: "Extra espresso shot",
      oatMilk: "Oat / plant-based milk",
      whippedCream: "Whipped cream",
      caramelDrizzle: "Caramel drizzle",
      extraFruit: "Extra fruit",
      lessIce: "Less ice",
      noAddedSugar: "No added sugar",
      free: "(free)",

      // Time options
      asSoonAsPossible: "As soon as possible",
      within30Minutes: "Within 30 minutes",
      within1Hour: "Within 1 hour",
      scheduleForLater: "Schedule for later today",

      // 404 page
      pageNotFound: "404",
      pageNotFoundText: "We couldn't find that page. Maybe you were looking for the menu?",
      goToMenu: "Go to menu"
    }
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  const value = {
    language,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
