import { faker } from "@faker-js/faker";

export const createUser = () => {
    return {
        id: faker.number.int({
            min: 1,
            max: 10001
        }),
        name: faker.person.firstName(),
        email: faker.internet.email(),
        fullName: faker.person.fullName(),
        dob: faker.date.birthdate().toDateString(),
        city: faker.location.city(),
        country: faker.location.country(),
        zipCode: faker.location.zipCode("###")    
    }
}