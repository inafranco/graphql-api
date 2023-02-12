import type { PrismaClient } from "@prisma/client";
import prisma from "./prisma";

export interface Context {
  prisma: PrismaClient;
}

export async function createContext(): Promise<Context> {
  return { prisma };
}

export async function closeContext(): Promise<void> {
  await prisma.$disconnect();
}
