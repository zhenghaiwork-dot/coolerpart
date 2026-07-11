/**
 * inquiry-basket.js — Inquiry Basket System for EVAPFit
 *
 * localStorage + CustomEvent based inquiry basket for static sites.
 * Products are added/removed from a basket, and the state is persisted
 * across page loads. Uses CustomEvent "inquiry-basket:update" for
 * cross-component communication.
 *
 * Usage:
 *   import { getBasket, addToBasket, removeFromBasket, clearBasket, getBasketCount, isInBasket } from '~/scripts/inquiry-basket';
 */

const STORAGE_KEY = "coolerparts_inquiry_basket";

/**
 * @typedef {Object} BasketItem
 * @property {string} slug
 * @property {string} name
 * @property {string} category
 * @property {string} moq
 * @property {string} priceRange
 * @property {string} image
 * @property {number} addedAt
 */

// ── Internal ──

function saveBasket(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new CustomEvent("inquiry-basket:update", { detail: items }));
  } catch (e) {
    console.error("Inquiry basket: failed to save", e);
  }
}

// ── Exported ──

export function getBasket() {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/**
 * Add an item to the basket. If already present (by slug), returns false.
 * @param {BasketItem} item
 * @returns {boolean} true if added, false if duplicate
 */
export function addToBasket(item) {
  const items = getBasket();
  if (items.some((i) => i.slug === item.slug)) return false;
  items.push({ ...item, addedAt: Date.now() });
  saveBasket(items);
  return true;
}

export function removeFromBasket(slug) {
  const items = getBasket().filter((i) => i.slug !== slug);
  saveBasket(items);
}

export function clearBasket() {
  saveBasket([]);
}

export function getBasketCount() {
  return getBasket().length;
}

export function isInBasket(slug) {
  return getBasket().some((i) => i.slug === slug);
}

/**
 * Extract product data from a button's data-product-* attributes.
 * @param {HTMLElement} btn
 * @returns {BasketItem}
 */
export function getProductData(btn) {
  return {
    slug: btn.dataset.productSlug,
    name: btn.dataset.productName,
    category: btn.dataset.productCategory,
    moq: btn.dataset.productMoq,
    priceRange: btn.dataset.productPrice,
    image: btn.dataset.productImage || '',
    addedAt: Date.now(),
  };
}
