import { h } from "./";
import { Hsml } from "prest-lib/dist/hsml";

const onlyTag = h("div#app");
const tagWithText = h("p", "Hello World");
const tagWithSeveralText = h("p", "Lorem\n", "Ipsum\n");

const tagWithHsml = h("div.app",
    h("p", "paragraph"));
const tagWith2Hsml = h("section.app",
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
    "Footer text");

const todo = (text: string): Hsml => h("li",
    h("a", { href: "#" }, text));

const complex = h("div#todo-app",
    h("h2", "Todo App"),
    h("div.main",
        h("input.input-text", { type: "checkbox" }, "placeholder"),
        h("button", { onclick: ["click" ]}),
        h("ul.todos",
            ...["first", "second", "third"].map(txt => todo(txt)))));

// Tests

function isEqual(value: Hsml, expect: Hsml) {
    console.log("val:", JSON.stringify(value, null, 2))
    console.log("exp:", JSON.stringify(expect, null, 2));
    return JSON.stringify(value) === JSON.stringify(expect);
}

console.assert(isEqual(onlyTag, ["div#app"]));
console.assert(isEqual(tagWithText, ["p", "Hello World"]));
console.assert(isEqual(tagWithSeveralText, ["p", ["Lorem\n", "Ipsum\n"]]));
console.assert(isEqual(tagWithHsml, ["div.app", ["p", "paragraph"]]));
console.assert(isEqual(tagWith2Hsml, ["section.app", [
    ["p", "paragraph"],
    ["p", "another paragraph"]
]]));
console.assert(isEqual(tagWithHsmlAndText, ["div#app", [
    "this is my app",
    ["p", "paragraph"],
    "footer text"
]]));
console.assert(isEqual(tagWithHsmlAndText, ["div#app", [
    "this is my app",
    ["p", "paragraph"],
    "footer text"
]]));
console.assert(isEqual(tagWithAttrs, ["div#app", { class: "app" }]));
console.assert(isEqual(tagWithAttrsText, ["div#app", { class: "app"},
    "special"
]));
console.assert(isEqual(tagWithAttrsHsml, ["div#app", { class: "app" }, [
    ["p", "paragraph"]
]]));
console.assert(isEqual(tagWithAttrsTextHsml, ["div#app", { class: "app" }, [
    "Header text",
    ["p", [
        "paragraph",
        ["b", "strong"]
    ]],
    "Footer text"
]]));
console.assert(isEqual(complex, ["div#todo-app", [
    ["h2", "Todo App"],
    ["div.main", [
        ["input.input-text", { type: "checkbox" }, "placeholder"],
        ["button", { onclick: ["click" ]}],
        ["ul.todos", [
            ["li",
                [["a", { href: "#" }, "first"]]],
            ["li",
                [["a", { href: "#" }, "second"]]],
            ["li",
                [["a", { href: "#" }, "third"]]]
        ]] as any
    ]]
]]));
