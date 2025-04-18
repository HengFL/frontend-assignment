import React from "react";
import { matchPath } from "react-router-dom";

import SidebarNavListItem from "./SidebarNavListItem";
import SidebarNavList from "./SidebarNavList";

const reduceChildRoutes = (props) => {
  const { items, page, depth, currentRoute } = props;

  if (page.children) {
    const open = page.href
      ? !!matchPath(
          {
            path: page.href,
            end: false,
          },
          currentRoute
        )
      : false;

    items.push(
      <SidebarNavListItem
        depth={depth}
        icon={page.icon}
        key={page.title}
        badge={page.badge}
        open={!!open}
        title={page.title}
        type={page.type}
        href={page.href}
        isLogin={page.isLogin}
      >
        <SidebarNavList depth={depth + 1} pages={page.children} />
      </SidebarNavListItem>
    );
  } else {
    items.push(
      <SidebarNavListItem
        depth={depth}
        href={page.href}
        icon={page.icon}
        key={page.title}
        badge={page.badge}
        title={page.title}
        type={page.type}
        isLogin={page.isLogin}
      />
    );
  }

  return items;
};

export default reduceChildRoutes;
