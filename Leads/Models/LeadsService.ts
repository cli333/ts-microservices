import { FirestoreService } from "../../Common/Models/FirestoreService";
import { ILeads } from "./Leads";

export class LeadsService extends FirestoreService<ILeads> {
  constructor() {
    super("leads");
  }
}
