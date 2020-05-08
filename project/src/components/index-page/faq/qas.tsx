import React, { ReactNode } from "react"

export interface Qa {
  readonly question: string | ReactNode
  readonly answer: string | ReactNode
}

export const qas: readonly Qa[] = [
  {
    question: "Why the name AxoCare?",
    answer: (
      <p>
        Well it's the merge between Axolotl and to care. To be honest it was the
        first time that came up to my mind 😅 Officia eu quis laborum nulla nisi
        minim pariatur officia esse esse. Ea elit adipisicing eiusmod duis non
        est ex enim aliqua mollit. Cupidatat veniam minim laborum commodo
        consequat nulla. Voluptate et sunt Lorem proident qui exercitation dolor
        aliquip.
      </p>
    ),
  },
]
