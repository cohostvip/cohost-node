# @cohostvip/cohost-node

> Official Node.js SDK for interacting with the Cohost API

---

## ✨ Features

- TypeScript-first API client
- Supports Node.js `>=18`
- Automatically unwraps `{ status: 'ok', data: ... }` responses
- Supports ESM and CommonJS

---

## 📦 Installation

```bash
npm install @cohostvip/cohost-node
# or
pnpm add @cohostvip/cohost-node
```

---

## 🧱 Usage

```ts
import { CohostClient } from '@cohostvip/cohost-node';

const client = new CohostClient({
  token: 'your-api-token',
});

const event = await client.events.fetch('event-id');
const tickets = await client.events.tickets('event-id');
const order = await client.orders.fetch('order-id', 'user-id');
```

---

## 🧩 API Coverage

This SDK currently supports:

- `events.fetch(id)` – Fetch a single event
- `events.tickets(id)` – Fetch tickets for an event
- `orders.fetch(id, uid)` – Fetch an order

More endpoints coming soon.

---

## 🛠 Environment Requirements

- Node.js 18 or later
- An active Cohost API token

---

## 🗒️ Changelog
See the latest changes [here](./CHANGELOG.md).

---

## 🚧 Roadmap
Planned features and improvements are tracked [here](./ROADMAP.md).

---


## 📄 License

ISC © [Cohost](https://cohost.vip)
