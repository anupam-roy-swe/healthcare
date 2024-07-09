import * as sdk from "node-appwrite";
export const {
  PROJECT_ID,
  API_KYE,
  DATABASE_ID,
  PATIENT_ID,
  DOCTOR_ID,
  APPOINTMENT_ID,
  NEXT_PUBLIC_BUCKET_ID: Bucket_Id,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

/*appWrite*/

const client = new Sdk.client();

client.setEndpoint(ENDPOINT!).setProject(PROJECT_ID!).setKey(API_KYE!);

export const database = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messing = new sdk.Messaging(client);
export const Users = new sdk.Users(client);
