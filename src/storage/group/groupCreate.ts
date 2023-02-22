import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { groupGetAll } from "./groupGetAll";

type GroupCreate = {
  newGroup: string;
}

export async function GroupCreate({ newGroup }: GroupCreate) {
  const { setItem } = AsyncStorage

  try {
    const storedGroups = await groupGetAll()

    const groupAlreadyExists = storedGroups.includes(newGroup)

    if (groupAlreadyExists) {
      throw new AppError(`Já existe um grupo com o nome ${newGroup} cadastrado.`);
    }

    const storage = JSON.stringify([...storedGroups, newGroup])
    await setItem(GROUP_COLLECTION, storage)
  } catch (err) {
    throw err;
  }
}