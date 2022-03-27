import { FC } from 'react'

const ComingSoonLayout: FC = ({ children }) => (
  <div className="flex flex-col justify-end gap-10 pl-16 h-full max-h-[625px] pb-8">
    <h1 className="text-5xl text-orange">{children}</h1>
    <span className="text-8xl font-extralight self-start">
      COMING
      <br />
      SOON...
    </span>
  </div>
)

export default ComingSoonLayout
