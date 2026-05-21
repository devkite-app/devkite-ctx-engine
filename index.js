#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import clipboard from 'clipboardy';

/**
 * Core Token Optimization Engine (Deterministic Core)
 * Strips comments and smashes vertical padding for maximum LLM density.
 */
export function optimizeTokens(rawCode) {
    if (!rawCode) return '';

    let optimized = rawCode;

    // Phase 1: Strip multi-line JSDoc / block comments
    optimized = optimized.replace(/\/\*[\s\S]*?\*\//g, '');
    
    // Phase 2: Strip inline // comments (while preserving URL schemas like https://)
    optimized = optimized.replace(/(?<!:)\/\/.*$/gm, '');

    // Phase 3: Structural Logic Flattening (Smashes vertical whitespace into single spaces)
    optimized = optimized.replace(/\s+/g, ' ');

    // Phase 4: Squeeze syntactic padding right up against code operators/braces
    optimized = optimized.replace(/\s*([{}()\[\];,.\+\-\*\/=><!&|])\s*/g, '$1');

    return optimized.trim();
}

function runCLI() {
    const args = process.argv.slice(2);
    const targetPath = args[0];

    if (!targetPath) {
        console.log(`\x1b[36mDevKite CTX Engine v1.0.0 (Open-Source Core)\x1b[0m`);
        console.log(`Usage: devkite-ctx <file-path>\n`);
        process.exit(0);
    }

    try {
        const absolutePath = path.resolve(targetPath);
        
        if (!fs.existsSync(absolutePath)) {
            console.error(`\x1b[31mError: File not found at ${targetPath}\x1b[0m`);
            process.exit(1);
        }

        const rawContent = fs.readFileSync(absolutePath, 'utf-8');
        const optimizedContent = optimizeTokens(rawContent);

        // Pipe payload seamlessly to the local clipboard buffer
        clipboard.writeSync(optimizedContent);

        console.log(`\x1b[32m✓ Processing Complete!\x1b[0m`);
        console.log(`\x1b[90mPayload flattened securely to your system clipboard buffer.\x1b[0m`);
        
    } catch (error) {
        console.error(`\x1b[31mExecution Crash: ${error.message}\x1b[0m`);
        process.exit(1);
    }
}

if (process.argv[1] && (process.argv[1].endsWith('index.js') || process.argv[1].includes('devkite-ctx'))) {
    runCLI();
}