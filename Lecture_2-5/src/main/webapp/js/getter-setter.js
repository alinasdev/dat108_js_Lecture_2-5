"use strict";

class Person {
    #fornavn;
    #etternavn;
    #fdato;

    constructor(fornavn, etternavn) {
        this.#fornavn = fornavn;
        this.#etternavn = etternavn;
        this.#fdato = new Date();
    }

    set alder(alder) {
        const faar = this.#fdato.getFullYear() - alder;
        this.#fdato.setYear(faar);
    }

    get alder() {
        const now = new Date();
        return now.getFullYear() - this.#fdato.getFullYear();
    }

    get navn() {
        return `${this.#fornavn} ${this.#etternavn}`;
    }
}

const p = new Person('Ole', 'Persen');

p.alder = 22;         // Kjører Person sin set metode alder(22)
console.log(`${p.navn} er ${p.alder} år gammel`); // Kjører Person sine get metoder navn() og alder()
