import { Hsml, HsmlAttrs } from "prest-lib/dist/hsml";

function isHsmlEl(item: any): item is Hsml {
    return (typeof item === "string")
        || (typeof item === "function")
        || (typeof item === "object" && item["render"])
        || Array.isArray(item)
        ? true
        : false;
}

export function h(tag: string, ...childs: Hsml[]): Hsml;
export function h(tag: string, attr: HsmlAttrs, ...childs: Hsml[]): Hsml;
export function h(tag: string, attr?: HsmlAttrs | Hsml, ...child: Hsml[]): Hsml {
    console.log(tag, attr, child);
    if (attr) {
        if (isHsmlEl(attr)) {
            // attr = hsml obj
            return [tag, (child && child.length)
                    ? [attr, ...child]
                    : attr] as any;
        } else {
            // attr = attributes
            const result = [tag, attr] as any[];
            if (child && child.length) {
                result.push(child.length === 1 && (typeof child[0] === "string")
                    ? child[0]
                    : child);
            }
            return result as Hsml;
        }
    }
    return [tag];
}
