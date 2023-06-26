export interface AuthContextData {
    token: string | null;
    isLoggedIn: boolean;
    login: (token: string, accountType: string, username: string) => void;
    logout: () => void;
    accountType: string | null
    username: string | null
  }