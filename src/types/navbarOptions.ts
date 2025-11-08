export type activeIcon = "Questions" | "Ask LUMEN" | "";
export type SidebarMain_Props = {
    option : activeIcon;
    handleOptions : (str : activeIcon) => void;
}
export type SidebarChild_Props = {
    option : activeIcon;
    closeSidebar : (str : activeIcon) => void;
    handle_question_number : (indx : number) => void;
}

export type question_type = {
    id: string;
    qs_name: string;
    description: string;
    level: "easy" | "medium" | "hard";
};