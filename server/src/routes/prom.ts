import express from "express";
import { Registry } from "prom-client";

export const initialize_prom = (app: express.Application, registry: Registry) => {
  app.get("/metrics", async (_req, res) => {
    res.status(200).setHeader("Content-Type", registry.contentType);
    res.send(await registry.metrics());
  });
};
