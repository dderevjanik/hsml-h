import { h } from "./";
import { Hsml } from "prest-lib/dist/hsml";

/**
 * Utils
 */

function prettify(hsml: any): string {
    return JSON.stringify(hsml, null, 4)
    .replace(/\[\s+"/mg, `["`)
    .replace(/",\s+"(.*)"\s+]/mg, ', "$1"]')
    .replace(/,\s+\[(\s+)\[/mg, ', [$1[');
}

function isEqual(txt: string, current: Hsml, expect: Hsml): void {
    const equal = JSON.stringify(current) === JSON.stringify(expect);
    if (!equal) {
        console.error(txt);
        console.log("current:", prettify(current));
        console.log("expect :", prettify(expect));
    }
}

/**
 * Tests
 */

isEqual("Tag Only",
    h("div#app"),
    ["div#app"]
);
isEqual("HSML element with text",
    h("p", "Hello World"),
    ["p", "Hello World"]
);
isEqual("HSML element with two text child",
    h("p", "Lorem\n", "Ipsum\n"),
    ["p", ["Lorem\n", "Ipsum\n"]]
);
isEqual("Nested HSML element with text",
    h("div.app", h("p", "paragraph")),
    ["div.app", [
        ["p", "paragraph"]]]
);
isEqual("Two nested HSML elmeent with text",
    h("section.app",
        h("p", "paragraph"),
        h("p", "another paragraph")),
    ["section.app", [
        ["p", "paragraph"],
        ["p", "another paragraph"]]]
);
isEqual("Nested Text and HSML element",
    h("div#app",
        "this is my app",
        h("p", "paragraph"),
        "footer text"),
    ["div#app", [
        "this is my app",
        ["p", "paragraph"],
        "footer text"]]
);
isEqual("Attributes",
    h("div#app", { class: "app" }),
    ["div#app", { class: "app" }]
);
isEqual("Attributes with text",
    h("div#app", { class: "app" },
        "special"),
    ["div#app", { class: "app"},
        "special"]
);
isEqual("Nested HSML with attributes and text",
    h("span",
        h("a", { href: "#" }, "textnoed")),
    ["span", [
        ["a", { href: "#" }, "textnoed"]]]
);
isEqual("Nested HSML with only text",
    h("div#app", { class: "app" },
        h("p", "paragraph")),
    ["div#app", { class: "app" }, [
        ["p", "paragraph"]]]
);
isEqual("Complex scenario",
    h("div#app", { class: "app" },
        "Header text",
        h("p", "paragraph", h("b", "strong")),
        "Footer text"),
    ["div#app", { class: "app" }, [
        "Header text",
        ["p", [
            "paragraph",
            ["b", "strong"]
        ]],
        "Footer text"]]
);
const todo = (text: string): Hsml => h("li",
    h("a", { href: "#" }, text));
isEqual("Todo App",
    h("div#todo-app",
        h("h2", "Todo App"),
        h("div.main",
            h("input.input-text", { type: "checkbox" }, "placeholder"),
            h("button", { onclick: ["click" ]}),
            h("ul.todos",
                ...["first", "second", "third"].map(txt => todo(txt))))),
    ["div#todo-app", [
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
        ]]]]
);
