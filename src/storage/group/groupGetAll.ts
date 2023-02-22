import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";


export async function groupGetAll() {
  const { getItem } = AsyncStorage

  try {
    const storage = await getItem(GROUP_COLLECTION)

    const groups: string[] = storage ? JSON.parse(storage) : []

    return groups
  } catch (err) {
    throw err;
  }
}