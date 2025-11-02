export type activeIcon = "qs-list" | "ai-support" | "";
export type SidebarMain_Props = {
    option : activeIcon;
    handleOptions : (str : activeIcon) => void;
}
export type SidebarChild_Props = {
    option : activeIcon;
}