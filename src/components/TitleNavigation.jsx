import { BasicIcon } from "./BasicIcons"

const TitleNavigation = ({ children, isBack, isClose }) => {
  return (
    <div className="flex justify-between font-stwSemibold text-t-section">
      <div className="size-6">
        {isBack && <BasicIcon type='arrowLeft' style='size-6 fill-none stroke-m stroke-black' />}
      </div>
      {children}
      <div className="size-6">
        {isClose && <BasicIcon type='basicCross' style='size-6 fill-none stroke-m stroke-black' />}
      </div>
    </div>
  )
}

export { TitleNavigation }