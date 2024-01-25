let globalId = 0;
export function BusinessCard({name, description, links, interests}) {
    return <div style={{border: "gray 2px solid", padding: "15px", width: "500px", borderRadius: "9px"}}>
        <h1>{name}</h1>
        <p>{description}</p>
        <h3>Interests</h3>
        {interests.map((element) => {
            return <p key={globalId++}>{element}</p>
        })}
        <button><a href={links["linkedin"]}>LinkedIn</a></button>
        <button><a href={links["instagram"]}>Instagram</a></button>
        <button><a href={links["twitter"]}>Twitter</a></button>
    </div>
}