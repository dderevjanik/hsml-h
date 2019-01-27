import { Hsml } from "prest-lib/dist/hsml";

declare function hhelper(tags: string): Hsml;
declare function hhelper(hsmls: Hsml[]): Hsml;
declare function hhelper(tags: string, hsmls: Hsml[]): Hsml;
declare function hhelper(attr: {}): Hsml;
declare function hhelper(attr: {}, hsmls: Hsml[]): Hsml;
declare function hhelper(tags: string, attr: {}): Hsml;
declare function hhelper(tags: string, attr: {}, hsmls: Hsml[]): Hsml;

function h(tag: string, second?: Hsml[], third?: Hsml | Hsml[], fourth?: Hsml[]): Hsml {
    const result = [tag] as any[];
    if (second) {
        if (typeof second === "string") {
            // additional tags
            result[0] += second;
        } else if (Array.isArray(second) && (second.length === 1) && (typeof second[0] === "string")) {
            result.push(second[0]);
        } else {
            // attr or hsmls
            result.push(second);
        }
    }
    if (third) {
        if (Array.isArray(third) && (third.length === 1) && (typeof third[0] === "string")) {
            // hsmls with text only
            result.push(third[0]);
        } else {
            // attr of hsmls
            result.push(third);
        }
    }
    if (fourth) {
        if (Array.isArray(fourth) && (fourth.length === 1) && (typeof fourth[0] === "string")) {
            result.push(fourth[0]);
        } else {
            result.push(fourth);
        }
    }
    return result as Hsml;
}

function helper(tag: string) {
    return h.bind(null, tag) as typeof hhelper;
}

export const a = helper("a");
export const abbr = helper("abbr");
export const address = helper("address");
export const area = helper("area");
export const article = helper("article");
export const aside = helper("aside");
export const audio = helper("audio");
export const b = helper("b");
export const base = helper("base");
export const bdi = helper("bdi");
export const bdo = helper("bdo");
export const blockquote = helper("blockquote");
export const body = helper("body");
export const br = helper("br");
export const button = helper("button");
export const canvas = helper("canvas");
export const caption = helper("caption");
export const cite = helper("cite");
export const code = helper("code");
export const col = helper("col");
export const colgroup = helper("colgroup");
export const data = helper("data");
export const datalist = helper("datalist");
export const dd = helper("dd");
export const del = helper("del");
export const details = helper("details");
export const dfn = helper("dfn");
export const dialog = helper("dialog");
export const div = helper("div");
export const dl = helper("dl");
export const dt = helper("dt");
export const em = helper("em");
export const embed = helper("embed");
export const fieldset = helper("fieldset");
export const figcaption = helper("figcaption");
export const figure = helper("figure");


export const h1 = helper("h1");
export const h2 = helper("h2");
export const h3 = helper("h3");
export const span = helper("span");
export const i = helper("i");
export const strong = helper("strong");
export const ul = helper("ul");
export const li = helper("li");
export const nav = helper("nav");
export const header = helper("header");
export const html = helper("html");
export const section = helper("section");
export const input = helper("input");
export const textarea = helper("textarea");
export const img = helper("img");
export const table = helper("table");
export const tbody = helper("tbody");
export const thead = helper("thead");
export const label = helper("label");
export const tr = helper("tr");
export const td = helper("td");
export const th = helper("th");
export const p = helper("p");

