import { setTiles } from "../feature/tile/tile-slice";
import { useAppDispatch } from "../hooks/redux";

export type JsonItem = {
    id: string;
    content: string;
    slug: string;
    active: boolean;
};

export function generateBoard() {
    const dispatch = useAppDispatch();
    // TODO fix JSON to include title, slug, id ... etc
    const data: JsonItem[] = require("../data/tiles.json");
    const indexArr: number[] = [];
    while (indexArr.length < 24) {
        const random = Math.floor(Math.random() * data.length);
        if (!indexArr.includes(random)) {
            indexArr.push(random);
        }
    }
    const initialArr = indexArr.forEach((index) => data[index]);
    // This seems silly but We need the array[2] to be 5 long AFTER we splice in the new item
    const arrLengths = [5, 5, 4, 5, 5];
    const tileSets: JsonItem[][] = [];
    arrLengths.forEach((length, index) => {
        const subArray = indexArr.slice(0, length).map((index) => data[index]);
        if (index === 2) {
            subArray.splice(2, 0, {
                id: "asdf42069",
                content: "Loves JS",
                slug: "loves-js",
                active: false,
            });
        }
        tileSets.push(subArray);
        indexArr.splice(0, length);
    });

    return tileSets;
}

export function getTileDataBySlug(slug: string | undefined) {
    if (!slug) {
        return null;
    }
    const data: JsonItem[] = require("../data/tiles.json");
    return data.find((item) => item.slug === slug);
}

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
