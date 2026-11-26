import * as runRepository from "../repositories/runRepository.js";

export async function createRunForUser(userId) {
  return runRepository.createRun(userId);
}

export async function updateRunResult(runId, outcome) {
  return runRepository.updateRunStats(runId, outcome);
}
