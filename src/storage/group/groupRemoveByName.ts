import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION, PLAYER_COLLECTION } from '@storage/storageConfig';
import { groupGetAll } from './groupGetAll';

export async function groupRemoveByName(groupDeleted: string) {
  const { setItem, removeItem } = AsyncStorage

  try {
    const storedGroups = await groupGetAll()
    const groups = storedGroups.filter((group) => group !== groupDeleted)

    await setItem(GROUP_COLLECTION, JSON.stringify(groups))
    await removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`)
  } catch (error) {
    throw error;
  }
}