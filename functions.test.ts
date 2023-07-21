import { capitalize, multiply, getLastCharacter, Animal } from "./functions";

test("capitalize function capitalizes the first letter of a word", () => {
    expect(capitalize("hello")).toBe("Hello");
});
   
test("multiply function multiplies two numbers correctly", () => {
    expect(multiply(2, 3)).toBe(6);
});

test("getLastCharacter function returns the last character correctly", () => {
    expect(getLastCharacter("Hello")).toBe("o");
});

const cat = new Animal("cat", "meow", 12);
test("Animals are not humans", () => {
    expect(cat.isHuman).toBeFalsy();
});

test("Cats go meow", () => {
    expect(cat.sound).toBe("meow");
});