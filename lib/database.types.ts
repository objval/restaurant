export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      categories: {
        Row: {
          active: boolean | null
          created_at: string | null
          description: string | null
          display_order: number | null
          icon: string | null
          id: string
          name: string
          slug: string
          updated_at: string | null
        }
        Insert: {
          active?: boolean | null
          created_at?: string | null
          description?: string | null
          display_order?: number | null
          icon?: string | null
          id?: string
          name: string
          slug: string
          updated_at?: string | null
        }
        Update: {
          active?: boolean | null
          created_at?: string | null
          description?: string | null
          display_order?: number | null
          icon?: string | null
          id?: string
          name?: string
          slug?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      menu_1898: {
        Row: {
          active: boolean | null
          allergens: string[] | null
          calories: number | null
          category_id: string | null
          chef_special: boolean | null
          created_at: string | null
          description: string | null
          dietary: string[] | null
          display_order: number | null
          id: string
          image_url: string | null
          ingredients: string[] | null
          name: string
          popular: boolean | null
          prep_time: string | null
          price: number
          seasonal: boolean | null
          slug: string
          spice_level: number | null
          stock_status: string | null
          updated_at: string | null
        }
        Insert: {
          active?: boolean | null
          allergens?: string[] | null
          calories?: number | null
          category_id?: string | null
          chef_special?: boolean | null
          created_at?: string | null
          description?: string | null
          dietary?: string[] | null
          display_order?: number | null
          id?: string
          image_url?: string | null
          ingredients?: string[] | null
          name: string
          popular?: boolean | null
          prep_time?: string | null
          price: number
          seasonal?: boolean | null
          slug: string
          spice_level?: number | null
          stock_status?: string | null
          updated_at?: string | null
        }
        Update: {
          active?: boolean | null
          allergens?: string[] | null
          calories?: number | null
          category_id?: string | null
          chef_special?: boolean | null
          created_at?: string | null
          description?: string | null
          dietary?: string[] | null
          display_order?: number | null
          id?: string
          image_url?: string | null
          ingredients?: string[] | null
          name?: string
          popular?: boolean | null
          prep_time?: string | null
          price?: number
          seasonal?: boolean | null
          slug?: string
          spice_level?: number | null
          stock_status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "menu_1898_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      menu_arbol: {
        Row: {
          active: boolean | null
          allergens: string[] | null
          calories: number | null
          category_id: string | null
          chef_special: boolean | null
          created_at: string | null
          description: string | null
          dietary: string[] | null
          display_order: number | null
          id: string
          image_url: string | null
          ingredients: string[] | null
          name: string
          popular: boolean | null
          prep_time: string | null
          price: number
          seasonal: boolean | null
          slug: string
          spice_level: number | null
          stock_status: string | null
          updated_at: string | null
        }
        Insert: {
          active?: boolean | null
          allergens?: string[] | null
          calories?: number | null
          category_id?: string | null
          chef_special?: boolean | null
          created_at?: string | null
          description?: string | null
          dietary?: string[] | null
          display_order?: number | null
          id?: string
          image_url?: string | null
          ingredients?: string[] | null
          name: string
          popular?: boolean | null
          prep_time?: string | null
          price: number
          seasonal?: boolean | null
          slug: string
          spice_level?: number | null
          stock_status?: string | null
          updated_at?: string | null
        }
        Update: {
          active?: boolean | null
          allergens?: string[] | null
          calories?: number | null
          category_id?: string | null
          chef_special?: boolean | null
          created_at?: string | null
          description?: string | null
          dietary?: string[] | null
          display_order?: number | null
          id?: string
          image_url?: string | null
          ingredients?: string[] | null
          name?: string
          popular?: boolean | null
          prep_time?: string | null
          price?: number
          seasonal?: boolean | null
          slug?: string
          spice_level?: number | null
          stock_status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "menu_arbol_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      menu_capriccio: {
        Row: {
          active: boolean | null
          allergens: string[] | null
          calories: number | null
          category_id: string | null
          chef_special: boolean | null
          created_at: string | null
          description: string | null
          dietary: string[] | null
          display_order: number | null
          id: string
          image_url: string | null
          ingredients: string[] | null
          name: string
          popular: boolean | null
          prep_time: string | null
          price: number
          seasonal: boolean | null
          slug: string
          spice_level: number | null
          stock_status: string | null
          updated_at: string | null
        }
        Insert: {
          active?: boolean | null
          allergens?: string[] | null
          calories?: number | null
          category_id?: string | null
          chef_special?: boolean | null
          created_at?: string | null
          description?: string | null
          dietary?: string[] | null
          display_order?: number | null
          id?: string
          image_url?: string | null
          ingredients?: string[] | null
          name: string
          popular?: boolean | null
          prep_time?: string | null
          price: number
          seasonal?: boolean | null
          slug: string
          spice_level?: number | null
          stock_status?: string | null
          updated_at?: string | null
        }
        Update: {
          active?: boolean | null
          allergens?: string[] | null
          calories?: number | null
          category_id?: string | null
          chef_special?: boolean | null
          created_at?: string | null
          description?: string | null
          dietary?: string[] | null
          display_order?: number | null
          id?: string
          image_url?: string | null
          ingredients?: string[] | null
          name?: string
          popular?: boolean | null
          prep_time?: string | null
          price?: number
          seasonal?: boolean | null
          slug?: string
          spice_level?: number | null
          stock_status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "menu_capriccio_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      menu_1898_with_categories: {
        Row: {
          active: boolean | null
          allergens: string[] | null
          calories: number | null
          category_description: string | null
          category_display_order: number | null
          category_icon: string | null
          category_id: string | null
          category_name: string | null
          chef_special: boolean | null
          created_at: string | null
          description: string | null
          dietary: string[] | null
          display_order: number | null
          id: string | null
          image_url: string | null
          ingredients: string[] | null
          name: string | null
          popular: boolean | null
          prep_time: string | null
          price: number | null
          seasonal: boolean | null
          slug: string | null
          spice_level: number | null
          stock_status: string | null
          updated_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: "menu_1898_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      menu_arbol_with_categories: {
        Row: {
          active: boolean | null
          allergens: string[] | null
          calories: number | null
          category_description: string | null
          category_display_order: number | null
          category_icon: string | null
          category_id: string | null
          category_name: string | null
          chef_special: boolean | null
          created_at: string | null
          description: string | null
          dietary: string[] | null
          display_order: number | null
          id: string | null
          image_url: string | null
          ingredients: string[] | null
          name: string | null
          popular: boolean | null
          prep_time: string | null
          price: number | null
          seasonal: boolean | null
          slug: string | null
          spice_level: number | null
          stock_status: string | null
          updated_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: "menu_arbol_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      menu_capriccio_with_categories: {
        Row: {
          active: boolean | null
          allergens: string[] | null
          calories: number | null
          category_description: string | null
          category_display_order: number | null
          category_icon: string | null
          category_id: string | null
          category_name: string | null
          chef_special: boolean | null
          created_at: string | null
          description: string | null
          dietary: string[] | null
          display_order: number | null
          id: string | null
          image_url: string | null
          ingredients: string[] | null
          name: string | null
          popular: boolean | null
          prep_time: string | null
          price: number | null
          seasonal: boolean | null
          slug: string | null
          spice_level: number | null
          stock_status: string | null
          updated_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: "menu_capriccio_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
        Database["public"]["Views"])
    ? (Database["public"]["Tables"] &
        Database["public"]["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never