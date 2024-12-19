export type AuthContextType = {
    user: string | null;
    login: (username: string) => void;
    logout: () => void;
  };