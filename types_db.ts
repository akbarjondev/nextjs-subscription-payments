export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      clients: {
        Row: {
          created_at: string
          dob: string | null
          first_name: string | null
          id: number
          last_name: string | null
          parent: Database["public"]["Enums"]["parent"] | null
          parent_phone: string | null
        }
        Insert: {
          created_at?: string
          dob?: string | null
          first_name?: string | null
          id?: number
          last_name?: string | null
          parent?: Database["public"]["Enums"]["parent"] | null
          parent_phone?: string | null
        }
        Update: {
          created_at?: string
          dob?: string | null
          first_name?: string | null
          id?: number
          last_name?: string | null
          parent?: Database["public"]["Enums"]["parent"] | null
          parent_phone?: string | null
        }
        Relationships: []
      }
      prices: {
        Row: {
          created_at: string
          id: number
          name: string | null
          service_id: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
          service_id?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
          service_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "prices_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          }
        ]
      }
      queues: {
        Row: {
          client_id: number | null
          created_at: string
          id: number
          queue_number: number | null
          service_id: number | null
          status: Database["public"]["Enums"]["status"] | null
        }
        Insert: {
          client_id?: number | null
          created_at?: string
          id?: number
          queue_number?: number | null
          service_id?: number | null
          status?: Database["public"]["Enums"]["status"] | null
        }
        Update: {
          client_id?: number | null
          created_at?: string
          id?: number
          queue_number?: number | null
          service_id?: number | null
          status?: Database["public"]["Enums"]["status"] | null
        }
        Relationships: [
          {
            foreignKeyName: "queues_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "queues_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          }
        ]
      }
      rooms: {
        Row: {
          created_at: string
          id: number
          name: string | null
          service_id: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
          service_id?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
          service_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "rooms_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          }
        ]
      }
      services: {
        Row: {
          created_at: string
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      parent: "otasi" | "onasi" | "yaqini"
      status: "pending" | "done" | "cancelled"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
