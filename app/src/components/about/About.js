import './About.css';

const About = () => {
    return(
        <div className='a'>
            <div className='a-left'>
                <div className="a-card"></div>
                <div className="a-card-img"></div>
            </div>
            <div className='a-right'>
                <div className="a-right-wrapper">
                    <h1 className="a-title">About me</h1>
                    <p className="a-desc">I'm currently in the ninth semester. I've worked
                        with different programming lengugages such as 
                        Python, PHP, JAVA, JavaScript and some libraries 
                        such as React.js, Vue.js and Angular.js. Troughout
                        my career, I've developed different projects with the 
                        MERN and MEVN Stack, Laravel, Codeigniter and others.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;