const Users = require("./usersModel");

const db = require("../../db.config");

describe("users model", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  //add User testing
  test("should insert a user", async () => {
    const records = await db("users");
    expect(records).toHaveLength(0);
    await Users.addUser({ username: "connor", password: "holly" });
    const newuser = await db("users");
    expect(newuser).toHaveLength(1);
  });

  test("it should be updating", async () => {
    let user = await Users.addUser({
      username: "unique 2",
      password: "pass 1"
    });
    expect(user.username).toBe("unique 2");

    user = await Users.addUser({ username: "unique 3", password: "pass 2" });
    expect(user.username).toBe("unique 3");

    const allUsers = await db("users");
    expect(allUsers).toHaveLength(2);
  });

  //delete User testing
  test("should insert a user then delete them", async () => {
    let allUsers = await db("users");
    expect(allUsers).toHaveLength(0);

    await Users.addUser({ username: "unique 2", password: "pass 1" });
    allUsers = await db("users");
    expect(allUsers).toHaveLength(1);

    let deleteUser = await Users.deleteUser("1", "=", 1);
    allUsers = await db("users");
    expect(allUsers).toHaveLength(0);
  });

  test("should insert 2 users and delete id 1", async () => {
    let allUsers = await db("users");
    let user = await Users.addUser({
      username: "unique 2",
      password: "pass 1"
    });
    expect(user.username).toBe("unique 2");

    user = await Users.addUser({ username: "unique 3", password: "pass 2" });
    expect(user.username).toBe("unique 3");

    allUsers = await db("users");
    expect(allUsers).toHaveLength(2);

    await Users.deleteUser("1", "=", 1);
    allUsers = await db("users");
    expect(allUsers).toHaveLength(1);

    expect(user.username).toBe("unique 3");
  });
});
