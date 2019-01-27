import { Hsml, HsmlAttrs } from "prest-lib/dist/hsml";

function isPrimitive(item: any): item is number | string | boolean {
    return (typeof item === "string")
        || (typeof item === "number")
        || (typeof item === "boolean");
}

function isHsmlEl(item: any): item is Hsml {
    return isPrimitive(item)
        || (typeof item === "function")
        || (typeof item === "object" && item["render"])
        || Array.isArray(item)
        ? true
        : false;
}

export function h(tag: string, ...childs: Hsml[]): Hsml;
export function h(tag: string, attr?: HsmlAttrs, ...childs: Hsml[]): Hsml;
export function h(tag: string, attr?: HsmlAttrs | Hsml, ...child: Hsml[]): Hsml {
    if (attr) {
        const hasChild = child && child.length;
        const isChildText = hasChild && (child.length === 1) && isPrimitive(child[0]);
        const isAttrText = isPrimitive(attr);
        if (isHsmlEl(attr)) {
            // attr = hsml obj
            return [tag, hasChild
                    ? [attr, ...child]
                    : isAttrText ? attr : [attr]] as any;
        } else {
            // attr = attributes
            const result = [tag, attr] as any[];
            if (hasChild) {
                result.push(isChildText
                    ? child[0]
                    : child);
            }
            return result as Hsml;
        }
    }
    return [tag];
}
