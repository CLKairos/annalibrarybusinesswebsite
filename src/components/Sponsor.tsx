

// @ts-ignore
function Sponsor(data) {
    return (
        <div className={"card-contents"}>
            <img src={data.image}/>
            <div className={"card-text"}>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
            </div>
        </div>
    );
}

export default Sponsor;