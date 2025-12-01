# CoffeeAgadir – Coffee & Drinks Delivery (React + React-Bootstrap)

CoffeeAgadir is a delivery-first coffee and beverage shop website built with **React** and **React-Bootstrap**.
Customers can:

- Browse a menu of hot coffee, cold drinks, fruit drinks, and mocktails
- Add items to a cart
- Fill out delivery information
- Send the order via **WhatsApp** (or copy the order text for phone / SMS)

The project is ready to be deployed to **Vercel** or any static hosting that supports React builds.

---

## Tech stack

- React 18
- React-Router v6
- React-Bootstrap + Bootstrap 5
- Context API for cart state
- Static menu data in `src/data/menu.js`

---

## Getting started (cloning & running locally)

### 1. Clone the project

```bash
git clone https://github.com/YOUR_USERNAME/coffee-delivery-shop.git
cd coffee-delivery-shop
```

(If you created it manually, just `cd` into the project folder.)

### 2. Install dependencies

Make sure you have Node.js (LTS) installed, then:

```bash
npm install
```

This will install React, React-Bootstrap, React Router, and all other dependencies
(as defined in `package.json`).

### 3. Run the development server

```bash
npm start
```

Open [`http://localhost:3000`](http://localhost:3000) in your browser.

The dev server reloads automatically when you edit files in `src/`.

---

## Project structure

```text
src/
  App.js              # Main app with routing
  App.css             # Global styles and theme
  index.js            # Entry point, wraps app with Router and CartProvider

  data/
    menu.js           # Static menu items (id, name, price, category, images)

  context/
    CartContext.js    # Cart state: add/remove/update items, totals

  components/
    MainNavbar.js     # Top navigation bar
    HeroSection.js    # Homepage hero with CTA
    FeaturesSection.js# Quality / delivery features
    MenuGrid.js       # Menu cards with category filter
    CartSummary.js    # Cart table for the Order page
    ItemCustomizerModal.js # Modal for customizing drinks (sizes/add-ons)
    Footer.js         # Footer with phone info

  pages/
    HomePage.js       # Hero + highlights + featured menu
    MenuPage.js       # Full menu with filter
    OrderPage.js      # Cart + delivery form + WhatsApp link generator
    AboutPage.js      # Story & brand info
    NotFoundPage.js   # 404 page
```

---

## Customizing the project

### 1. Change contact phone / WhatsApp number

Update the constant in `src/pages/OrderPage.js`:

```js
const WHATSAPP_PHONE = "+212600000000";
```

Use your own phone/WhatsApp number. It will be used to build the WhatsApp link.

Also update the phone number shown in the footer in `src/components/Footer.js`:

```jsx
<a href="tel:+212600000000">+212 6 00 00 00 00</a>
```

### 2. Edit the menu (drinks, prices, pictures)

Open `src/data/menu.js`.

Each menu item looks like:

```js
{
  id: "espresso",
  name: "Signature Espresso",
  category: "Hot Coffee",
  description: "Double-shot, 100% arabica beans, slow roasted.",
  price: 2.5,
  image: "https://...",
  tags: ["Strong", "Classic"]
}
```

You can:

* Change `name`, `description`, `price`
* Replace `image` with your own URLs
* Add/remove tags
* Add new items with **unique `id` values**

The `category` field controls how the item appears in the category filter
(e.g. `"Hot Coffee"`, `"Cold Coffee"`, `"Fruit Drinks"`, `"Mocktails"`).

### 3. Change branding & text

* Homepage hero text: `src/components/HeroSection.js`
* Feature blocks text: `src/components/FeaturesSection.js`
* About page story: `src/pages/AboutPage.js`
* SEO title & description: `public/index.html`

### 4. Colors & theme

Global styles live in `src/App.css`.

You can tweak the color variables:

```css
:root {
  --coffee-bg: #0f0a07;
  --coffee-primary: #c58b5b;
  --coffee-primary-dark: #9a6635;
  --coffee-light: #f7eee7;
  --coffee-text: #faf4ef;
}
```

You can change the hero background image in `HeroSection.js`:

```js
const backgroundImage = "https://your-image-url";
```

---

## How the delivery / order flow works

1. User browses the **Menu** page (`/menu`) and clicks **"Customize & add"** on items.
2. A modal opens where they select size and add-ons.
3. Items are added to a shared cart via `CartContext`.
4. On the **Order** page (`/order`), the user sees:

   * A cart summary (items, quantities, total)
   * A delivery form (name, phone, address, notes, preferred time)
5. When the user clicks **"Send order via WhatsApp"**:

   * The app builds a text summary containing:

     * All items and quantities
     * Total price
     * Delivery details from the form
   * It opens a `wa.me` link in a new tab with that message pre-filled.
   * The user just presses **Send** in WhatsApp.
6. As a fallback, the user can click **"Copy order text"** and paste it into:

   * SMS
   * A phone notes app
   * Any messaging app they like

> Note: There is no backend. Orders are sent via WhatsApp only. You can later connect this frontend to a real API or a POS system if needed.

---

## Deploying to Vercel

### 1. Build the project

Create a production build:

```bash
npm run build
```

This generates an optimized `build/` folder.

### 2. Deploy via Vercel CLI (option A)

1. Install Vercel CLI globally:

   ```bash
   npm install -g vercel
   ```

2. In the project root, run:

   ```bash
   vercel
   ```

   * Log in or sign up if needed.
   * When asked for the build command, you can use:

     * **Build Command:** `npm run build`
     * **Output Directory:** `build`
     * **Install Command:** `npm install` (default)

3. For subsequent deployments:

   ```bash
   vercel --prod
   ```

### 3. Deploy via Vercel dashboard (option B)

1. Push your project to GitHub/GitLab/Bitbucket.
2. Go to the Vercel dashboard and click **"New Project"**.
3. Import your repository.
4. Configure:

   * Framework preset: **Create React App** (or "Other" with custom commands)
   * Build Command: `npm run build`
   * Output Directory: `build`
5. Click **Deploy**.

Vercel will build the project and give you a live URL, e.g.
`https://brewgo-coffee.vercel.app`

---

## Item customization (sizes & add-ons)

Each drink can define:

- `sizes`: array of `{ id, label, priceModifier }`
- `addOns`: array of `{ id, label, price }`

These are configured in `src/data/menu.js`.

When the user clicks **"Customize & add"** on a menu item:

1. A modal opens where they select size and add-ons.
2. The final **unit price** is calculated as:
   - `base price + size.priceModifier + sum(addOn.price)`
3. The selection (size + add-ons) is stored as a distinct cart line.
   For example, a Vanilla Latte (Medium with extra shot) is separate from a Vanilla Latte (Large with no add-ons).

---

## License

Feel free to use and adapt this project for personal or commercial coffee / beverage delivery shops. Replace branding, colors, and menu with your own.
