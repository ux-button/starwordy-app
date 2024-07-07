import { Icon } from "./Icon"
import { ProgressBar } from "./ProgressBar"

const GroupCell = ({ type, groupName, words }) => {
    const componentType = {
        default: {
            bg: 'bg-white',
            starIcon: 'fill-none stroke-black opacity-40 hover:opacity-70 stroke-l size-8'
        },
        high: {
            bg: 'bg-lime-200',
            starIcon: 'fill-none stroke-black opacity-40 hover:opacity-70 stroke-l size-8',
            bar: '',
        },
        starred: {
            bg: 'bg-daisy-200',
            starIcon: 'fill-daisy-400 hover:fill-daisy-300 size-8',
        },
    }

    return (
        <div className={componentType[type].bg + ' py-5 px-4 rounded-3xl space-y-2'}>
            <div className="flex justify-between">
                <Icon type='star' style={componentType[type].starIcon} />
                <Icon type='rise' style='fill-black size-8' />
            </div>
            <div className="space-y-1 h-20">
                <div className="font-stwSemibold text-t-subsection">{groupName}</div>
                <div className="font-stwRegular text-t-default ">{`${words} words`}</div>
            </div>
            <ProgressBar size='8' />
        </div>
    )
}

export { GroupCell }