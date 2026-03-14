# GEMINI.md - 專案指令與開發規範

本文件為 Gemini CLI 提供關於 **code-kata** 專案的背景資訊、開發流程及技術規範。

## 專案概述 (Project Overview)

`code-kata` 是一個用於練習演算法挑戰（Code Kata）的 TypeScript 專案，主要收錄來自 **Codewars** 與 **LeetCode** 的題目。專案採用現代化的開發工具鏈，強調測試驅動開發（TDD）與模組化實作。

### 核心技術棧
- **語言**: TypeScript (ES Modules, `"type": "module"`)
- **測試框架**: [Vitest](https://vitest.dev/) (開啟 `globals: true`，無需手動導入 `describe`, `it`, `expect`)
- **輔助工具**: [Lodash](https://lodash.com/), [Ramda](https://ramdajs.com/)
- **套件管理**: npm

---

## 專案架構 (Project Architecture)

專案結構以平台劃分，每個題目擁有獨立的目錄：

```text
src/
├── codewars/          # Codewars 挑戰題目
│   └── [functionName]/
│       ├── index.ts        # 解決方案實作檔案
│       ├── index.spec.ts   # Vitest 測試檔案
│       └── README.md       # 題目描述與繁體中文翻譯
└── leetcode/          # LeetCode 挑戰題目
    └── [problemName]/
        ├── index.ts
        ├── index.spec.ts
        └── README.md
```

---

## 開發指令 (Development Commands)

| 指令 | 說明 |
| :--- | :--- |
| `npm test` | 啟動 Vitest 監看模式 (Watch Mode) |
| `npm run test:ui` | 啟動 Vitest UI 介面進行測試 |
| `npm run test:coverage` | 執行測試並產生代碼覆蓋率報告 |
| `npm start` | 執行 `main.js` (目前主要用於測試環境確認) |

---

## 開發規範與慣例 (Conventions)

### 1. 新增題目流程 (New Kata Setup)
當需要新增一個題目時，應遵循以下慣例（可參考 `.agents/workflows/codewars-setup.md`）：
- **目錄命名**: 使用題目主要函式名稱，採 **小駝峰式 (camelCase)** 命名。
- **README.md**: 必須包含題目原文與**繁體中文翻譯**，並保留程式碼範例。
- **實作 (index.ts)**: 僅匯出題目要求的函式或類別。
- **測試 (index.spec.ts)**: 
    - 使用 `describe` 包裹題目名稱。
    - 測試案例描述應翻譯為繁體中文。
    - 必須包含題目提供的所有範例測試案例。

### 2. 編碼風格 (Code Style)
- **TypeScript**: 強制使用類型定義，盡可能避免使用 `any`。
- **匯出方式**: 使用具名匯出 (Named Exports)，方便測試檔案導入。
- **測試優先**: 鼓勵先編寫 `index.spec.ts` 確定測試失敗，再實作 `index.ts` 直至測試通過。

### 3. 測試指南
- 由於 Vitest 配置了 `globals: true`，在 `*.spec.ts` 檔案中直接使用 `describe`, `it`, `expect` 即可，**不需**從 `vitest` 導入。
- 測試檔案應專注於邊界條件與題目的所有範例。

---

## 關鍵檔案說明

- **`vitest.config.ts`**: 測試環境配置，定義全域變數支援。
- **`tsconfig.json`**: TypeScript 編譯配置。
- **`.agents/workflows/codewars-setup.md`**: 詳細的題目自動化/手動化設置流程指南。
- **`CLAUDE.md`**: 為其他 AI Agent 提供開發指令參考。
