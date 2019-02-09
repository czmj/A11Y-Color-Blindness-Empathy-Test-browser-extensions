function loadTests() {
    const vision = window.localStorage.getItem("vision");
    const colorBlindness = window.localStorage.getItem("colorBlindness");

    console.log(vision);
    console.log(colorBlindness);
}

loadTests();