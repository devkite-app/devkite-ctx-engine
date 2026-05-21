```markdown
# devkite-context-cli

A deterministic, zero-dependency context compression engine optimized for local LLMs and agentic workflows. Instantly strips comments, JSDoc blocks, and structural layout fluff—saving up to 80% on token overhead while keeping your offline AI sessions fast and accurate.

---

## 🚀 Quick Start

You don't need to clone this repository, install local dependencies, or manage environments. Run it instantly via `npx`:

```bash
npx devkite-context-cli <path-to-file-or-directory>

```
### Examples
**Process a single source file:**
```bash
npx devkite-context-cli src/components/App.tsx

```
**Compress an entire directory (recursive processing):**
```bash
npx devkite-context-cli src/core/

```
## 🛠️ Features
 * **Zero Dependency:** Built natively to execute instantly without adding bloated node module trees to your target workspace.
 * **Token Optimization:** Strips trailing whitespace, block/inline comments, and verbose documentation styling while preserving structural syntax integrity.
 * **Clipboard Native:** Automatically formats and pipes the condensed codebase output straight into your system clipboard buffer for rapid pasting into local LLM sessions.
 * **Sovereign AI First:** Runs 100% locally and offline on your machine—ensuring zero data leakage, zero telemetry, and maximum runtime privacy.
## 📦 Local Architecture Development
If you want to contribute to the engine core or tweak the token minification rules locally:
 1. Clone the repository:
   ```bash
   git clone [https://github.com/devkite-app/devkite-ctx-engine.git](https://github.com/devkite-app/devkite-ctx-engine.git)
   cd devkite-ctx-engine
   
   ```
 2. Link the development binary to your global system path:
   ```bash
   npm link --force
   
   ```
 3. Run modifications in watch mode or test changes natively:
   ```bash
   devkite-context-cli <test-file>
   
   ```
## 📄 License
Distributed under the MIT License. See LICENSE for more information.
```

```
