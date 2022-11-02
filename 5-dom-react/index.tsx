/**
 * Nowadays Typescript is widely adopted library and almost every common npm is Typescript compatible. Even when is not compatible out of the box, it's very common to have an external lib to hadle with this: @types/lib-name.
 * To manipulate DOM and to work nicely with react, we also have types to it. Here we will not cover all the available types because the list is enormous but it will be enough to understand the concept.
 */

/**
 * DOM
 * Full list here: https://github.com/microsoft/TypeScript/blob/main/lib/lib.dom.d.ts
 */
const id: HTMLElement = document.getElementById("id")!; // Generic HTML element
const button: HTMLButtonElement = document.getElementById("button_id")!; // If we know the type of the element that we will receive
function handleClick(e: MouseEvent) { // There is also types to handle woth HTML events
    console.log("CLicked!");
}

/**
 * React
 */
// Use Interfaces instead of proptypes and default parameters instead of default-props
interface IProps {
    title: string,
    description?: string;
}
const Example1: React.FC<IProps> = (porps) => { // React as some component types, in this case was used the React.FunctionComponent
    const {
        title,
        description = 'Default description'
    } = props;

    return (
        <>
            <p>{title}</p>
            <p>{description}</p>
        </>
    );
}