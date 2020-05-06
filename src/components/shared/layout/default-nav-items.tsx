import { Link } from "gatsby"
import React from "react"

import { NavItem, Show } from "../navigation"

export const defaultNavItems: NavItem[] = [
  {
    item: <Link to="/blog">Blog</Link>,
    key: "/blog",
    show: Show.Always,
  },
  {
    item: <Link to="/projects">Projects</Link>,
    key: "/projects",
    show: Show.Always,
  },
]
