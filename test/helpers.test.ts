import { div, a, ul, li, input, h2, button } from "../lib/helpers";
import { isEqual } from "./testutils";

const todo = (text: string) => li([
    a({ href: "#" }, [text])
]);

isEqual("Todo App",
    div("#todo-app", [
        h2(["Todo App"]),
        div(".main", [
            input(".input-text", { type: "checkbox" }, ["placeholder"]),
            button({ onclick: ["click" ]}),
            ul(".todos", ["first", "second", "third"].map(txt => todo(txt)))
        ])
    ]),
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
