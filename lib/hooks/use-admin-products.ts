import { useEffect, useState, useCallback } from "react";
import { DBProduct } from "@/lib/db";

interface Product extends DBProduct {
  category_name?: string;
  custom_price?: number;
  is_available?: boolean;
  out_of_stock?: boolean;
}

interface UseAdminProductsOptions {
  locationId?: string;
  categoryId?: string;
  search?: string;
  page?: number;
  limit?: number;
}

interface UseAdminProductsReturn {
  products: Product[];
  loading: boolean;
  error: Error | null;
  totalCount: number;
  refetch: () => Promise<void>;
  toggleAvailability: (productId: string, isAvailable: boolean) => Promise<void>;
  toggleStock: (productId: string, outOfStock: boolean) => Promise<void>;
  updateProduct: (productId: string, updates: Partial<Product>) => Promise<void>;
}

export function useAdminProducts({
  locationId,
  categoryId,
  search,
  page = 1,
  limit = 20,
}: UseAdminProductsOptions): UseAdminProductsReturn {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [totalCount, setTotalCount] = useState(0);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams();
      if (locationId) params.append("location", locationId);
      if (categoryId) params.append("category", categoryId);
      if (search) params.append("search", search);
      params.append("page", page.toString());
      params.append("limit", limit.toString());

      const response = await fetch(`/api/admin/products?${params.toString()}`);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      setProducts(data.products);
      setTotalCount(data.totalCount);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Unknown error"));
    } finally {
      setLoading(false);
    }
  }, [locationId, categoryId, search, page, limit]);

  const toggleAvailability = async (productId: string, isAvailable: boolean) => {
    if (!locationId) throw new Error("Location ID is required");

    try {
      const response = await fetch("/api/admin/products/availability", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId,
          locationId,
          isAvailable,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update availability");
      }

      // Update local state
      setProducts(prev =>
        prev.map(p =>
          p.id === productId ? { ...p, is_available: isAvailable } : p
        )
      );
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Unknown error"));
      throw err;
    }
  };

  const toggleStock = async (productId: string, outOfStock: boolean) => {
    if (!locationId) throw new Error("Location ID is required");

    try {
      const response = await fetch("/api/admin/products/stock", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId,
          locationId,
          outOfStock,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update stock");
      }

      // Update local state
      setProducts(prev =>
        prev.map(p =>
          p.id === productId ? { ...p, out_of_stock: outOfStock } : p
        )
      );
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Unknown error"));
      throw err;
    }
  };

  const updateProduct = async (productId: string, updates: Partial<Product>) => {
    try {
      const response = await fetch(`/api/admin/products/${productId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...updates, locationId }),
      });

      if (!response.ok) {
        throw new Error("Failed to update product");
      }

      // Refetch to get updated data
      await fetchProducts();
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Unknown error"));
      throw err;
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    products,
    loading,
    error,
    totalCount,
    refetch: fetchProducts,
    toggleAvailability,
    toggleStock,
    updateProduct,
  };
}