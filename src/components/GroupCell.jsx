import { useEffect, useState } from "react"
import { Icon } from "./Icon"
import { ProgressBar } from "./ProgressBar"

const GroupCell = ({ groupName, words, learningCurve, isStarred, isRaised }) => {
    const [type, setType] = useState({})

    useEffect(() => {
        // Default state params
        if (!isStarred && !isRaised) {
            setType({
                ...type,
                bg: 'bg-white',
                iconsBlock:
                    <div className="flex justify-between">
                        <Icon type='star' style='fill-none stroke-black opacity-40 hover:opacity-70 stroke-l size-8' />
                        <Icon type='rise' style='fill-black size-8' />
                    </div>,
            })
        }

        // Raised state params
        if (!isStarred && isRaised) {
            setType({
                ...type,
                bg: 'bg-lime-200',
                iconsBlock:
                    <div className="flex justify-between">
                        <Icon type='star' style='fill-none stroke-black opacity-40 hover:opacity-70 stroke-l size-8' />
                        <Icon type='rise' style='fill-black size-8' />
                    </div>,
            })
        }

        // Starred state params
        if (isStarred && !isRaised) {
            setType({
                ...type,
                bg: 'bg-daisy-200',
                iconsBlock:
                    <div className="flex justify-between">
                        <Icon type='star' style='fill-daisy-400 hover:fill-daisy-300 size-8' />
                        <Icon type='rise' style='fill-black size-8' />
                    </div>,
            })
        }
    }, [isStarred, isRaised])


    return (
        <div className={`${type.bg} py-5 px-4 rounded-3xl space-y-2`}>
            {type.iconsBlock}
            <div className="space-y-1 h-20">
                <div className="font-stwSemibold text-t-subsection">{groupName}</div>
                <div className="font-stwRegular text-t-default ">{`${words} words`}</div>
            </div>
            <ProgressBar size='8' learningCurve={learningCurve} />
        </div>
    )
}

export { GroupCell }