import { Tile, setTiles } from "../feature/tile/tile-slice";
import { useAppDispatch } from "../hooks/redux";

export type JsonItem = {
    id: string;
    content: string;
    slug: string;
    active: boolean;
};

export function generateBoard() {
    const dispatch = useAppDispatch();

    const data: JsonItem[] = require("../data/tiles.json");
    const indexArr: number[] = [];
    while (indexArr.length < 24) {
        const random = Math.floor(Math.random() * data.length);
        if (!indexArr.includes(random)) {
            indexArr.push(random);
        }
    }
    const initialArr = indexArr.map((index) => data[index]);
    const freeSpace: Tile = {
        id: "asdf42069",
        content: "Loves JS",
        slug: "loves-js",
        active: true,
        coordinates: {
            row: 2,
            column: 2,
        },
    };
    initialArr.splice(12, 0, freeSpace);
    for (let i = 0; i < initialArr.length; i++) {
        const row = Math.floor(i / 5);
        const column = i % 5;
        // @ts-ignore
        // console.log(
        //     `initialArr[i]: ${initialArr[i]?.content} ,row: ${row} column: ${column}, i: ${i}`
        // );
        initialArr[i].coordinates = {
            column,
            row,
        };
    }
    dispatch(setTiles(initialArr));
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
