export default function AboutCard({title, text, styles}){

    
    return (
        <>
        <div className="">
            <div className="card" style={styles.card}>
                <div className="card-body">
                    <h2 className="card-title oswald-family" style={styles.header}>{title}</h2>
                    <p style={styles.text} className="oswald-family">{text}</p>
                </div>
            </div>
            </div>
        </>
    )

}