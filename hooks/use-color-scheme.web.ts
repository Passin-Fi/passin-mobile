import { useState } from "react";

/**
 * To support static rendering, this value needs to be re-calculated on the client side for web
 */
export function useColorScheme() {
    const [hasHydrated, setHasHydrated] = useState(false);
    return "dark";

    // useEffect(() => {
    //     setHasHydrated(true);
    // }, []);

    // const colorScheme = useRNColorScheme();

    // if (hasHydrated) {
    //     return colorScheme;
    // }

    // return "dark";
}
