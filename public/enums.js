"use strict";
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["PERSON"] = 1] = "PERSON";
})(ResourceType || (ResourceType = {}));
const doc1 = {
    uid: 1,
    resourceType: ResourceType.PERSON,
    data: { name: "tom", age: 40 }
};
const doc2 = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: "The Hobbit"
};
console.log(doc1);
console.log(doc2);
