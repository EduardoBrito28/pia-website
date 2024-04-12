import { ReactNode } from "react"

interface contain {
    children: ReactNode
}

export default function Container({children}:contain) {
    return (
      <div className="w-full px-60 flex flex-col">
        {children}
      </div>
    )
  }