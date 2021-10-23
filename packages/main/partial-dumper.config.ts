import {
    Dog,
    DogOwner,
    DogToy,
    Person,
    PetShopClient,
    PetShop,
    User,
} from '@dumper-monorepo-example/models';

import config from './src/config';

import {AnonymizationType} from 'mongoose-partial-dumper'

export default {
    db: {
        url: config.db_url
    },
    models: [
        Dog,
        DogOwner,
        DogToy,
        Person,
        PetShopClient,
        PetShop,
        User,
    ],
    anonymize: { // optional
        fields: [
            {
                field: 'name',
                type: AnonymizationType.name, // with AnonymizationType you can make sure that given anonymization type is correct
            }
        ]
    },
};
