# VS Code এ `cl` ও `dqs` Snippet সেটআপ (বাংলা গাইড)

এই গাইড অনুসরণ করলে:
- `cl` লিখে Enter/Tab দিলে `console.log();` আসবে  
- `dqs` লিখে Enter/Tab দিলে `let name = document.querySelector();` আসবে

## ধাপ 1: Project folder VS Code এ খুলুন

যে project এ snippet ব্যবহার করতে চাও, সেই folder VS Code দিয়ে open করো।

## ধাপ 2: `.vscode` ফোল্ডার তৈরি করো

Project root এ `.vscode` নামে একটি folder তৈরি করো (না থাকলে)।

## ধাপ 3: Snippet file তৈরি করো

`.vscode/javascript.code-snippets` নামে ফাইল তৈরি করে নিচের code বসাও:

```json
{
  "Console log": {
    "prefix": "cl",
    "body": [
      "console.log($1);"
    ],
    "description": "Insert console.log()"
  },
  "Document querySelector": {
    "prefix": "dqs",
    "body": [
      "let ${1:name} = document.querySelector('${2:selector}');"
    ],
    "description": "Insert let ... = document.querySelector()"
  }
}
```

## ধাপ 4: VS Code settings (optional but recommended)

`.vscode/settings.json` ফাইলে নিচের config রাখো:

```json
{
  "editor.snippetSuggestions": "top",
  "editor.tabCompletion": "on",
  "editor.acceptSuggestionOnEnter": "on"
}
```

## ধাপ 5: ব্যবহার করার নিয়ম

1. JavaScript file (`.js`) এ যাও  
2. `cl` বা `dqs` টাইপ করো  
3. Suggestion থেকে snippet select করে **Enter** চাপো  
   (প্রয়োজনে **Tab** দিয়েও expand করা যায়)

## ধাপ 6: কাজ না করলে

- VS Code reload দাও: `Ctrl + Shift + P` → `Reload Window`
- নিশ্চিত হও তুমি `.js` file এ লিখছো
- filename ও path ঠিক আছে কি না চেক করো:
  - `.vscode/javascript.code-snippets`
  - `.vscode/settings.json`
