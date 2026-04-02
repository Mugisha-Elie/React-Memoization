// import { memo } from "react"
import type { UserProps } from "../types/UserProps"

export const UserCard = ({name}: UserProps) => {
    console.log("Expensive UserCard is Loading...")

    return (
        <div
        className="p-4 bg-white shadow rounded"
        >
            <p>{name}</p>
        </div>
    )
}