import './Intro.css';

const Intro = () => {
    return(
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hi, my name is</h2>
                    <h1 className="i-name">Alejandro Hernández Quintero</h1>
                    <div className="i-titles">
                        <div className="i-titles-wrapper">
                            <div className="i-titles-item">Software engineering student</div>
                            <div className="i-titles-item">Web developer</div>
                            <div className="i-titles-item">Boyfriend</div>
                            <div className="i-titles-item">Brother</div>
                            <div className="i-titles-item">Son</div>
                        </div>
                    </div>
                    <p className="i-description">
                        I'm currently studying at the Surcolombiana University
                        in Neiva, Huila. I'm from Bogotá and my favorite activity is to spend
                        time with my family and friends.
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
            </div>
        </div>   
    )
}

export default Intro;