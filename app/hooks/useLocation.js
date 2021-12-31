import { useState, useEffect } from "react";
import * as Location from 'expo-location';

export const useLocation = () => {
    const [location, setLocation] = useState();
    const getLocation = async () => {
        try {
            const { granted } = await Location.requestForegroundPermissionsAsync();
            if (!granted) return;
            const { coords: { latitude, longitude } } = await Location.getLastKnownPositionAsync();
            setLocation({ latitude, longitude });
        }
        catch (error) {
            console.error("Error occured while getting location", error)
        }
    }


    useEffect(() => {
        getLocation();
    }, [])

    return { location };
}
