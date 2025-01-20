import { JwtPayload, jwtDecode } from 'jwt-decode';

export const decodeToken = (token: string | null): { isValid: boolean; expiration: number | null } => {
  if (!token) return { isValid: false, expiration: null };

  try {
    const decodedToken = jwtDecode<JwtPayload>(token);
    const expiration = decodedToken.exp ? decodedToken.exp * 1000 : null;
    const isValid = expiration ? expiration > Date.now() : false;

    return { isValid, expiration };
  } catch {
    return { isValid: false, expiration: null };
  }
};
