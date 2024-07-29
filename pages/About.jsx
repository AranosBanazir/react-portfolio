import AboutCard from "../components/AboutCard"
import aboutInfo from "../utils/aboutInfo"
export default function AboutPage() {

    const styles = {
        card:{
            width: 'auto',
            backgroundColor: '#455561',
            marginTop: '20px',
            marginRight: '20px',
          
            fontSize: '20px',
            fontWeight: 'bold'
        },
        header:{
            borderBottom: '3px solid black',
            lineHeight: '3rem',
            color: '#E5D0CC',
            textShadow: '-2px 3px black'
        },

    }

    return (
        <>
            <section className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-6">
                        <img className="portrait" src="/images/pfp.jpg" alt="" />
                    </div>

                    <div className="col-sm-12 col-md-6 mt-5 w-100">
                        

                        {aboutInfo.map(({title, text})=>{
                            return <AboutCard text={text} title={title} key={title} styles={styles}/>
                        })}

                        
                    </div>
                </div>

            </section>
        </>
    )
}