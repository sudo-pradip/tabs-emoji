const vscode = require('vscode');

const KEY = 'tabsEmoji';
// FileDecoration badges are capped at 2 UTF-16 units, so emojis like 🛠️ (3) are excluded.
const EMOJIS = ["‼️","⁉️","™️","ℹ️","↔️","↕️","↖️","↗️","↘️","↙️","↩️","↪️","⌚","⌛","⌨️","⏏️","⏩","⏪","⏫","⏬","⏭️","⏮️","⏯️","⏰","⏱️","⏲️","⏳","⏸️","⏹️","⏺️","Ⓜ️","▪️","▫️","▶️","◀️","◻️","◼️","◽","◾","☀️","☁️","☂️","☃️","☄️","☎️","☑️","☔","☕","☘️","☝️","☠️","☢️","☣️","☦️","☪️","☮️","☯️","☸️","☹️","☺️","♀️","♂️","♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓","♟️","♠️","♣️","♥️","♦️","♨️","♻️","♾️","♿","⚒️","⚓","⚔️","⚕️","⚖️","⚗️","⚙️","⚛️","⚜️","⚠️","⚡","⚧️","⚪","⚫","⚰️","⚱️","⚽","⚾","⛄","⛅","⛈️","⛎","⛏️","⛑️","⛓️","⛔","⛩️","⛪","⛰️","⛱️","⛲","⛳","⛴️","⛵","⛷️","⛸️","⛹️","⛺","⛽","✂️","✅","✈️","✉️","✊","✋","✌️","✍️","✏️","✒️","✔️","✖️","✝️","✡️","✨","✳️","✴️","❄️","❇️","❌","❎","❓","❔","❕","❗","❣️","❤️","➕","➖","➗","➡️","➰","➿","⤴️","⤵️","⬅️","⬆️","⬇️","⬛","⬜","⭐","⭕","〰️","〽️","㊗️","㊙️","🀄","🃏","🆎","🆑","🆒","🆓","🆔","🆕","🆖","🆗","🆘","🆙","🆚","🇦","🇧","🇨","🇩","🇪","🇫","🇬","🇭","🇮","🇯","🇰","🇱","🇲","🇳","🇴","🇵","🇶","🇷","🇸","🇹","🇺","🇻","🇼","🇽","🇾","🇿","🈁","🈚","🈯","🈲","🈳","🈴","🈵","🈶","🈸","🈹","🈺","🉐","🉑","🌀","🌁","🌂","🌃","🌄","🌅","🌆","🌇","🌈","🌉","🌊","🌋","🌌","🌍","🌎","🌏","🌐","🌑","🌒","🌓","🌔","🌕","🌖","🌗","🌘","🌙","🌚","🌛","🌜","🌝","🌞","🌟","🌠","🌭","🌮","🌯","🌰","🌱","🌲","🌳","🌴","🌵","🌷","🌸","🌹","🌺","🌻","🌼","🌽","🌾","🌿","🍀","🍁","🍂","🍃","🍄","🍅","🍆","🍇","🍈","🍉","🍊","🍋","🍌","🍍","🍎","🍏","🍐","🍑","🍒","🍓","🍔","🍕","🍖","🍗","🍘","🍙","🍚","🍛","🍜","🍝","🍞","🍟","🍠","🍡","🍢","🍣","🍤","🍥","🍦","🍧","🍨","🍩","🍪","🍫","🍬","🍭","🍮","🍯","🍰","🍱","🍲","🍳","🍴","🍵","🍶","🍷","🍸","🍹","🍺","🍻","🍼","🍾","🍿","🎀","🎁","🎂","🎃","🎄","🎅","🎆","🎇","🎈","🎉","🎊","🎋","🎌","🎍","🎎","🎏","🎐","🎑","🎒","🎓","🎠","🎡","🎢","🎣","🎤","🎥","🎦","🎧","🎨","🎩","🎪","🎫","🎬","🎭","🎮","🎯","🎰","🎱","🎲","🎳","🎴","🎵","🎶","🎷","🎸","🎹","🎺","🎻","🎼","🎽","🎾","🎿","🏀","🏁","🏂","🏃","🏄","🏅","🏆","🏇","🏈","🏉","🏊","🏏","🏐","🏑","🏒","🏓","🏠","🏡","🏢","🏣","🏤","🏥","🏦","🏧","🏨","🏩","🏪","🏫","🏬","🏭","🏮","🏯","🏰","🏴","🏸","🏹","🏺","🏻","🏼","🏽","🏾","🏿","🐀","🐁","🐂","🐃","🐄","🐅","🐆","🐇","🐈","🐉","🐊","🐋","🐌","🐍","🐎","🐏","🐐","🐑","🐒","🐓","🐔","🐕","🐖","🐗","🐘","🐙","🐚","🐛","🐜","🐝","🐞","🐟","🐠","🐡","🐢","🐣","🐤","🐥","🐦","🐧","🐨","🐩","🐪","🐫","🐬","🐭","🐮","🐯","🐰","🐱","🐲","🐳","🐴","🐵","🐶","🐷","🐸","🐹","🐺","🐻","🐼","🐽","🐾","👀","👂","👃","👄","👅","👆","👇","👈","👉","👊","👋","👌","👍","👎","👏","👐","👑","👒","👓","👔","👕","👖","👗","👘","👙","👚","👛","👜","👝","👞","👟","👠","👡","👢","👣","👤","👥","👦","👧","👨","👩","👪","👫","👬","👭","👮","👯","👰","👱","👲","👳","👴","👵","👶","👷","👸","👹","👺","👻","👼","👽","👾","👿","💀","💁","💂","💃","💄","💅","💆","💇","💈","💉","💊","💋","💌","💍","💎","💏","💐","💑","💒","💓","💔","💕","💖","💗","💘","💙","💚","💛","💜","💝","💞","💟","💠","💡","💢","💣","💤","💥","💦","💧","💨","💩","💪","💫","💬","💭","💮","💯","💰","💱","💲","💳","💴","💵","💶","💷","💸","💹","💺","💻","💼","💽","💾","💿","📀","📁","📂","📃","📄","📅","📆","📇","📈","📉","📊","📋","📌","📍","📎","📏","📐","📑","📒","📓","📔","📕","📖","📗","📘","📙","📚","📛","📜","📝","📞","📟","📠","📡","📢","📣","📤","📥","📦","📧","📨","📩","📪","📫","📬","📭","📮","📯","📰","📱","📲","📳","📴","📵","📶","📷","📸","📹","📺","📻","📼","📿","🔀","🔁","🔂","🔃","🔄","🔅","🔆","🔇","🔈","🔉","🔊","🔋","🔌","🔍","🔎","🔏","🔐","🔑","🔒","🔓","🔔","🔕","🔖","🔗","🔘","🔙","🔚","🔛","🔜","🔝","🔞","🔟","🔠","🔡","🔢","🔣","🔤","🔥","🔦","🔧","🔨","🔩","🔪","🔫","🔬","🔭","🔮","🔯","🔰","🔱","🔲","🔳","🔴","🔵","🔶","🔷","🔸","🔹","🔺","🔻","🔼","🔽","🕋","🕌","🕍","🕎","🕐","🕑","🕒","🕓","🕔","🕕","🕖","🕗","🕘","🕙","🕚","🕛","🕜","🕝","🕞","🕟","🕠","🕡","🕢","🕣","🕤","🕥","🕦","🕧","🕺","🖕","🖖","🖤","🗻","🗼","🗽","🗾","🗿","😀","😁","😂","😃","😄","😅","😆","😇","😈","😉","😊","😋","😌","😍","😎","😏","😐","😑","😒","😓","😔","😕","😖","😗","😘","😙","😚","😛","😜","😝","😞","😟","😠","😡","😢","😣","😤","😥","😦","😧","😨","😩","😪","😫","😬","😭","😮","😯","😰","😱","😲","😳","😴","😵","😶","😷","😸","😹","😺","😻","😼","😽","😾","😿","🙀","🙁","🙂","🙃","🙄","🙅","🙆","🙇","🙈","🙉","🙊","🙋","🙌","🙍","🙎","🙏","🚀","🚁","🚂","🚃","🚄","🚅","🚆","🚇","🚈","🚉","🚊","🚋","🚌","🚍","🚎","🚏","🚐","🚑","🚒","🚓","🚔","🚕","🚖","🚗","🚘","🚙","🚚","🚛","🚜","🚝","🚞","🚟","🚠","🚡","🚢","🚣","🚤","🚥","🚦","🚧","🚨","🚩","🚪","🚫","🚬","🚭","🚮","🚯","🚰","🚱","🚲","🚳","🚴","🚵","🚶","🚷","🚸","🚹","🚺","🚻","🚼","🚽","🚾","🚿","🛀","🛁","🛂","🛃","🛄","🛅","🛌","🛐","🛑","🛒","🛕","🛖","🛗","🛘","🛜","🛝","🛞","🛟","🛫","🛬","🛴","🛵","🛶","🛷","🛸","🛹","🛺","🛻","🛼","🟠","🟡","🟢","🟣","🟤","🟥","🟦","🟧","🟨","🟩","🟪","🟫","🟰","🤌","🤍","🤎","🤏","🤐","🤑","🤒","🤓","🤔","🤕","🤖","🤗","🤘","🤙","🤚","🤛","🤜","🤝","🤞","🤟","🤠","🤡","🤢","🤣","🤤","🤥","🤦","🤧","🤨","🤩","🤪","🤫","🤬","🤭","🤮","🤯","🤰","🤱","🤲","🤳","🤴","🤵","🤶","🤷","🤸","🤹","🤺","🤼","🤽","🤾","🤿","🥀","🥁","🥂","🥃","🥄","🥅","🥇","🥈","🥉","🥊","🥋","🥌","🥍","🥎","🥏","🥐","🥑","🥒","🥓","🥔","🥕","🥖","🥗","🥘","🥙","🥚","🥛","🥜","🥝","🥞","🥟","🥠","🥡","🥢","🥣","🥤","🥥","🥦","🥧","🥨","🥩","🥪","🥫","🥬","🥭","🥮","🥯","🥰","🥱","🥲","🥳","🥴","🥵","🥶","🥷","🥸","🥹","🥺","🥻","🥼","🥽","🥾","🥿","🦀","🦁","🦂","🦃","🦄","🦅","🦆","🦇","🦈","🦉","🦊","🦋","🦌","🦍","🦎","🦏","🦐","🦑","🦒","🦓","🦔","🦕","🦖","🦗","🦘","🦙","🦚","🦛","🦜","🦝","🦞","🦟","🦠","🦡","🦢","🦣","🦤","🦥","🦦","🦧","🦨","🦩","🦪","🦫","🦬","🦭","🦮","🦯","🦰","🦱","🦲","🦳","🦴","🦵","🦶","🦷","🦸","🦹","🦺","🦻","🦼","🦽","🦾","🦿","🧀","🧁","🧂","🧃","🧄","🧅","🧆","🧇","🧈","🧉","🧊","🧋","🧌","🧍","🧎","🧏","🧐","🧑","🧒","🧓","🧔","🧕","🧖","🧗","🧘","🧙","🧚","🧛","🧜","🧝","🧞","🧟","🧠","🧡","🧢","🧣","🧤","🧥","🧦","🧧","🧨","🧩","🧪","🧫","🧬","🧭","🧮","🧯","🧰","🧱","🧲","🧳","🧴","🧵","🧶","🧷","🧸","🧹","🧺","🧻","🧼","🧽","🧾","🧿","🩰","🩱","🩲","🩳","🩴","🩵","🩶","🩷","🩸","🩹","🩺","🩻","🩼","🪀","🪁","🪂","🪃","🪄","🪅","🪆","🪇","🪈","🪉","🪊","🪎","🪏","🪐","🪑","🪒","🪓","🪔","🪕","🪖","🪗","🪘","🪙","🪚","🪛","🪜","🪝","🪞","🪟","🪠","🪡","🪢","🪣","🪤","🪥","🪦","🪧","🪨","🪩","🪪","🪫","🪬","🪭","🪮","🪯","🪰","🪱","🪲","🪳","🪴","🪵","🪶","🪷","🪸","🪹","🪺","🪻","🪼","🪽","🪾","🪿","🫀","🫁","🫂","🫃","🫄","🫅","🫆","🫈","🫍","🫎","🫏","🫐","🫑","🫒","🫓","🫔","🫕","🫖","🫗","🫘","🫙","🫚","🫛","🫜","🫟","🫠","🫡","🫢","🫣","🫤","🫥","🫦","🫧","🫨","🫩","🫪","🫯","🫰","🫱","🫲","🫳","🫴","🫵","🫶","🫷","🫸","①","②","③","④","⑤","⑥","⑦","⑧","⑨","⑩","⑪","⑫","⑬","⑭","⑮","⑯","⑰","⑱","⑲","⑳","➊","➋","➌","➍","➎","➏","➐","➑","➒","➓"];

// Webview tabs (e.g. Claude Code chats) get a new random URI on every reload, and VS Code
// never links that URI to the tab's title. But decoration requests arrive in tab-strip
// order, so the i-th requested URI of a viewType is the i-th open tab of that viewType.
// We save the title with the emoji and use that pairing to move it to the new URI.
// ponytail: title changes after marking lose the mark unless it's the only orphan; slots if that bites.
const viewType = (t) => t.input.viewType.replace(/^mainThreadWebview-/, '');
const emojiOf = (v) => (typeof v === 'string' ? v : v?.e);

function activate(context) {
  const changed = new vscode.EventEmitter();
  const store = () => context.globalState.get(KEY, {});
  const seen = []; // webview URIs in the order VS Code asked about them this session

  const webTabs = () => vscode.window.tabGroups.all.flatMap((g) => g.tabs)
    .filter((t) => t.input instanceof vscode.TabInputWebview);
  // Pair each open tab of one viewType with its URI; empty when the counts don't line up.
  const pairs = (vt) => {
    const tabs = webTabs().filter((t) => viewType(t) === vt);
    const uris = seen.filter((u) => u.path.includes(`-${vt}-`));
    return tabs.length === uris.length ? tabs.map((tab, i) => ({ tab, uri: uris[i] })) : [];
  };
  const tabFor = (uri) => {
    const vt = webTabs().map(viewType).find((v) => uri.path.includes(`-${v}-`));
    return vt && pairs(vt).find((p) => p.uri.toString() === uri.toString())?.tab;
  };

  let timer;
  const reconcile = async () => {
    const s = store();
    const live = new Set(seen.map(String));
    let moved = false;
    for (const vt of new Set(webTabs().map(viewType))) {
      const unmarked = pairs(vt).filter((p) => !s[p.uri.toString()]);
      const orphans = Object.keys(s).filter((k) => !live.has(k) && k.includes(`-${vt}-`) && s[k]?.label);
      for (const { tab, uri } of unmarked) {
        const k = orphans.find((o) => s[o].label === tab.label)
          ?? (orphans.length === 1 && unmarked.length === 1 ? orphans[0] : undefined);
        if (!k) continue;
        s[uri.toString()] = { ...s[k], label: tab.label };
        delete s[k];
        orphans.splice(orphans.indexOf(k), 1);
        moved = true;
      }
    }
    if (moved) { await context.globalState.update(KEY, s); changed.fire([...seen]); }
  };

  context.subscriptions.push(vscode.window.registerFileDecorationProvider({
    onDidChangeFileDecorations: changed.event,
    provideFileDecoration(uri) {
      if (uri.scheme === 'webview-panel' && !seen.some((u) => u.toString() === uri.toString())) seen.push(uri);
      const e = emojiOf(store()[uri.toString()]);
      if (e) return new vscode.FileDecoration(e, 'Tabs Emoji');
      if (uri.scheme === 'webview-panel') { clearTimeout(timer); timer = setTimeout(reconcile, 350); }
    }
  }));

  // A closed webview tab never tells us its URI, so forget the order and let VS Code re-ask.
  context.subscriptions.push(vscode.window.tabGroups.onDidChangeTabs((e) => {
    if (e.closed.some((t) => t.input instanceof vscode.TabInputWebview)) { seen.length = 0; changed.fire(undefined); }
  }));

  let panel, target;
  context.subscriptions.push(vscode.commands.registerCommand('tabsEmoji.pick', (uri) => {
    target = uri instanceof vscode.Uri ? uri : vscode.window.activeTextEditor?.document.uri;
    if (!target) return vscode.window.showWarningMessage('Tabs Emoji: no file selected.');
    if (panel) { panel.title = `Emoji: ${target.path.split('/').pop()}`; return panel.reveal(); }
    panel = vscode.window.createWebviewPanel('tabsEmoji', `Emoji: ${target.path.split('/').pop()}`,
      vscode.ViewColumn.Beside, { enableScripts: true });
    panel.webview.html = html();
    panel.webview.onDidReceiveMessage(async (emoji) => {
      if (emoji !== null && !EMOJIS.includes(emoji)) return; // only trust our own list
      const s = store();
      const label = target.scheme === 'webview-panel' ? tabFor(target)?.label : undefined;
      if (emoji === null) delete s[target.toString()];
      else s[target.toString()] = label ? { e: emoji, label } : emoji;
      await context.globalState.update(KEY, s);
      changed.fire(target);
      panel.dispose();
    });
    panel.onDidDispose(() => { panel = undefined; });
  }));
}

function html() {
  const btns = EMOJIS.map(e => `<button data-e="${e}">${e}</button>`).join('');
  return `<!DOCTYPE html><html><head><meta charset="UTF-8">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';">
<style>
body{padding:12px;color:var(--vscode-foreground)}
input{width:100%;padding:6px;margin-bottom:10px;box-sizing:border-box;background:var(--vscode-input-background);color:var(--vscode-input-foreground);border:1px solid var(--vscode-input-border,transparent)}
.g{display:grid;grid-template-columns:repeat(auto-fill,minmax(44px,1fr));gap:6px}
.g button{font-size:22px;padding:6px;background:var(--vscode-button-secondaryBackground);border:none;border-radius:4px;cursor:pointer}
.g button:hover{background:var(--vscode-button-secondaryHoverBackground)}
#clear{margin-top:14px;width:100%;padding:8px;background:var(--vscode-button-background);color:var(--vscode-button-foreground);border:none;border-radius:4px;cursor:pointer}
</style></head><body>
<div class="g">${btns}</div>
<button id="clear">Remove emoji</button>
<script>
const vscode = acquireVsCodeApi();
document.querySelector('.g').onclick = ev => ev.target.dataset.e && vscode.postMessage(ev.target.dataset.e);
document.getElementById('clear').onclick = () => vscode.postMessage(null);
</script></body></html>`;
}

module.exports = { activate, deactivate() {} };
