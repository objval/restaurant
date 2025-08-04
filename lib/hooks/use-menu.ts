import { useEffect, useState } from "react";
import { MenuItem } from "@/lib/menu-data";

interface UseMenuOptions {
  locationId: string;
  category?: string;
  search?: string;
}

interface UseMenuReturn {
  items: MenuItem[];
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

export function useMenu({ locationId, category, search }: UseMenuOptions): UseMenuReturn {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchMenu = async () => {
    try {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams();
      params.append("location", locationId);
      if (category) params.append("category", category);
      if (search) params.append("search", search);

      const response = await fetch(`/api/menu?${params.toString()}`);
      if (!response.ok) {
        throw new Error("Failed to fetch menu");
      }

      const data = await response.json();
      setItems(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Unknown error"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, [locationId, category, search]);

  return {
    items,
    loading,
    error,
    refetch: fetchMenu,
  };
}