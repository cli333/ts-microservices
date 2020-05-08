import { IDatabaseModelBase } from "./DatabaseModel";
import { Guid } from "guid-typescript";
import firebase from "firebase";

export abstract class FirestoreService<T extends IDatabaseModelBase> {
  constructor(private collection: string) {}

  public async GetAll(): Promise<T[]> {
    const query = await firebase.firestore().collection(this.collection).get();
    const items: T[] = [];
    query.forEach((item: any) => {
      items.push(<T>item.data());
    });
    return items;
  }

  public async Get(id: string): Promise<T> {
    const query = await firebase
      .firestore()
      .collection(this.collection)
      .doc(id)
      .get();
    return <T>query.data();
  }

  public Save(item: T): Promise<T> {
    return new Promise<T>(async (coll) => {
      // create guid
      item.ServerId = Guid.create().toString();
      // save item to db
      await firebase
        .firestore()
        .collection(this.collection)
        .doc(item.ServerId)
        .set(item);
      // return saved item
      coll(item);
    });
  }
}
