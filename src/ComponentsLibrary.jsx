import { Button } from "./components/Button"
import { GroupCell } from "./components/GroupCell"

const ComponentLibrary = () => {
    return (
        <>
            <Button type='primary' size='main'>Лучшие моменты</Button>
            <div className="grid grid-cols-4 gap-2">
                <GroupCell type='default' groupName='Super Best Words' words='12' learningCurve='4' />
                <GroupCell type='starred' groupName='Super Best Words' words='34' learningCurve='6' />
                <GroupCell type='high' groupName='Super Best Words' words='3' learningCurve='2' />
                <GroupCell type='default' groupName='Super Best Words' words='27' learningCurve='2' />
                <GroupCell type='high' groupName='Super Best Words' words='31' learningCurve='2' />
            </div>
        </> 
    )
}

export { ComponentLibrary }