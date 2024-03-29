import { createHash } from "https://deno.land/std@0.77.0/hash/mod.ts";

const hash = createHash("sha256");

/**
   * Function to hash specified password.
   * @param password The password to hash.
   * @returns the hashed password.
   */
export function hashPassword(password: string) {
    hash.update(password);
    const hashed = hash.toString();
    return hashed;
}