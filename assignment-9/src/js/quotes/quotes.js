import { state } from "../core/state.js";
import { QUOTES_POOL } from "../core/constants.js";
import { updateDashboardPreviews } from "../core/dashboard.js";

export function initQuotesModule() {
  const nextButton = document.getElementById("next-quote-btn");
  const copyButton = document.getElementById("copy-quote-btn");

  nextButton?.addEventListener("click", () => {
    cycleQuote();
  });

  copyButton?.addEventListener("click", () => {
    const textToCopy = `"${state.currentQuote.text}" — ${state.currentQuote.author}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      const copyText = document.getElementById("copy-text");
      const copyIcon = document.getElementById("copy-icon");
      if (copyText) copyText.textContent = "Copied!";
      if (copyIcon) {
        copyIcon.textContent = "check";
        copyIcon.className = "material-symbols-outlined text-sm text-secondary font-bold";
      }

      setTimeout(() => {
        if (copyText) copyText.textContent = "Share";
        if (copyIcon) {
          copyIcon.textContent = "content_copy";
          copyIcon.className = "material-symbols-outlined text-sm";
        }
      }, 2000);
    });
  });
}

export function cycleQuote() {
  const card = document.getElementById("quotes-card");
  if (card) {
    card.classList.add("opacity-40", "translate-y-1");
  }

  setTimeout(() => {
    let index = Math.floor(Math.random() * QUOTES_POOL.length);
    while (QUOTES_POOL[index].text === state.currentQuote.text) {
      index = Math.floor(Math.random() * QUOTES_POOL.length);
    }
    state.currentQuote = QUOTES_POOL[index];
    renderWisdomQuote();

    if (card) {
      card.classList.remove("opacity-40", "translate-y-1");
    }
  }, 350);
}

export function renderWisdomQuote() {
  const textElement = document.getElementById("quote-text");
  const authorElement = document.getElementById("quote-author");

  if (textElement) textElement.textContent = state.currentQuote.text;
  if (authorElement) authorElement.textContent = state.currentQuote.author;

  updateDashboardPreviews();
}
