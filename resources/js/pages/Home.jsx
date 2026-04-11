import React, { useEffect } from "react";
import { getProfileData } from "../data/authData";

function Home() {
    useEffect(() => {
        const profile = async () => {
            const data = await getProfileData();
            console.log(data);
        };
        profile();
    });

    return (
        <>
            <h1>Home</h1>
        </>
    );
}

export default Home;
