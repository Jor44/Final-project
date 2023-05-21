import { useNavigate } from "react-router"

export const Landing = () => {
    const navigate = useNavigate()

    return (
        <div className="landing-main">
            <div className="arrow">&#10140;</div>
            <button onClick={()=>navigate("/login")} className="landing-btn">Go to login page</button>
            <button onClick={()=>navigate("/no-ui")} className="landing-btn">See the list without UI</button>
        </div>
    )
}