export function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function getLastCharacter(word: string): string {
    return word[word.length - 1];
};

export class Animal {
    isHuman: boolean;
    kind: string;
    sound: string;
    age: number;
    constructor(kind: string, sound: string, age: number){
        this.isHuman = false;
        this.kind = kind;
        this.sound = sound;
        this.age = age;
    }
};
