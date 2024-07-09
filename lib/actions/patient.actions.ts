import {ID, Query, Users} from "node-appwrite";

export const createUser = async (users: CreateUserParams) => {
  try {
    const newUser = await Users.create(
      ID.unique(),
      user,
      email,
      user,
      phone,
      undefined,
      user,
      name
    );
  } catch (error) {
    if (error && error?.code === 400) {
      const documents = await user.list([Query.equal("email", [user.email])]);

      return documents?.users(0);
    }
  }
};
