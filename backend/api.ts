// backend simulation functions

import { type Item, items } from "./data";

export const getData = async (filters?: {
  search?: string;
}): Promise<Item[]> => {
  await new Promise(resolve => setTimeout(resolve, 100));
  
  if (Math.random() < 0.1) {
    throw new Error("Failed to fetch data");
  }
  
  if (!filters) { 
    return items;
  }

  return items.filter(item => {
    if (filters.search) {
      return item.name.toLowerCase().includes(filters.search.toLowerCase()) || item.barcode.includes(filters.search);
    }
    return true;
  });
}

export const getCurrentList = async (): Promise<Item[]> => {
  await new Promise(resolve => setTimeout(resolve, 100));
  return JSON.parse(localStorage.getItem("currentList") || "[]");
}

export const setCurrentList = async (item: Item): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 100));
  const currentList = JSON.parse(localStorage.getItem("currentList") || "[]");
  const updatedList = [...currentList, item];
  localStorage.setItem("currentList", JSON.stringify(updatedList));
}