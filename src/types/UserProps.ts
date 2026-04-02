export type UserProps = {
    name?: string;
    info?: {id: number};
    handleDelete?:() => void;
};