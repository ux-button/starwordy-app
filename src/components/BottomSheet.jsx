import { Button } from "./Button"
import { TitleNavigation } from "./TitleNavigation"

const BottomSheet = ({ children, title, isBack, isClose }) => {
  return (
    <div className="p-4 w-full">
      <TitleNavigation isBack={isBack} isClose={isClose}>{title}</TitleNavigation>
      <Button type='primary' size='large' width='full'>Save</Button>
    </div>
  )
}

export { BottomSheet }