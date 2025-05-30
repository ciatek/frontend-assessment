export type Item = {
  id: string;
  name: string;
  barcode: string
}

export const items: Array<Item> = [
  { id: "550e8400-e29b-41d4-a716-446655440000", name: "Item 1", barcode: "111" },
  { id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8", name: "Item 2", barcode: "222" },
  { id: "6ba7b811-9dad-11d1-80b4-00c04fd430c8", name: "Item 3", barcode: "333" },
  { id: "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d", name: "Item 4", barcode: "444" },
  { id: "2a3b4c5d-6e7f-8a9b-0c1d-2e3f4a5b6c7d", name: "Item 5", barcode: "555" },
  { id: "3a4b5c6d-7e8f-9a0b-1c2d-3e4f5a6b7c8d", name: "Item 6", barcode: "666" },
  { id: "4a5b6c7d-8e9f-0a1b-2c3d-4e5f6a7b8c9d", name: "Item 7", barcode: "777" },
  { id: "5a6b7c8d-9e0f-1a2b-3c4d-5e6f7a8b9c0d", name: "Item 8", barcode: "888" },
  { id: "6a7b8c9d-0e1f-2a3b-4c5d-6e7f8a9b0c1d", name: "Item 9", barcode: "999" },
  { id: "7a8b9c0d-1e2f-3a4b-5c6d-7e8f9a0b1c2d", name: "Item 10", barcode: "000" },
]