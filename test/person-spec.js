// Your code here
const chai = require("chai")
const expect = chai.expect
const spies = require("chai-spies")
chai.use(spies)

const Person = require("../problems/person")

describe("Person", () => {
    let person1;
    let person2;
    let name = "mai"
    let age = 32
    let otherPerson = "lulu"
    let otherAge = 57

    beforeEach(()=> {
        person1 = new Person(name, age)
        person2 = new Person(otherPerson, otherAge)
    })

    describe("constructor()", () => {
        it ("should return an instance of Person", () => {
            expect(person1).to.be.an.instanceof(Person)
        })

        it("should set age and name properties", () => {
            expect(person1.name).to.equal(name)
            expect(person1.age).to.equal(age)
        })
    })

    describe("sayHello()", () => {
        it("should greet the user", () => {
            expect(person1.sayHello()).to.equal(`Hello, ${name}`)
        })
    })

    describe("visit(otherPerson)", () => {
        it ("Should tell us person1 visited person2", () => {
            expect(person1.visited(person2)).to.equal(`${name} visited ${otherPerson}`)
        })
    })

    describe("switchVisit(otherPerson)", () => {
       it("Should tell us person2 visited person1", () => {
            expect(person2.visited(person1)).to.equal(
               `${otherPerson} visited ${name}`
            );
        });
    });

    describe("update(obj)", () => {
        context("when the argument is a valid object", () => {
            it("should update the name and the age", () => {
                const newName = "anything"
                const newAge = 22
                person1.update({name: newName, age: newAge})
                expect(person1.name).to.equal(newName)
                expect(person.age).to.equal(newAge)
            })
        })

        context("when the argument is not a valid object", () => {
            it("if its not an object throw a TypeError", () => {
                expect(() => person1.update(1)).to.throw(TypeError)
            })

            it("should throw a TypeError when the object does not have a name", () => {
              const newName = "Bob";
              expect(() => person.update({ name: newName })).to.throw(
                TypeError
              );
            });

            it("should throw a TypeError when the object does not have an age", () => {
              const newAge = 64;
              expect(() => person.update({ age: newAge })).to.throw(TypeError);
            });
        });
    })

    describe("tryUpdate(obj)", () => {
        context("when successful", () => {
            it ("should return true if th eupdat ewas successful", () => {
                const newName = "bob"
                const newAge = 23
                expect(person1.tryUpdate({name: newName, age: newAge})).to.be.true
            })
        })
        context("when unsuccessful", () => {
           it("should return true if the update was successful", () => {
             expect(person.tryUpdate(1)).to.be.false;
           });
        });
    })

     describe("static greetAll(people)", () => {
       it("should greet all the people", () => {
         expect(Person.greetAll([person, otherPerson])).to.deep.equal([
           `Hello, ${person.name}.`,
           `Hello, ${otherPerson.name}.`,
         ]);
       });

       it("should call sayHello for every person", () => {
         sayHelloSpy = chai.spy.on(Person.prototype, "sayHello");
         Person.greetAll([person, otherPerson]);
         expect(sayHelloSpy).to.have.been.called.twice;
       });
     });


})
