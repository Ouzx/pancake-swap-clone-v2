import StatSection from "../StatSection/StatSection";

const CakeStats = () => {
    return (
        <div>
            <div style={{display: "flex"}}>
                <StatSection />
                <StatSection />
                <StatSection />
            </div>
            <div style={{display: "flex"}}>
                <StatSection />
                <StatSection />
                <StatSection />
            </div>
        </div>
    )
}

export default CakeStats;
