import { Hsmls, Hsml, HsmlAttrOnData, HsmlAttrs } from "prest-lib/dist/hsml";

function h(tag: string, ...childs: Hsml[]): Hsml;
function h(tag: string, attr: HsmlAttrs, ...childs: Hsml[]): Hsml;
function h(tag: string, attr?: HsmlAttrs | Hsml, child?: Hsml): Hsml {
    return {} as any;
}

const onlyTag = h("div#app");
const tagWithText = h("p", "Lorem Ipsum");
const tagWithSeveralText = h("p", "Lorem\n", "Ipsum\n");

const tagWithHsml = h("div#app",
    h("p", "paragrah"));
const tagWith2Hsml = h("div#app",
    h("p", "paragraph"),
    h("p", "another paragraph"));
const tagWithHsmlAndText = h("div#app",
    "this is my app",
    h("p", "paragraph"),
    "footer text");

const tagWithAttrs = h("div#app", { class: "app" });
const tagWithAttrsText = h("div#app", { class: "app" }, "special");
const tagWithAttrsHsml = h("div#app", { class: "app" },
    h("p", "paragraph"));
const tagWithAttrsTextHsml = h("div#app", { class: "app" },
    "Header text",
    h("p", "paragraph", h("b", "strong")),
    "Footer text"
);
