import { connectToDb } from "../database";

import {
    Dog,
    DogOwner,
    DogToy,
    Person,
    PetShopClient,
    PetShop,
    User,
} from '@dumper-monorepo-example/models';

(async () => {

    await connectToDb();

    await Dog.deleteMany({});
    await DogOwner.deleteMany({});
    await DogToy.deleteMany({});
    await Person.deleteMany({});
    await PetShopClient.deleteMany({});
    await PetShop.deleteMany({});
    await User.deleteMany({});

    process.exit(0);

})();
