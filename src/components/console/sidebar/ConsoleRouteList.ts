export interface ConsoleRouteListProps {
  name: string
  route: string
}
export const ConsoleRouteList: ConsoleRouteListProps[] = [
  {
    name: "메뉴",
    route: "/console/menu",
  },
  {
    name: "카테고리",
    route: "/console/category",
  },
  {
    name: "옵션그룹",
    route: "/console/option-group",
  },    
];