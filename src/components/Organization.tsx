

// @ts-ignore
function Organization(data) {
    return (
        <div className={"card-contents"}>
            <img src={data.image}/>
            <div className={"card-text"}>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <a href={data.ctalink}>{data.ctatext}</a>
            </div>
        </div>
    );
}

export default Organization;