/**
 * @icon Font Awesome
 * @website https://fontawesome.com/icons
 * @type NORMAL, NEW, COMING_SOON
 *  */
const pagesSection = [
  {
    href: "/todo_list",
    icon: 'fa-solid fa-clipboard-list',
    title: "Todo List",
    type: 'NORMAL',
    isLogin: false,
  },
  {
    href: "/users",
    icon: 'fa-solid fa-user',
    title: "Users",
    type: 'NORMAL',
    isLogin: false,
  },
];

const navItems = [
  {
    title: "",
    pages: pagesSection,
  },
];

export default navItems;
