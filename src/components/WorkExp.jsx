// styles 
import "../scss/components/_work-exp.scss"

export default function WorkExp() {
    return (
        <div className="work-experience">
            <h1 className="work-experience__title">
                Work Experience
            </h1>
            <div className="job">
                <h1 className="job__title">Nail technician <span className="job__place">Self-employed</span></h1>
                <p className="job__time-period">March 2019 - Current time; March 2016 - May 2018 <span className="job__separator">|</span> Ukraine, Kyiv</p>
                <ul className="job__skills">
                    <li className="job__skill">
                        Optimized workflow process; including inventory restocking.
                    </li>
                    <li className="job__skill">
                        Analyzing and sorting out information.
                    </li>
                    <li className="job__skill">
                        Constant skill maintenance and impovement.
                    </li>
                    <li className="job__skill">
                        Photography and photo editing; including photoshop.
                    </li>
                    <li className="job__skill">
                        Appointment coordination.
                    </li>
                    <li className="job__skill">
                        Social-media account managment.
                    </li>
                    <li className="job__skill">
                        Self-advertisement and building personal brand.
                    </li>
                    <li className="job__skill">
                        Writing educationally themed texts.
                    </li>
                </ul>
            </div>
            <div className="job">
                <h1 className="job__title">Nail technician <span className="job__place">"Wonderful life" salon</span></h1>
                <p className="job__time-period">May 2018 - March 2019 <span className="job__separator">|</span> Ukraine, Kyiv</p>
                <ul className="job__skills">
                    <li className="job__skill">
                        Provided procedure within according time for it.
                    </li>
                    <li className="job__skill">
                        Maintained small talk with clients.
                    </li>
                    <li className="job__skill">
                        Light restock managment.
                    </li>
                    <li className="job__skill">
                        Resolved conflicts.
                    </li>
                </ul>
            </div>
            <div className="job">
                <h1 className="job__title">Merchandiser <span className="job__place">Merchandising agency</span></h1>
                <p className="job__time-period">October 2015 - December 2015 <span className="job__separator">|</span> Ukraine, Kyiv</p>
                <ul className="job__skills">
                    <li className="job__skill">
                        Wrote price reports.
                    </li>
                    <li className="job__skill">
                        Organized products according to demands.
                    </li>
                    <li className="job__skill">
                        Worked with product displays.
                    </li>
                </ul>
            </div>
            <div className="job">
                <h1 className="job__title">Assistance <span className="job__place">Fkisit Dvnz "KNEU Im. V. Hetʹmana"</span></h1>
                <p className="job__time-period">April 2015 - June 2015 <span className="job__separator">|</span> Ukraine, Kyiv</p>
                <ul className="job__skills">
                    <li className="job__skill">
                        Organizing information.
                    </li>
                    <li className="job__skill">
                        Managed and maintained documentation.
                    </li>
                </ul>
            </div>
        </div>
    );
}