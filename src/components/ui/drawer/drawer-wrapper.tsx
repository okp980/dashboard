import Logo from "../Logo/logo"
import { MdClose } from "react-icons/md"
import Scrollbar from "../scrollbar/scrollbar"

type DrawerWrapperProps = {
  hideTopBar?: boolean
  children: any
  onClose?: () => void
}

const DrawerWrapper: React.FunctionComponent<DrawerWrapperProps> = ({
  hideTopBar = false,
  children,
  onClose,
}) => {
  return (
    <div className="relative flex h-full flex-col bg-white">
      {!hideTopBar && (
        <div className="start-0 absolute top-0 z-30 mb-4 flex h-16 w-full items-center justify-between border-b border-border-200 border-opacity-75 px-5 md:mb-6 md:py-5 md:px-8">
          <Logo />
          <button
            onClick={onClose}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-200 text-body transition-all duration-200 hover:bg-accent hover:text-light focus:bg-accent focus:text-light focus:outline-none"
          >
            <MdClose className="h-2.5 w-2.5" />
          </button>
        </div>
      )}
      {/* End of header part */}
      <div className="h-full pt-16">
        <Scrollbar className="h-full w-full">{children}</Scrollbar>
      </div>
      {/* End of menu part */}
    </div>
  )
}

export default DrawerWrapper
