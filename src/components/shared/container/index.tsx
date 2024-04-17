import { ReactNode } from "react"

interface contain {
    children: ReactNode
}

export default function Container({children}:contain) {
    return (
      <div className="flex flex-col max-w-[1480px] w-[96%]">
        {children}
      </div>
    )
  }