import { Hsml } from "prest-lib/dist/hsml";

export function prettify(hsml: any): string {
    return JSON.stringify(hsml, null, 4)
    .replace(/\[\s+"/mg, `["`)
    .replace(/",\s+"(.*)"\s+]/mg, ', "$1"]')
    .replace(/,\s+\[(\s+)\[/mg, ', [$1[');
}

export function isEqual(txt: string, current: Hsml, expect: Hsml): void {
    const equal = JSON.stringify(current) === JSON.stringify(expect);
    if (!equal) {
        console.error(txt);
        console.log("current:", prettify(current));
        console.log("expect :", prettify(expect));
    }
}
