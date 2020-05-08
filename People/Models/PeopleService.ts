import { FirestoreService } from "../../Common/Models/FirestoreService";
import { IPerson } from "./People";

export class PeopleService extends FirestoreService<IPerson> {
  constructor() {
    super("people");
  }
}
