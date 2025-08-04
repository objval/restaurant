import { useEffect, useState } from "react";
import { LocationData } from "@/lib/locations";

interface UseLocationsReturn {
  locations: LocationData[];
  loading: boolean;
  error: Error | null;
}

export function useLocations(): UseLocationsReturn {
  const [locations, setLocations] = useState<LocationData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/api/locations");
        if (!response.ok) {
          throw new Error("Failed to fetch locations");
        }

        const data = await response.json();
        setLocations(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error"));
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  return {
    locations,
    loading,
    error,
  };
}