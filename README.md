```markdown
# DevKite Context CLI 🚀

A lightweight, zero-dependency CLI utility designed to bundle and optimize your local codebase files into structural, token-efficient Markdown context blocks. Perfect for dropping clean context straight into Large Language Models (LLMs) like ChatGPT, Claude, or local AI environments.

---

## 📦 Features

* **Zero Configuration:** Run instantly via `npx` without adding clutter to your global dependencies.
* **Token Optimization:** Automatically strips single-line (`//`) and multi-line (`/* */`) comments, discards dead layout spacing, and flattens redundant line breaks.
* **Auto-Clipboard Sync:** Copies the optimized payload directly to your system clipboard the second execution completes.
* **Structural Boundaries:** Wraps files in markdown headers, preserving your codebase layout for the AI.

---

## ⚡ Quick Start

Execute the utility directly from the root of your project folder using `npx`:

```bash
npx devkite-context-cli <path-to-file-or-directory>

```
## 🧠 How It Works (The Boilerplate Context Filter)
When working with heavy boilerplates (Next.js templates, monorepos, etc.), sending raw folders to an LLM wastes massive amounts of token window space on system configuration, boilerplate code, and formatting fluff.
devkite-context-cli acts as an isolation filter. Here is exactly what happens when you run the command on a folder:
### The Filtering Pipeline
```
[ Your Boilerplate Folder ]
      │
      ├── node_modules/ ──> 🛑 AUTO-IGNORED (Built-in skip list)
      ├── .next / dist/ ──> 🛑 AUTO-IGNORED (Build artifacts skipped)
      │
      └── src/components/ ──> ✅ ISOLATED TARGETED ANALYSIS
                │
                ├── Button.js  ──> [ Strips // comments & /* blocks */ ]
                └── Card.jsx   ──> [ Compresses multi-line spacing ]

```
### 🛠️ Execution Breakdown
When you run the targeted command:
```bash
npx devkite-context-cli src/components

```
 1. **Context Isolation:** The engine bypasses the boilerplate's root config noise and drills straight into the specified folder path.
 2. **Token Optimization Pipeline:**
   * **File Headers:** Wraps every file in a clean markdown delimiter (--- START OF FILE: path/to/file ---) so the LLM perfectly understands your file architecture.
   * **Bloat Stripping:** Strips out comments, discards dead layout spacing, and flattens redundant line breaks.
 3. **Zero-Friction Copy:** The beautifully dense, token-optimized code payload is injected directly into your system clipboard automatically.
Just hit Cmd+V or Ctrl+V straight into Claude or ChatGPT. The AI receives pure code logic, resulting in faster processing, zero distraction from boilerplate fluff, and highly accurate refactoring outputs.
## 💻 Technical Details & Scope
The engine handles single-file execution paths as well as recursive directory walking, cleanly separating files by type and rebuilding their context footprint instantly. It natively honors default ignore profiles for massive local runtime trees (node_modules) and production builds to guarantee lightweight processing overhead.
## 📄 License
MIT
```

```
