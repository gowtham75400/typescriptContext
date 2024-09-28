import {  useState } from "react"

export interface Person {
    name:string,
    age:number,
    isMarried:boolean
}

const Person = (props:Person) => {
    // const [toggle,setToggle] = useState<boolean | null>(null)

    // const display = () => {
    //     setToggle((prev) => !prev)
    // }


    const [personBio , setPersonBio] = useState<boolean | null | string>(null)

    const Bio = (event : React.ChangeEvent<HTMLInputElement>) => {
        setPersonBio(event.target.value)
    }

    // const BioFrom = (event : React.ChangeForm<HTMLInputElement> => {
    // })
    
    return (
    <div>
        {/* {toggle && (
            <>
                <h2>Name : {props.name}</h2>
                <h2>Age :{props.age}</h2>
                <h2>IsMarried :{props.isMarried ? "is Married" : "is Single"}</h2>
            </>
    )}  <>
    <button onClick={display}>Click toggle</button>
    </> */}

        <h2>Name : {props.name}</h2>
        <h2>Age :{props.age}</h2>
        <h2>IsMarried :{props.isMarried ? "is Married" : "is Single"}</h2>

            <div>
            <p>
                {props.name} Bio : {!personBio ? "No bio " : personBio}
                <input onChange={Bio} />
            </p>
            </div>
        </div>
    );
}

export default Person