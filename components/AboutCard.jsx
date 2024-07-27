export default function AboutCard({title, text, styles}){

    
    return (
        <>
        <div className="">
            <div className="card" style={styles.card}>
                <div className="card-body">
                    <h2 className="card-title oswald-family" style={styles.header}>{title}</h2>
                    <p className="oswald-family light-hover">{text}</p>
                </div>
            </div>
            </div>
        </>
    )

}