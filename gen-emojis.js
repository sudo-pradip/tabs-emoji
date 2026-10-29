// Prints a JS array of every emoji that fits a VS Code tab badge (<= 2 UTF-16 units).
// Run: node gen-emojis.js
// ponytail: no lib needed, Node's regex knows Unicode emoji properties.
const out = [];
for (let cp = 0x2000; cp <= 0x1FAFF; cp++) {
  const ch = String.fromCodePoint(cp);
  if (/\p{Emoji_Presentation}/u.test(ch)) out.push(ch);                          // 😀 🔟 🟥 ...
  else if (/\p{Extended_Pictographic}/u.test(ch) && ch.length === 1) out.push(ch + '️'); // ⚙️ ⚠️ ❤️
}
// Number-like symbols that are short enough: ①-⑳ and ➊-➓
for (let cp = 0x2460; cp <= 0x2473; cp++) out.push(String.fromCodePoint(cp));
for (let cp = 0x278A; cp <= 0x2793; cp++) out.push(String.fromCodePoint(cp));

const fits = [...new Set(out)].filter(e => e.length <= 2);
console.log(`const EMOJIS = ${JSON.stringify(fits)};`);
console.error(`${fits.length} emojis`);
