import { ReactNode } from "react"

import { avatarRmjordas, avatarRmoran } from "../assets"

export interface Content {
  /**
   * The quote can either be a plain string or a React node. Use a React node to
   * be able to use `em`, `strong`, etc..
   */
  readonly quote: string | ReactNode
  /** Name of the author of the quote. */
  readonly author: string
  /** Optional title to be displayed below the author's name. */
  readonly title?: string
  /**
   * The image associated with the author of the quote. If not provided, a
   * default image will be used.
   */
  readonly avatar?: string
}

export const content: readonly Content[] = [
  {
    quote: "Best NGO ever!",
    author: "Rodger Jordas",
    title: "Normal guy",
    avatar: avatarRmjordas,
  },
  {
    quote: "What can I say, I just loved Axolotl, they are soooo quite!",
    author: "Damon Clark",
    title: "Normal guy",
  },
  {
    quote: "With such a cool name, it was impossible to say no! ",
    author: "Aaron Garton",
    title: "Normal guy",
  },
  {
    quote:
      "Deserunt est aliquip magna aliqua duis quis mollit officia reprehenderit sunt sunt tempor adipisicing.",
    author: "Roy Moran",
    title: "Normal guy",
    avatar: avatarRmoran,
  },
  {
    quote:
      "Sunt amet enim ullamco ad labore eiusmod commodo occaecat irure ut ad aliquip anim tempor. Officia consequat reprehenderit dolor nisi amet elit eu do. Laboris enim culpa eu dolore irure in mollit. Incididunt do dolore sunt occaecat ea laboris dolor. Cupidatat consectetur ut consectetur consequat aliquip nisi cillum officia. Ea sunt aute ad voluptate fugiat cillum enim est dolor aliqua id. Proident cupidatat labore consequat esse ea nostrud ex in elit.",
    author: "GreenWithMV",
    title: "Normal guy",
  },
]
