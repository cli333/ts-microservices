import { IDatabaseModelBase } from "../../Common/Models/DatabaseModel";
import { IAddress } from "../../Addresses/Models/Addresses";

export interface IPerson extends IDatabaseModelBase {
  FirstName: string;
  LastName: string;
  Address: IAddress;
}
