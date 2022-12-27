enum ResourceType {
    BOOK,
    PERSON
}

interface MyResource<T> {
    uid: number,
    resourceType: ResourceType,
    data: T
}

const doc1: MyResource<object> = {
    uid: 1,
    resourceType: ResourceType.PERSON,
    data: {name: "tom", age: 40}
}

const doc2: MyResource<string> = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: "The Hobbit"
}

console.log(doc1);
console.log(doc2);
