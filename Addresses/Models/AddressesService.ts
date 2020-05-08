import { FirestoreService } from "../../Common/Models/FirestoreService";
import { IAddress } from "./Addresses";

export class AddressService extends FirestoreService<IAddress> {
  // create firestore collection "addresses"
  constructor() {
    super("addresses");
  }
}
