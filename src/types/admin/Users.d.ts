import { Role } from "./Role";

interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  isActive: boolean;
}
