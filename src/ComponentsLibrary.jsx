import { Button } from "./components/Button"
import { GroupCell } from "./components/GroupCell"

const ComponentLibrary = () => {
    return (
        <div className="bg-mono-200">
            <Button type='primary' size='main'>Лучшие моменты</Button>
            <div className="grid grid-cols-3 gap-2">
                <GroupCell groupName='Super Best Words' words='12' learningCurve='4' isRaised={true} isStarred={false} />
                <GroupCell groupName='Super Best Words' words='34' learningCurve='6' isRaised={false} isStarred={false} />
                <GroupCell groupName='Super Best Words' words='3' learningCurve='2' isRaised={false} isStarred={true} />
                <GroupCell groupName='Super Best Words' words='27' learningCurve='2' isRaised={false} isStarred={false} />
                <GroupCell groupName='Super Best Words' words='31' learningCurve='2' isRaised={true} isStarred={false} />
                <GroupCell groupName='Super Best Words' words='12' learningCurve='4' isRaised={false} isStarred={false} />
                <GroupCell groupName='Super Best Words' words='34' learningCurve='6' isRaised={false} isStarred={false} />
                <GroupCell groupName='Super Best Words' words='34' learningCurve='6' isRaised={true} isStarred={false} />
                <GroupCell groupName='Super Best Words' words='3' learningCurve='2' isRaised={false} isStarred={false} />
                <GroupCell groupName='Super Best Words' words='27' learningCurve='2' isRaised={true} isStarred={false} />
            </div>
        </div> 
    )
}

export { ComponentLibrary }