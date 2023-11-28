export function slugify(str: string): string {
    // Convert the string to lowercase.
    str = str.toLowerCase();

    // Remove any leading or trailing spaces.
    str = str.trim();

    // Replace any spaces, dashes, or underscores with a hyphen.
    str = str.replace(/[-\s_]/g, "-");

    // Remove any special characters.
    str = str.replace(/[^\w-]/g, "");

    // Convert any accented characters to their non-accented equivalents.
    str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    return str;
}

export function generateBoard() {
    const data = require("../data/tiles.json");
    const indexArr: number[] = [];
    while (indexArr.length < 24) {
        const random = Math.floor(Math.random() * data.length);
        if (!indexArr.includes(random)) {
            indexArr.push(random);
        }
    }
    const arrLength = [5, 5, 4, 5, 5];
    const tileSets: string[][] = [];
    arrLength.forEach((length, index) => {
        const subArray = indexArr.slice(0, length).map((index) => data[index]);
        if (index === 2) {
            subArray.splice(2, 0, "Loves JS");
        }
        tileSets.push(subArray);
        indexArr.splice(0, length);
    });
    return tileSets;
}
