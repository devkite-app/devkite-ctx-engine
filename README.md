```markdown
# DevKite CTX (Core Engine) 🪁

> Why feed your LLM whitespace and developer comments when raw structural logic is all it needs?

`devkite-ctx` is an ultra-lightweight, zero-dependency open-source CLI engine that strips non-functional bloat from your local code files, compressing context payloads by up to **80%** before you paste them into AI models or coding prompts. 

Same execution logic. Fraction of the token cost. Your context windows last longer.

---

## ⚡ The Token Optimization Proof Matrix

### Before Optimization (154 Tokens)
```javascript
/**
 * Fetches user profile metrics and formats the payload.
 * @param {string} userId - The unique identifier.
 */
async function getUserData(userId) {
    const response = await fetch(`/api/users/${userId}`);
    const data = await response.json();
    
    if (!data) {
        return null;
    }
    
    return data;
}

```
### After devkite-ctx Compression (31 Tokens)
```javascript
async function getUserData(id){const r=await fetch(`/api/users/${id}`),d=await r.json();return d??null}

```
## 🚀 Quick Start Installation & Usage
You can install the engine globally across your development environment using npm:
```bash
# Install the core engine CLI tool globally
npm install -g devkite-ctx-engine

```
### How to Run It
Once installed, pass any local code file path straight to the devkite-ctx command in your terminal. The tool will parse the file, compress it deterministically, and immediately pipe the output straight into your operating system's clipboard buffer:
```bash
# Compress a single file down to absolute token density
devkite-ctx path/to/your/component.js

```
### Real-World Workflow Example
 1. Run the command over a file: devkite-ctx src/index.js
 2. Head straight over to your AI prompt window (ChatGPT, Claude, local LLM webview).
 3. Press **Cmd + V** (or **Ctrl + V** on Windows) to paste.
 4. You'll instantly see your entire file logic packed into an ultra-dense format with zero vertical padding or comments, ready for high-efficiency prompt processing.
## 🎯 Open Source Core vs Pro Extension Features
This repository contains the **100% free, fully transparent, audited deterministic core compression engine**. It will never track telemetry, compile data metrics, or send your code to a remote cloud server. Everything stays entirely local to your machine.
| Feature | Open-Source Core (devkite-ctx) | DevKite Pro (Extension) |
|---|---|---|
| **Deterministic Regex Compression** | ✅ Yes | ✅ Yes |
| **Zero Cloud Dependencies** | ✅ Yes | ✅ Yes |
| **Local Clipboard Buffering** | ✅ Yes | ✅ Yes |
| **VS Code Native Webview Panel** | ❌ No | ✨ Premium |
| **Automated Active-Workspace Sync** | ❌ No | ✨ Premium |
| **Multi-File Path Wildcard Bundles** | ❌ No | ✨ Premium |
## 🤝 Contributing & Developer Trust
We love community optimizations! Help us push the boundaries of LLM context optimization. Feel free to open issues or submit Pull Requests to fine-tune token parsing regex matrices for additional structural languages (Python, Rust, Go, C++, etc.).
 * **License:** Distributed under the permissive, open-source **MIT License**.
