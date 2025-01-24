import { Role } from "./Role";

interface User {
  userId: string;
  name: string;
  email: string;
  role: Role;
  isActive: boolean;
}
