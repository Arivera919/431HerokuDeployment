import { api } from "@/services"; 
import { useQuery } from "@tanstack/react-query";

// Define the User type based on your database table
export type User = {
  id: string;
  first_name: string;
  last_name: string;
  major: string;
  email: string;
  grad_year: number;
  faculty: boolean;
  intro: string;
  available: Date;
  created_at: Date;
  updated_at: Date;
};

// Modify the API request to fetch users
export const findAll = async (query?: Record<string, any>) => {
  const response = await api.get<User[]>("users", {
    params: { ...query },
  });

  return response.data;
};

// Custom hook to fetch user data
export function useUsers(query?: Record<string, any>) {
  const {
    data,
    isFetching,
    refetch: getAllUsers,
  } = useQuery(["users"], async () => await findAll(query));

  return {
    users: data,
    isLoading: isFetching,
    getAllUsers,
  };
}
