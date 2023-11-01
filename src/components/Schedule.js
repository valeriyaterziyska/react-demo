import NavTabs from "./NavTabs";
import TabFirstDay from "./TabFirstDay";
import TabSecondDay from "./TabSecondDay";
import TabThirdDay from "./TabThirdDay";

export default function Schedule() {
    return (
        <div className="container">
            <div className="row me-row schedule" id="schedule">
                <h2 className="row-title content-ct">Event Schedule</h2>
                <div className="col-md-12">
                    
                    <NavTabs />

                    <div className="tab-content">
                        <TabFirstDay />
                        <TabSecondDay />
                        <TabThirdDay />
                    </div>
                </div>
            </div>
        </div>
    );
}