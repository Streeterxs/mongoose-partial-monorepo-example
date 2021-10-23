import {User} from "@dumper-monorepo-example/models";
import { connectToDb } from "../database";

(async () => {

    await connectToDb();

    const user = new User({
        name: 'user',
    });

    const clientCreated = await user.save({});

    console.log('clientCreated: ', clientCreated);

    process.exit(0);

})();
