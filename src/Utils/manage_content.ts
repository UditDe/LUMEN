export const truncate_string = (str : string) : string => {
    const max_len = 15;
    if(str.length > max_len) return str.slice(0, max_len) + "...";
    else return str;
}
export const clean_spaces = (desc : string) : string => desc.trim().replace(/^\s+/gm, "");