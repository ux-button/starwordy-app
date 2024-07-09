import { Icon } from "./Icon"
import { ProgressBar } from "./ProgressBar"

const GroupCell = ({ groupName, words, learningCurve, isRaised, isStarred }) => {
  return (
    <div className={
      !isRaised && !isStarred
      ? 'bg-white py-5 px-4 rounded-3xl space-y-2'
      : isRaised && !isStarred
      ? 'bg-lime-200 py-5 px-4 rounded-3xl space-y-2'
      : !isRaised && isStarred
      ? 'bg-daisy-200 py-5 px-4 rounded-3xl space-y-2'
      : null
      }>
      <div className="flex justify-between">
        <Icon type='star' style={
          !isRaised && !isStarred
          ? 'fill-none stroke-whisper-900 opacity-30 hover:opacity-80 stroke-l size-8'
          : isRaised && !isStarred
          ? 'fill-none stroke-whisper-900 opacity-30 hover:opacity-80 stroke-l size-8'
          : !isRaised && isStarred
          ? 'fill-daisy-400 hover:fill-daisy-300 size-8'
          : null
        } />
        {
          !isRaised && !isStarred
          ? <Icon type='rise' style='fill-whisper-900 opacity-10 hover:opacity-20 size-8' />
          : isRaised && !isStarred
          ? <Icon type='rise' style='fill-lime-600 size-8' />
          : null
        }
      </div>
      <div className="space-y-1 h-20">
        <div className="font-stwSemibold text-t-subsection">
          {groupName}
        </div>
        <div className="font-stwRegular text-t-default text-whisper-900 opacity-70">
          {`${words} words`}
        </div>
      </div>
      <ProgressBar isDefault={!isRaised && !isStarred} learningCurve={learningCurve} />
    </div>
  )
}

export { GroupCell }