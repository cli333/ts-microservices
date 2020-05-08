import { IDatabaseModelBase } from "../../Common/Models/DatabaseModel";

export interface ILeads extends IDatabaseModelBase {
  Name: string;
  Topic: string;
  Created: Date;
  Status: string;
}
